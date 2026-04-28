'use strict';

module.exports = {
  id:          'principe-postel',
  title:       'Principe de Postel',
  category:    'Ingénierie & Technologie',
  tagline:     "Sois libéral dans ce que tu acceptes, conservateur dans ce que tu émets.",
  description: "Principe de Jon Postel (RFC 793, 1980) : pour assurer l'interopérabilité, un système doit accepter des entrées variantes ou imparfaites, mais produire des sorties strictement conformes aux standards.",

  render(ctx) {
    const { palette: p } = ctx;

    // Left column: ACCEPTER (liberal) — wide
    const lx = 140, ly = 228, lw = 350, lh = 490;
    const inputs = ['Format XML', 'Format JSON', 'Casse variable', 'Espaces superflus', 'Champs optionnels'];

    let leftCol = `
    <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="12"
          fill="${p.gold}" fill-opacity="0.06" stroke="${p.gold}" stroke-width="2" opacity="0.55"/>
    <text x="${lx + lw / 2}" y="${ly + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="2" fill="${p.gold}" opacity="0.72">ACCEPTER</text>
    <text x="${lx + lw / 2}" y="${ly + 62}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.48">LIBÉRAL</text>`;

    for (let i = 0; i < inputs.length; i++) {
      const iy = ly + 108 + i * 70;
      leftCol += `
      <text x="${lx + 28}" y="${iy}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
            fill="${p.gold}" opacity="0.58">✓</text>
      <text x="${lx + 56}" y="${iy}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
            fill="${p.gold}" opacity="0.55">${inputs[i]}</text>`;
    }

    // Right column: ÉMETTRE (conservative) — narrower
    const rx2 = 762, ry = 340, rw = 258, rh = 268;
    const outputs = ['Format canonique unique', 'Valeurs normalisées', 'Conforme au standard'];

    let rightCol = `
    <rect x="${rx2}" y="${ry}" width="${rw}" height="${rh}" rx="12"
          fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="2" opacity="0.38"/>
    <text x="${rx2 + rw / 2}" y="${ry + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="2" fill="${p.muted}" opacity="0.55">ÉMETTRE</text>
    <text x="${rx2 + rw / 2}" y="${ry + 62}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.38">CONSERVATEUR</text>`;

    for (let i = 0; i < outputs.length; i++) {
      const iy = ry + 108 + i * 54;
      rightCol += `
      <text x="${rx2 + 28}" y="${iy}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
            fill="${p.muted}" opacity="0.42">→</text>
      <text x="${rx2 + 52}" y="${iy}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
            fill="${p.muted}" opacity="0.40">${outputs[i]}</text>`;
    }

    // Funnel lines converging from left box to right box
    const funnelTop = ly + 90;
    const funnelBot = ly + lh - 90;
    const midRY = ry + rh / 2;
    const funnel = `
    <line x1="${lx + lw + 8}" y1="${funnelTop}" x2="${rx2 - 8}" y2="${midRY - 30}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.28" stroke-dasharray="5 3"/>
    <line x1="${lx + lw + 8}" y1="${funnelBot}" x2="${rx2 - 8}" y2="${midRY + 30}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.28" stroke-dasharray="5 3"/>
    <polygon points="${rx2 - 8},${midRY - 8} ${rx2 - 8},${midRY + 8} ${rx2 + 6},${midRY}"
             fill="${p.gold}" opacity="0.35"/>`;

    const caption = `
    <text x="600" y="862" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">L'interopérabilité naît de la tolérance à l'entrée et de la rigueur à la sortie.</text>`;

    return leftCol + rightCol + funnel + caption;
  },
};
