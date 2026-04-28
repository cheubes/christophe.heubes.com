'use strict';

module.exports = {
  id:          'loi-kerr',
  title:       'Loi de Kerr',
  category:    'Économie & Incitations',
  tagline:     "On récompense A, on espère B — et on obtient A.",
  description: "Principe de Steven Kerr (1975) : les systèmes de récompense sont souvent découplés des objectifs réels, poussant les individus à maximiser ce qui est mesuré plutôt que ce qui compte.",

  render(ctx) {
    const { palette: p } = ctx;

    const bw = 270, bh = 160, by = 370, rx = 12;
    const cxA = 320, cxB = 820;

    // Box A: RÉCOMPENSÉ (gold)
    const boxA = `
    <rect x="${cxA - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="${rx}"
          fill="${p.gold}" fill-opacity="0.09" stroke="${p.gold}" stroke-width="2" opacity="0.70"/>
    <text x="${cxA}" y="${by + 48}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.gold}" opacity="0.82">A</text>
    <text x="${cxA}" y="${by + 82}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.60">CE QU'ON RÉCOMPENSE</text>
    <text x="${cxA}" y="${by + 106}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.gold}" opacity="0.40">ce qui est mesuré</text>`;

    // Box B: ESPÉRÉ (muted, dashed)
    const boxB = `
    <rect x="${cxB - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="${rx}"
          fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="2" opacity="0.35"
          stroke-dasharray="6 4"/>
    <text x="${cxB}" y="${by + 48}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.muted}" opacity="0.38">B</text>
    <text x="${cxB}" y="${by + 82}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.35">CE QU'ON ESPÈRE</text>
    <text x="${cxB}" y="${by + 106}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.muted}" opacity="0.25">l'objectif réel</text>`;

    // ≠ between boxes
    const neq = `
    <text x="570" y="${by + bh / 2 + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="44"
          fill="${p.muted}" opacity="0.25">≠</text>`;

    // COMPORTEMENT arrow: thick gold arrow pointing to Box A (not B)
    const arrowY = by + bh + 80;
    const behavior = `
    <text x="${cxA}" y="${arrowY - 30}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="2" fill="${p.gold}" opacity="0.55">COMPORTEMENT RÉEL</text>
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
          letter-spacing="1" fill="${p.muted}" opacity="0.28">COMPORTEMENT ESPÉRÉ</text>`;

    // Bottom note
    const note = `
    <text x="600" y="840" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Les incitations pilotent les actes. Pas les objectifs déclarés.</text>`;

    return boxA + boxB + neq + behavior + noArrow + note;
  },
};
