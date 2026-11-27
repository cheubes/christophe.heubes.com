'use strict';

module.exports = {
  id:          'biais-retrospection',
  title:       'Biais de rétrospection',
  category:    'Biais & Heuristiques',
  tagline:     '"Je le savais depuis le début."',
  description: "Biais documenté par Baruch Fischhoff (1975) : après avoir connu l'issue d'un événement, on surestime la probabilité qu'on lui aurait attribuée à l'avance, car la mémoire se réécrit.",

  render(ctx) {
    const { palette: p, font } = ctx;

    const endsY = [360, 470, 580, 690, 800];

    // highlighted: index of the branch that happened, or null for the "before" view
    const tree = (x0, highlighted) => {
      const rootX = x0 + 30, rootY = 580, endX = x0 + 400;
      let out = '';
      endsY.forEach((endY, i) => {
        const d = `M${rootX},${rootY} C${rootX + 170},${rootY} ${endX - 170},${endY} ${endX},${endY}`;
        if (highlighted === null) {
          out += `
    <path d="${d}" fill="none" stroke="${p.muted}" stroke-width="3" opacity="0.8"/>
    <text x="${endX + 22}" y="${endY + 8}"
          font-family="${font}" font-weight="700" font-size="22" fill="${p.muted}">?</text>`;
        } else if (i === highlighted) {
          out += `
    <path d="${d}" fill="none" stroke="${p.gold}" stroke-width="5"/>
    <circle cx="${endX}" cy="${endY}" r="10" fill="${p.gold}"/>`;
        } else {
          out += `
    <path d="${d}" fill="none" stroke="${p.muted}" stroke-width="1.5"
          opacity="0.2" stroke-dasharray="4 6"/>`;
        }
      });
      return out + `
    <circle cx="${rootX}" cy="${rootY}" r="10" fill="${p.text}"/>`;
    };

    return `
    <text x="190" y="300"
          font-family="${font}" font-weight="700" font-size="20"
          letter-spacing="2" fill="${p.muted}">AVANT</text>
    <text x="190" y="328"
          font-family="${font}" font-size="16"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.8">plusieurs issues possibles</text>
    <text x="660" y="300"
          font-family="${font}" font-weight="700" font-size="20"
          letter-spacing="2" fill="${p.gold}">APRÈS</text>
    <text x="660" y="328"
          font-family="${font}" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.8">une seule semblait évidente</text>
    <line x1="600" y1="280" x2="600" y2="880"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.3"/>`
      + tree(160, null)
      + tree(630, 1);
  },
};
