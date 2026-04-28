'use strict';

module.exports = {
  id:          'biais-survivant',
  title:       'Biais du survivant',
  category:    'Biais & Heuristiques',
  tagline:     "On tire des leçons des survivants, pas des disparus.",
  description: "Erreur cognitive qui consiste à se concentrer sur les cas ayant réussi en ignorant ceux qui ont échoué — invisibles par définition.",

  render(ctx) {
    const { palette: p } = ctx;

    const divider = `
    <line x1="600" y1="185" x2="600" y2="840"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="5 5"/>`;

    const panelLabels = `
    <text x="382" y="208" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2.5" fill="${p.muted}" opacity="0.55">CE QU'ON OBSERVE</text>
    <text x="820" y="208" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2.5" fill="${p.muted}" opacity="0.55">LA RÉALITÉ</text>`;

    // 6 survivors: offsets from panel center
    const svOff = [
      [-130, -130], [0, -165], [130, -105],
      [-150, 40], [10, 80], [148, 15],
    ];
    const lCx = 382, rCx = 820, midY = 500, r = 20;

    let leftDots = '', rightDots = '';
    for (const [dx, dy] of svOff) {
      leftDots  += `<circle cx="${lCx + dx}" cy="${midY + dy}" r="${r}"
        fill="${p.gold}" fill-opacity="0.70" stroke="${p.gold}" stroke-width="1.5"/>`;
      rightDots += `<circle cx="${rCx + dx}" cy="${midY + dy}" r="${r}"
        fill="${p.gold}" fill-opacity="0.70" stroke="${p.gold}" stroke-width="1.5"/>`;
    }

    // 15 failure dots — right panel only
    const fails = [
      [640, 270], [730, 345], [878, 272], [970, 315], [1010, 430],
      [650, 440], [648, 628], [758, 672], [918, 626], [990, 572],
      [788, 762], [878, 784], [1012, 730], [700, 755], [958, 722],
    ];
    let failDots = '';
    for (const [x, y] of fails) {
      failDots += `<circle cx="${x}" cy="${y}" r="16"
        fill="${p.muted}" fill-opacity="0.07" stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>`;
    }

    const counts = `
    <text x="382" y="814" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.gold}">6</text>
    <text x="382" y="844" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">OBSERVÉS</text>
    <text x="820" y="814" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.muted}" opacity="0.42">21</text>
    <text x="820" y="844" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.30">AU TOTAL</text>`;

    return divider + panelLabels + failDots + leftDots + rightDots + counts;
  },
};
