'use strict';

module.exports = {
  id:          'paradoxe-abilene',
  title:       "Paradoxe d'Abilène",
  category:    'Management & Organisations',
  tagline:     "Un groupe peut décider collectivement ce que personne ne veut individuellement.",
  description: "Décrit par Jerry Harvey (1974) : dans un groupe, chacun suppose que les autres approuvent une idée et valide par politesse — menant à une décision unanime que personne ne souhaitait.",

  render(ctx) {
    const { palette: p } = ctx;

    const cx = 600, cy = 490, r = 222, nodeR = 30;

    // Center decision box
    const boxW = 210, boxH = 112;
    const center = `
    <rect x="${cx - boxW / 2}" y="${cy - boxH / 2}" width="${boxW}" height="${boxH}" rx="12"
          fill="${p.gold}" fill-opacity="0.12"
          stroke="${p.gold}" stroke-width="2.5" opacity="0.72"/>
    <text x="${cx}" y="${cy - 18}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.58">DÉCISION</text>
    <text x="${cx}" y="${cy + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="28"
          fill="${p.gold}" opacity="0.82">OUI ✓</text>
    <text x="${cx}" y="${cy + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.gold}" opacity="0.42">vote unanime</text>`;

    // Pentagon of 5 nodes
    let nodes = '';
    const innerR = Math.sqrt((boxW / 2) ** 2 + (boxH / 2) ** 2);

    for (let i = 0; i < 5; i++) {
      const angle = (i * 72 - 90) * Math.PI / 180;
      const nx = Math.round(cx + r * Math.cos(angle));
      const ny = Math.round(cy + r * Math.sin(angle));
      const dx = nx - cx, dy = ny - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const lx1 = Math.round(cx + (innerR + 10) * dx / dist);
      const ly1 = Math.round(cy + (innerR + 10) * dy / dist);
      const lx2 = Math.round(nx - (nodeR + 6) * dx / dist);
      const ly2 = Math.round(ny - (nodeR + 6) * dy / dist);

      nodes += `
      <line x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}"
            stroke="${p.muted}" stroke-width="1.5" opacity="0.18" stroke-dasharray="4 3"/>
      <circle cx="${nx}" cy="${ny}" r="${nodeR}"
              fill="${p.muted}" fill-opacity="0.14"
              stroke="${p.muted}" stroke-width="1.8" opacity="0.48"/>`;

      // ✗ NON label placed away from center
      const textR = r + nodeR + 26;
      const tx = Math.round(cx + textR * Math.cos(angle));
      const ty = Math.round(cy + textR * Math.sin(angle));
      nodes += `
      <text x="${tx}" y="${ty + 5}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
            fill="${p.muted}" opacity="0.42">✗ NON</text>`;
    }

    const caption = `
    <text x="600" y="858" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Chacun pense que les autres veulent — alors personne n'ose dire non.</text>`;

    return center + nodes + caption;
  },
};
