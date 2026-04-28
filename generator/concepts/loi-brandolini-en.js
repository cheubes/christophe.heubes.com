'use strict';

module.exports = {
  id:          'loi-brandolini-en',
  title:       "Brandolini's Law",
  category:    'Epistemology',
  tagline:     "Debunking nonsense takes ten times more energy than producing it.",
  description: "Bullshit asymmetry principle formulated by Alberto Brandolini: the energy required to refute a false claim far exceeds that required to produce it.",

  render(ctx) {
    const { palette: p } = ctx;

    const baseY = 840, maxH = 620;
    const bw = 140, rx = 10;
    const cxL = 340, cxR = 810;

    const hL = Math.round(maxH * 0.10);
    const yL = baseY - hL;
    const hR = maxH;
    const yR = baseY - hR;

    let grid = '';
    for (let i = 1; i <= 10; i++) {
      const gy = baseY - Math.round(maxH * i / 10);
      grid += `<line x1="${cxL - bw}" y1="${gy}" x2="${cxR + bw}" y2="${gy}"
        stroke="${p.muted}" stroke-width="0.8" opacity="0.08"/>`;
    }

    const barL = `
    <rect x="${cxL - bw / 2}" y="${yL}" width="${bw}" height="${hL}" rx="${rx}"
          fill="${p.muted}" fill-opacity="0.25" stroke="${p.muted}" stroke-width="1.5" opacity="0.40"/>`;

    const barR = `
    <rect x="${cxR - bw / 2}" y="${yR}" width="${bw}" height="${hR}" rx="${rx}"
          fill="${p.gold}" fill-opacity="0.55" stroke="${p.gold}" stroke-width="1.5" opacity="0.75"/>`;

    const baseline = `
    <line x1="${cxL - bw}" y1="${baseY}" x2="${cxR + bw}" y2="${baseY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>`;

    const colLabels = `
    <text x="${cxL}" y="${baseY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="1" fill="${p.muted}" opacity="0.50">PRODUCE</text>
    <text x="${cxR}" y="${baseY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="1" fill="${p.gold}" opacity="0.72">REFUTE</text>`;

    const valLabels = `
    <text x="${cxL}" y="${yL - 16}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.45">× 1</text>
    <text x="${cxR}" y="${yR - 16}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="40"
          fill="${p.gold}" opacity="0.82">× 10</text>`;

    const midX = (cxL + cxR) / 2;
    const connector = `
    <line x1="${cxL + bw / 2 + 15}" y1="${yR + hR / 2}" x2="${cxR - bw / 2 - 15}" y2="${yR + hR / 2}"
          stroke="${p.muted}" stroke-width="1" opacity="0.14" stroke-dasharray="4 4"/>
    <line x1="${cxL + bw / 2 + 15}" y1="${yL + hL / 2}" x2="${cxR - bw / 2 - 15}" y2="${yL + hL / 2}"
          stroke="${p.muted}" stroke-width="1" opacity="0.14" stroke-dasharray="4 4"/>
    <line x1="${midX}" y1="${yR + hR / 2}" x2="${midX}" y2="${yL + hL / 2}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.28" stroke-dasharray="3 4"/>
    <text x="${midX + 14}" y="${(yR + hR / 2 + yL + hL / 2) / 2 + 6}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.gold}" opacity="0.50">×10</text>`;

    return grid + baseline + barL + barR + valLabels + colLabels + connector;
  },
};
