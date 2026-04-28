'use strict';

module.exports = {
  id:          'loi-kerr-en',
  title:       "Kerr's Law",
  category:    'Economics & Incentives',
  tagline:     "We reward A, we hope for B — and we get A.",
  description: "Principle by Steven Kerr (1975): reward systems are often decoupled from real objectives, pushing individuals to maximize what is measured rather than what matters.",

  render(ctx) {
    const { palette: p } = ctx;

    const bw = 270, bh = 160, by = 370, rx = 12;
    const cxA = 320, cxB = 820;

    // Box A: REWARDED (gold)
    const boxA = `
    <rect x="${cxA - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="${rx}"
          fill="${p.gold}" fill-opacity="0.09" stroke="${p.gold}" stroke-width="2" opacity="0.70"/>
    <text x="${cxA}" y="${by + 48}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.gold}" opacity="0.82">A</text>
    <text x="${cxA}" y="${by + 82}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.60">WHAT WE REWARD</text>
    <text x="${cxA}" y="${by + 106}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.gold}" opacity="0.40">what is measured</text>`;

    // Box B: HOPED FOR (muted, dashed)
    const boxB = `
    <rect x="${cxB - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="${rx}"
          fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="2" opacity="0.35"
          stroke-dasharray="6 4"/>
    <text x="${cxB}" y="${by + 48}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.muted}" opacity="0.38">B</text>
    <text x="${cxB}" y="${by + 82}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.35">WHAT WE HOPE FOR</text>
    <text x="${cxB}" y="${by + 106}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.muted}" opacity="0.25">the real objective</text>`;

    // ≠ between boxes
    const neq = `
    <text x="570" y="${by + bh / 2 + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="44"
          fill="${p.muted}" opacity="0.25">≠</text>`;

    // BEHAVIOR arrow pointing to Box A
    const arrowY = by + bh + 80;
    const behavior = `
    <text x="${cxA}" y="${arrowY - 30}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="2" fill="${p.gold}" opacity="0.55">ACTUAL BEHAVIOR</text>
    <line x1="${cxA}" y1="${arrowY - 10}" x2="${cxA}" y2="${by + bh + 12}"
          stroke="${p.gold}" stroke-width="3" opacity="0.65"/>
    <polygon points="${cxA - 8},${by + bh + 12} ${cxA + 8},${by + bh + 12} ${cxA},${by + bh}"
             fill="${p.gold}" opacity="0.65"/>`;

    // Dashed arrow NOT pointing to B
    const noArrow = `
    <line x1="${cxB}" y1="${arrowY - 10}" x2="${cxB}" y2="${by + bh + 30}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.18" stroke-dasharray="4 4"/>
    <text x="${cxB}" y="${arrowY - 30}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.28">HOPED-FOR BEHAVIOR</text>`;

    // Bottom note
    const note = `
    <text x="600" y="840" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Incentives drive actions. Not stated objectives.</text>`;

    return boxA + boxB + neq + behavior + noArrow + note;
  },
};
