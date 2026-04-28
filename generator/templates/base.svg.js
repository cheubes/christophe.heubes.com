const { buildFontStyle } = require('../font-loader');
const c = require('../config');
const p = c.palette;
const today = new Date().toISOString().slice(0, 10);

/**
 * Génère le SVG complet pour un concept.
 * @param {object} concept - Le module concept exporté
 * @param {object} opts    - { w, h } dimensions
 * @returns {string}       - SVG complet
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
  const PAD     = 60;             // marge horizontale
  const HEADER_H = 100;           // hauteur header
  const FOOTER_H = 200;           // hauteur footer
  const MAIN_Y   = HEADER_H;
  const MAIN_H   = H - HEADER_H - FOOTER_H;
  const FOOTER_Y = H - FOOTER_H;

  // Zone de dessin du concept (centrée dans la zone principale)
  const ctx = {
    x: PAD,
    y: MAIN_Y,
    w: W - PAD * 2,
    h: MAIN_H,
    cx: W / 2,
    cy: MAIN_Y + MAIN_H / 2,
    palette: p,
  };

  const fontStyle = buildFontStyle();
  const conceptSVG = concept.render(ctx);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">

  <metadata>
    <dc:title>${xmlEscape(concept.title)}</dc:title>
    <dc:creator>Christophe Heubès</dc:creator>
    <dc:rights>CC BY-NC-SA 4.0 — christophe.heubes.com</dc:rights>
    <dc:description>${xmlEscape(concept.description)}</dc:description>
    <dc:subject>${xmlEscape(concept.category)}, concept, illustration, christophe.heubes.com</dc:subject>
    <dc:date>${today}</dc:date>
  </metadata>

  ${fontStyle}

  <!-- Fond -->
  <rect width="${W}" height="${H}" fill="${p.bg}"/>

  <!-- Header -->
  <text x="${PAD}" y="58"
        font-family="Ubuntu, sans-serif" font-weight="500" font-size="22"
        fill="${p.muted}" letter-spacing="2">${xmlEscape(concept.category.toUpperCase())}</text>
  <!-- Séparateur header -->
  <line x1="${PAD}" y1="78" x2="${W - PAD}" y2="78"
        stroke="${p.muted}" stroke-width="1" opacity="0.3"/>

  <!-- Zone principale -->
  <g transform="translate(0,0)">
    ${conceptSVG}
  </g>

  <!-- Séparateur footer -->
  <line x1="${PAD}" y1="${FOOTER_Y}" x2="${W - PAD}" y2="${FOOTER_Y}"
        stroke="${p.muted}" stroke-width="1" opacity="0.3"/>

  <!-- Footer : titre -->
  <text x="${PAD}" y="${FOOTER_Y + 60}"
        font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
        fill="${p.gold}">${concept.title}</text>

  <!-- Footer : tagline -->
  <text x="${PAD}" y="${FOOTER_Y + 110}"
        font-family="Ubuntu, sans-serif" font-weight="400" font-size="28"
        fill="${p.text}">${concept.tagline}</text>

  <!-- Footer : attribution -->
  <text x="${PAD}" y="${H - 28}"
        font-family="Ubuntu, sans-serif" font-weight="400" font-size="20"
        fill="${p.muted}">christophe.heubes.com</text>
  <text x="${W - PAD}" y="${H - 28}" text-anchor="end"
        font-family="Ubuntu, sans-serif" font-weight="400" font-size="20"
        fill="${p.muted}">CC BY-NC-SA 4.0</text>

</svg>`;
}

module.exports = { buildSVG };
