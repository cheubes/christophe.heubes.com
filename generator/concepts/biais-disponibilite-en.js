'use strict';

module.exports = {
  id:          'biais-disponibilite-en',
  title:       'Availability Bias',
  category:    'Biases & Heuristics',
  tagline:     "We judge as probable what comes easily to mind.",
  description: "Heuristic described by Kahneman and Tversky (1973): people assess the probability of an event by how easily examples come to mind — not by actual statistics.",

  render(ctx) {
    const { palette: p } = ctx;

    const bx = 460, maxW = 490, barH = 30, innerGap = 14, exGap = 90;

    const headers = `
    <text x="260" y="240" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">EXAMPLE</text>
    <rect x="${bx}" y="220" width="16" height="12" rx="2"
          fill="${p.gold}" fill-opacity="0.30" stroke="${p.gold}" opacity="0.55"/>
    <text x="${bx + 24}" y="231" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.60">PERCEIVED RISK</text>
    <rect x="${bx + 188}" y="220" width="16" height="12" rx="2"
          fill="${p.muted}" fill-opacity="0.22" stroke="${p.muted}" opacity="0.40"/>
    <text x="${bx + 212}" y="231" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">ACTUAL RISK</text>`;

    const examples = [
      { label: 'Plane crash',       perceived: 0.78, real: 0.07 },
      { label: 'Shark attack',      perceived: 0.62, real: 0.01 },
      { label: 'Car accident',      perceived: 0.32, real: 0.90 },
    ];

    let bars = '';
    let y = 290;
    for (const ex of examples) {
      const pw = Math.round(maxW * ex.perceived);
      const rw = Math.round(maxW * ex.real);
      const midY = y + barH + innerGap / 2;

      bars += `
      <text x="${bx - 16}" y="${midY + 5}" text-anchor="end"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
            fill="${p.muted}" opacity="0.55">${ex.label}</text>
      <rect x="${bx}" y="${y}" width="${pw}" height="${barH}" rx="4"
            fill="${p.gold}" fill-opacity="0.22" stroke="${p.gold}" stroke-width="1" opacity="0.55"/>
      <rect x="${bx}" y="${y + barH + innerGap}" width="${rw}" height="${barH}" rx="4"
            fill="${p.muted}" fill-opacity="0.18" stroke="${p.muted}" stroke-width="1" opacity="0.38"/>`;

      y += barH * 2 + innerGap + exGap;
    }

    const noteY = y - exGap + 18;
    const note = `
    <text x="${bx}" y="${noteY}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          font-style="italic" fill="${p.muted}" opacity="0.30">← car accidents are underestimated because they are less vivid</text>`;

    const caption = `
    <text x="600" y="858" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">What is memorable is not what is probable.</text>`;

    return headers + bars + note + caption;
  },
};
