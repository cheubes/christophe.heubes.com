'use strict';

module.exports = {
  id:          'effet-ringelmann',
  title:       'Effet Ringelmann',
  category:    'Psychologie & Comportement',
  tagline:     "Plus le groupe est grand, moins chaque membre contribue.",
  description: "Découvert par Maximilien Ringelmann (1913) : l'effort individuel diminue à mesure que la taille du groupe augmente. La dilution de la responsabilité réduit l'implication de chacun.",

  render(ctx) {
    const { palette: p } = ctx;

    const gx0 = 195, gy0 = 195, gy1 = 680, barW = 130, gap = 55;

    const data = [
      { n: 1, label: '1 pers.',  effort: 100, col: p.gold,  fillOp: '0.32', op: '0.80' },
      { n: 2, label: '2 pers.',  effort: 93,  col: p.gold,  fillOp: '0.20', op: '0.60' },
      { n: 4, label: '4 pers.',  effort: 77,  col: p.muted, fillOp: '0.28', op: '0.50' },
      { n: 8, label: '8 pers.',  effort: 49,  col: p.muted, fillOp: '0.38', op: '0.68' },
    ];

    const maxH = gy1 - gy0;
    const toH = e => Math.round(maxH * e / 100);

    // Axes
    let svg = `
    <line x1="${gx0 - 12}" y1="${gy0}" x2="${gx0 - 12}" y2="${gy1 + 4}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>
    <line x1="${gx0 - 12}" y1="${gy1}" x2="${gx0 + data.length * (barW + gap) + 60}" y2="${gy1}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>`;

    // Y axis ticks & labels
    for (const pct of [25, 50, 75, 100]) {
      const ty = gy1 - toH(pct);
      svg += `
      <line x1="${gx0 - 18}" y1="${ty}" x2="${gx0 - 12}" y2="${ty}"
            stroke="${p.muted}" stroke-width="1" opacity="0.20"/>
      <text x="${gx0 - 24}" y="${ty + 5}" text-anchor="end"
            font-family="Ubuntu, sans-serif" font-size="12" fill="${p.muted}" opacity="0.30">${pct}%</text>
      <line x1="${gx0 - 12}" y1="${ty}" x2="${gx0 + data.length * (barW + gap) + 60}" y2="${ty}"
            stroke="${p.muted}" stroke-width="1" opacity="0.07" stroke-dasharray="4 6"/>`;
    }

    // Y axis label
    const axLabelX = gx0 - 52, axLabelY = (gy0 + gy1) / 2;
    svg += `
    <text x="${axLabelX}" y="${axLabelY + 5}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.35"
          transform="rotate(-90, ${axLabelX}, ${axLabelY})">effort individuel</text>`;

    // Bars
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const bx = gx0 + i * (barW + gap);
      const bh = toH(d.effort);
      const by = gy1 - bh;

      svg += `
      <rect x="${bx}" y="${by}" width="${barW}" height="${bh}" rx="5"
            fill="${d.col}" fill-opacity="${d.fillOp}" stroke="${d.col}" stroke-width="1.5" opacity="${d.op}"/>
      <text x="${bx + barW / 2}" y="${by - 14}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
            fill="${d.col}" opacity="${d.op}">${d.effort}%</text>
      <text x="${bx + barW / 2}" y="${gy1 + 24}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
            fill="${d.col}" opacity="${d.op}">${d.label}</text>`;
    }

    // Trend arrow
    const arrowXStart = gx0 + 60;
    const arrowXEnd = gx0 + data.length * (barW + gap) - 24;
    const arrowY = gy1 + 68;
    svg += `
    <line x1="${arrowXStart}" y1="${arrowY}" x2="${arrowXEnd}" y2="${arrowY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.22" stroke-dasharray="5 3"/>
    <polygon points="${arrowXEnd},${arrowY - 5} ${arrowXEnd},${arrowY + 5} ${arrowXEnd + 14},${arrowY}"
             fill="${p.muted}" opacity="0.22"/>`;

    const caption = `
    <text x="600" y="860" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">La responsabilité diluée réduit l'effort de chacun.</text>`;

    return svg + caption;
  },
};
