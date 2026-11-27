const { buildFontStyle } = require('../font-loader');
const c = require('../config');
const p = c.palette;
const today = new Date().toISOString().slice(0, 10);

/**
 * Generates the complete SVG for a concept.
 * @param {object} concept - The exported concept module
 * @param {object} opts    - { w, h } dimensions
 * @returns {string}       - Complete SVG
 */
function xmlEscape(str) {
  return String(str)
    .replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSVG(concept, opts = {}) {
  const W = opts.w || c.size.w;
  const H = opts.h || c.size.h;

  // Zones
  const PAD     = 60;             // horizontal margin
  const HEADER_H = 195;           // header height (title + tagline)
  const FOOTER_H = 90;            // footer height (attribution)
  const CATEGORY_H = 50;          // category label, above the footer separator
  const MAIN_Y   = HEADER_H;
  const MAIN_H   = H - HEADER_H - FOOTER_H - CATEGORY_H;
  const FOOTER_Y = H - FOOTER_H;

  // Concept drawing area (centred in the main area)
  const ctx = {
    x: PAD,
    y: MAIN_Y,
    w: W - PAD * 2,
    h: MAIN_H,
    cx: W / 2,
    cy: MAIN_Y + MAIN_H / 2,
    palette: p,
    font: c.fonts.stack,
  };

  const fontStyle = buildFontStyle();
  const conceptSVG = concept.render(ctx);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">

  <metadata>
    <dc:title>${xmlEscape(concept.title)}</dc:title>
    <dc:creator>Christophe Heubès</dc:creator>
    <dc:rights>CC0 1.0 Universal — christophe.heubes.com</dc:rights>
    <dc:description>${xmlEscape(concept.description)}</dc:description>
    <dc:subject>${xmlEscape(concept.category)}, concept, illustration, christophe.heubes.com</dc:subject>
    <dc:date>${today}</dc:date>
  </metadata>

  ${fontStyle}

  <rect width="${W}" height="${H}" fill="${p.bg}"/>

  <text x="${PAD}" y="110"
        font-family="${c.fonts.stack}" font-weight="700" font-size="58"
        fill="${p.gold}">${concept.title}</text>

  <text x="${PAD}" y="158"
        font-family="${c.fonts.stack}" font-weight="400" font-size="29"
        fill="${p.text}">${concept.tagline}</text>

  <line x1="${PAD}" y1="${HEADER_H}" x2="${W - PAD}" y2="${HEADER_H}"
        stroke="${p.muted}" stroke-width="1.5" opacity="0.45"/>

  <g transform="translate(0,0)">
    ${conceptSVG}
  </g>

  <text x="${W - PAD}" y="${FOOTER_Y - 22}" text-anchor="end"
        font-family="${c.fonts.stack}" font-weight="500" font-size="26"
        fill="${p.muted}" letter-spacing="2">${xmlEscape(concept.category.toUpperCase())}</text>

  <line x1="${PAD}" y1="${FOOTER_Y}" x2="${W - PAD}" y2="${FOOTER_Y}"
        stroke="${p.muted}" stroke-width="1.5" opacity="0.45"/>

  <text x="${PAD}" y="${H - 28}"
        font-family="${c.fonts.stack}" font-weight="400" font-size="22"
        fill="${p.muted}">christophe.heubes.com</text>
  <text x="${W - PAD}" y="${H - 28}" text-anchor="end"
        font-family="${c.fonts.stack}" font-weight="400" font-size="22"
        fill="${p.muted}">CC0 1.0</text>

</svg>
`;
}

module.exports = { buildSVG };
