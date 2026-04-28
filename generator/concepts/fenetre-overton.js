'use strict';

module.exports = {
  id:          'fenetre-overton',
  title:       "Fenêtre d'Overton",
  category:    'Économie & Incitations',
  tagline:     "Ce qui est politiquement acceptable n'est pas fixe — ça se déplace.",
  description: "Concept de Joseph Overton : à chaque époque, seule une portion du spectre des idées politiques est considérée comme acceptable. Cette fenêtre peut se déplacer avec le temps.",

  render(ctx) {
    const { palette: p } = ctx;

    const sx = 395, sw = 410, lh = 100;
    const levels = [
      { y: 225, label: 'POLITIQUE EN VIGUEUR', bold: true,  col: p.gold,  op: 0.85, fillOp: 0.14 },
      { y: 325, label: 'POPULAIRE',            bold: true,  col: p.gold,  op: 0.68, fillOp: 0.09 },
      { y: 425, label: 'ACCEPTABLE',           bold: false, col: p.gold,  op: 0.52, fillOp: 0.06 },
      { y: 525, label: 'SENSÉ',                bold: false, col: p.muted, op: 0.42, fillOp: 0.04 },
      { y: 625, label: 'RADICAL',              bold: false, col: p.muted, op: 0.28, fillOp: 0.03 },
      { y: 725, label: 'IMPENSABLE',           bold: false, col: p.muted, op: 0.17, fillOp: 0.02 },
    ];

    let spectrum = '';
    for (const lv of levels) {
      spectrum += `
      <rect x="${sx}" y="${lv.y}" width="${sw}" height="${lh}"
            fill="${lv.col}" fill-opacity="${lv.fillOp}"
            stroke="${p.muted}" stroke-width="0.5" opacity="0.22"/>
      <text x="${sx + sw / 2}" y="${lv.y + lh / 2 + 7}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="${lv.bold ? '700' : '400'}" font-size="17"
            letter-spacing="2" fill="${lv.col}" opacity="${lv.op}">${lv.label}</text>`;
    }

    // Overton window: covers POPULAIRE, ACCEPTABLE, SENSÉ → y=325 to y=625
    const winY = 325, winH = 300;
    const win = `
    <rect x="${sx - 10}" y="${winY - 10}" width="${sw + 20}" height="${winH + 20}" rx="10"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.72"/>`;

    // Vertical label to the left (rotated)
    const labelX = sx - 38, labelCY = winY + winH / 2;
    const winLabel = `
    <line x1="${sx - 14}" y1="${winY}" x2="${sx - 24}" y2="${winY}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.45"/>
    <line x1="${sx - 24}" y1="${winY}" x2="${sx - 24}" y2="${winY + winH}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.45"/>
    <line x1="${sx - 24}" y1="${winY + winH}" x2="${sx - 14}" y2="${winY + winH}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.45"/>
    <text x="${labelX}" y="${labelCY + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.55"
          transform="rotate(-90, ${labelX}, ${labelCY})">FENÊTRE D'OVERTON</text>`;

    // Dashed alternative window (shifted higher) to show mobility
    const win2 = `
    <rect x="${sx - 10}" y="${225 - 10}" width="${sw + 20}" height="${winH + 20}" rx="10"
          fill="none" stroke="${p.gold}" stroke-width="1.5" opacity="0.18" stroke-dasharray="6 4"/>`;

    // Shift arrow on right
    const rArrow = `
    <line x1="${sx + sw + 28}" y1="${winY + winH / 2}" x2="${sx + sw + 28}" y2="${225 + lh / 2}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28" stroke-dasharray="4 3"/>
    <polygon points="${sx + sw + 21},${225 + lh / 2 + 8} ${sx + sw + 35},${225 + lh / 2 + 8} ${sx + sw + 28},${225 + lh / 2}"
             fill="${p.muted}" opacity="0.28"/>
    <text x="${sx + sw + 42}" y="${(winY + winH / 2 + 225 + lh / 2) / 2 + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12" letter-spacing="1"
          fill="${p.muted}" opacity="0.32">déplacement</text>`;

    return spectrum + win + win2 + winLabel + rArrow;
  },
};
