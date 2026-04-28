'use strict';

module.exports = {
  id:          'fenetre-overton-en',
  title:       'Overton Window',
  category:    'Economics & Incentives',
  tagline:     "Only ideas within the window are politically viable — and the window moves.",
  description: "Concept introduced by Joseph Overton: at any given moment, only a narrow range of ideas is politically acceptable. Ideas outside the window are dismissed as radical or unthinkable — until the window shifts.",

  render(ctx) {
    const { palette: p } = ctx;

    const sx = 395, sw = 410, lh = 100;
    const levels = [
      { y: 225, label: 'CURRENT POLICY',  bold: true,  col: p.gold,  op: 0.85, fillOp: 0.14 },
      { y: 325, label: 'POPULAR',         bold: true,  col: p.gold,  op: 0.68, fillOp: 0.09 },
      { y: 425, label: 'ACCEPTABLE',      bold: false, col: p.gold,  op: 0.52, fillOp: 0.06 },
      { y: 525, label: 'SENSIBLE',        bold: false, col: p.muted, op: 0.42, fillOp: 0.04 },
      { y: 625, label: 'RADICAL',         bold: false, col: p.muted, op: 0.28, fillOp: 0.03 },
      { y: 725, label: 'UNTHINKABLE',     bold: false, col: p.muted, op: 0.17, fillOp: 0.02 },
    ];

    let bars = '';
    for (const lv of levels) {
      bars += `
      <rect x="${sx}" y="${lv.y}" width="${sw}" height="${lh - 4}" rx="6"
            fill="${lv.col}" fill-opacity="${lv.fillOp}"
            stroke="${lv.col}" stroke-width="1" opacity="${lv.op * 0.4}"/>
      <text x="${sx + sw / 2}" y="${lv.y + lh / 2 + 6}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="${lv.bold ? '700' : '400'}" font-size="${lv.bold ? '16' : '14'}"
            letter-spacing="2" fill="${lv.col}" opacity="${lv.op}">${lv.label}</text>`;
    }

    // Overton window border
    const winY = 325, winH = 300;
    const window = `
    <rect x="${sx - 8}" y="${winY - 8}" width="${sw + 16}" height="${winH + 16}" rx="10"
          fill="none" stroke="${p.gold}" stroke-width="2.5" opacity="0.70"/>
    <text x="${sx - 38}" y="${winY + winH / 2 + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="12"
          letter-spacing="2" fill="${p.gold}" opacity="0.55"
          transform="rotate(-90, ${sx - 38}, ${winY + winH / 2 + 6})">OVERTON WINDOW</text>`;

    // Mobility indicator
    const mobility = `
    <rect x="${sx - 8}" y="${winY - 108}" width="${sw + 16}" height="${winH + 16}" rx="10"
          fill="none" stroke="${p.gold}" stroke-width="1.5" opacity="0.22"
          stroke-dasharray="6 4"/>
    <text x="${sx + sw + 28}" y="${winY - 108 + winH / 2 + 6}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.38">window</text>
    <text x="${sx + sw + 28}" y="${winY - 108 + winH / 2 + 22}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.38">can shift</text>
    <line x1="${sx + sw + 20}" y1="${winY - 18}" x2="${sx + sw + 20}" y2="${winY - 82}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.35"/>
    <polygon points="${sx + sw + 14},${winY - 82} ${sx + sw + 26},${winY - 82} ${sx + sw + 20},${winY - 96}"
             fill="${p.gold}" opacity="0.35"/>`;

    const note = `
    <text x="600" y="868" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Public discourse determines where the window sits.</text>`;

    return bars + window + mobility + note;
  },
};
