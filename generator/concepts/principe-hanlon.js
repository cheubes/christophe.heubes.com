'use strict';

module.exports = {
  id:          'principe-hanlon',
  title:       'Principe de Hanlon',
  category:    'Épistémologie',
  tagline:     "N'attribuez jamais à la malveillance ce qui s'explique par l'incompétence.",
  description: "Rasoir de Hanlon : face à un comportement négatif, l'explication par l'erreur ou l'incompétence est statistiquement plus probable que celle par la malveillance intentionnelle.",

  render(ctx) {
    const { palette: p } = ctx;

    // Three horizontal bars (probability of explanation)
    const barX0 = 380, barMaxW = 620, barH = 58, rx = 8;
    const rows = [
      { y: 310, label: 'ERREUR / HASARD',    w: 1.00, col: p.gold,  opFill: 0.65, opStroke: 0.75 },
      { y: 460, label: 'NÉGLIGENCE',          w: 0.52, col: p.muted, opFill: 0.35, opStroke: 0.45 },
      { y: 610, label: 'MALVEILLANCE',        w: 0.20, col: p.muted, opFill: 0.18, opStroke: 0.28 },
    ];

    // Background tracks
    let tracks = '';
    for (const row of rows) {
      tracks += `
      <rect x="${barX0}" y="${row.y}" width="${barMaxW}" height="${barH}" rx="${rx}"
            fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;
    }

    // Filled bars
    let bars = '';
    for (const row of rows) {
      const fw = Math.round(row.w * barMaxW);
      bars += `
      <rect x="${barX0}" y="${row.y}" width="${fw}" height="${barH}" rx="${rx}"
            fill="${row.col}" fill-opacity="${row.opFill}" stroke="${row.col}" stroke-width="1.5" opacity="${row.opStroke}"/>`;
    }

    // Left labels (right-aligned at barX0 - 16)
    let labels = '';
    for (const row of rows) {
      const isGold = row.col === p.gold;
      labels += `
      <text x="${barX0 - 18}" y="${row.y + barH / 2 + 6}" text-anchor="end"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
            letter-spacing="1" fill="${row.col}" opacity="${isGold ? '0.80' : '0.45'}">${row.label}</text>`;
    }

    // Percentage labels inside / after bars
    const pcts = ['PROBABLE', '×0.5', '×0.2'];
    let pctLabels = '';
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const fw = Math.round(row.w * barMaxW);
      const isGold = row.col === p.gold;
      pctLabels += `
      <text x="${barX0 + fw + 12}" y="${row.y + barH / 2 + 6}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="${isGold ? '700' : '400'}" font-size="14"
            fill="${row.col}" opacity="${isGold ? '0.70' : '0.38'}">${pcts[i]}</text>`;
    }

    // Question at top
    const question = `
    <text x="600" y="222" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="15"
          letter-spacing="2" fill="${p.muted}" opacity="0.38">POURQUOI QUELQUE CHOSE A-T-IL MAL TOURNÉ ?</text>`;

    // Arrow from left axis
    const axis = `
    <line x1="${barX0}" y1="270" x2="${barX0}" y2="${610 + barH + 20}"
          stroke="${p.muted}" stroke-width="1" opacity="0.15"/>`;

    // Bottom caption
    const caption = `
    <text x="600" y="765" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Commencer par la plus probable.</text>`;

    return question + axis + tracks + bars + labels + pctLabels + caption;
  },
};
