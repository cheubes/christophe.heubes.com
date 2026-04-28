'use strict';

module.exports = {
  id:          'loi-brandolini',
  title:       'Loi de Brandolini',
  category:    'Épistémologie',
  tagline:     "Réfuter une bêtise demande dix fois plus d'énergie que l'énoncer.",
  description: "Principe d'asymétrie du bullshit formulé par Alberto Brandolini : l'énergie nécessaire pour réfuter une affirmation fausse est bien supérieure à celle requise pour la produire.",

  render(ctx) {
    const { palette: p } = ctx;

    const baseY = 840, maxH = 620;
    const bw = 140, rx = 10;
    const cxL = 340, cxR = 810;

    // Small bar (left): ÉNONCER — 1 unit
    const hL = Math.round(maxH * 0.10); // 62px
    const yL = baseY - hL;

    // Tall bar (right): RÉFUTER — 10 units
    const hR = maxH; // 620px
    const yR = baseY - hR;

    // Background guide lines (very faint horizontal gridlines)
    let grid = '';
    for (let i = 1; i <= 10; i++) {
      const gy = baseY - Math.round(maxH * i / 10);
      grid += `<line x1="${cxL - bw}" y1="${gy}" x2="${cxR + bw}" y2="${gy}"
        stroke="${p.muted}" stroke-width="0.8" opacity="0.08"/>`;
    }

    // Bars
    const barL = `
    <rect x="${cxL - bw / 2}" y="${yL}" width="${bw}" height="${hL}" rx="${rx}"
          fill="${p.muted}" fill-opacity="0.25" stroke="${p.muted}" stroke-width="1.5" opacity="0.40"/>`;

    const barR = `
    <rect x="${cxR - bw / 2}" y="${yR}" width="${bw}" height="${hR}" rx="${rx}"
          fill="${p.gold}" fill-opacity="0.55" stroke="${p.gold}" stroke-width="1.5" opacity="0.75"/>`;

    // Baseline
    const baseline = `
    <line x1="${cxL - bw}" y1="${baseY}" x2="${cxR + bw}" y2="${baseY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>`;

    // Column labels below baseline
    const colLabels = `
    <text x="${cxL}" y="${baseY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="1" fill="${p.muted}" opacity="0.50">ÉNONCER</text>
    <text x="${cxR}" y="${baseY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="1" fill="${p.gold}" opacity="0.72">RÉFUTER</text>`;

    // Value labels above each bar
    const valLabels = `
    <text x="${cxL}" y="${yL - 16}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.45">× 1</text>
    <text x="${cxR}" y="${yR - 16}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="40"
          fill="${p.gold}" opacity="0.82">× 10</text>`;

    // Arrow / connector showing the gap
    const midX = (cxL + cxR) / 2; // 575
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
