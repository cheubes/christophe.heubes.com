'use strict';

module.exports = {
  id:          'effet-halo-en',
  title:       'Halo Effect',
  category:    'Biases & Heuristics',
  tagline:     "One positive trait colors the entire perception of a person.",
  description: "Cognitive bias identified by Edward Thorndike (1920): the favorable impression left by one salient trait unconsciously shapes the judgment made on all other traits.",

  render(ctx) {
    const { palette: p } = ctx;

    const cx = 600, cy = 468, cr = 72;

    const halo = `
    <circle cx="${cx}" cy="${cy}" r="${cr + 50}"
            fill="${p.gold}" fill-opacity="0.05"
            stroke="${p.gold}" stroke-width="1.5" opacity="0.22" stroke-dasharray="4 4"/>
    <circle cx="${cx}" cy="${cy}" r="${cr + 88}"
            fill="none"
            stroke="${p.gold}" stroke-width="1" opacity="0.10" stroke-dasharray="2 6"/>`;

    const center = `
    <circle cx="${cx}" cy="${cy}" r="${cr}"
            fill="${p.gold}" fill-opacity="0.14"
            stroke="${p.gold}" stroke-width="2.5" opacity="0.80"/>
    <text x="${cx}" y="${cy - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.85">POSITIVE</text>
    <text x="${cx}" y="${cy + 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.85">TRAIT</text>
    <text x="${cx}" y="${cy + 32}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.gold}" opacity="0.50">dominant</text>`;

    const attrDist = 192, nodeR = 44;
    const attrs = ['Competence', 'Intelligence', 'Reliability', 'Honesty', 'Leadership', 'Creativity'];

    let nodes = '';
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 - 90) * Math.PI / 180;
      const nx = Math.round(cx + attrDist * Math.cos(angle));
      const ny = Math.round(cy + attrDist * Math.sin(angle));
      const dx = nx - cx, dy = ny - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const x1 = Math.round(cx + (cr + 4) * dx / dist);
      const y1 = Math.round(cy + (cr + 4) * dy / dist);
      const x2 = Math.round(nx - (nodeR + 4) * dx / dist);
      const y2 = Math.round(ny - (nodeR + 4) * dy / dist);

      nodes += `
      <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
            stroke="${p.gold}" stroke-width="1.5" opacity="0.30"/>
      <circle cx="${nx}" cy="${ny}" r="${nodeR}"
              fill="${p.gold}" fill-opacity="0.08"
              stroke="${p.gold}" stroke-width="1.8" opacity="0.58"/>
      <text x="${nx}" y="${ny + 5}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
            fill="${p.gold}" opacity="0.70">${attrs[i]}</text>`;
    }

    const caption = `
    <text x="600" y="858" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">One positive trait colors the perception of all the others.</text>`;

    return halo + center + nodes + caption;
  },
};
