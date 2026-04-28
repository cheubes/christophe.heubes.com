'use strict';

module.exports = {
  id:          'loi-brooks',
  title:       'Loi de Brooks',
  category:    'Ingénierie & Technologie',
  tagline:     "Ajouter des développeurs à un projet en retard le retarde davantage.",
  description: "Loi de Fred Brooks (The Mythical Man-Month, 1975) : l'ajout de ressources humaines à un projet logiciel en retard aggrave ce retard, en raison du coût exponentiel de la communication.",

  render(ctx) {
    const { palette: p } = ctx;

    // Three connected node graphs showing communication complexity
    const panels = [
      { n: 3,  cx: 240, cy: 470, r: 75,  col: p.muted, opEdge: 0.28, opNode: 0.55 },
      { n: 5,  cx: 600, cy: 470, r: 88,  col: p.muted, opEdge: 0.22, opNode: 0.50 },
      { n: 8,  cx: 960, cy: 470, r: 100, col: p.gold,  opEdge: 0.18, opNode: 0.65 },
    ];

    let svgOut = '';

    for (const panel of panels) {
      const { n, cx, cy, r, col, opEdge, opNode } = panel;
      const links = n * (n - 1) / 2;

      // Compute node positions
      const nodes = [];
      for (let i = 0; i < n; i++) {
        const angle = 2 * Math.PI * i / n - Math.PI / 2;
        nodes.push({
          x: Math.round(cx + r * Math.cos(angle)),
          y: Math.round(cy + r * Math.sin(angle)),
        });
      }

      // Edges (all pairs)
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          svgOut += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}"
            stroke="${col}" stroke-width="1.5" opacity="${opEdge}"/>`;
        }
      }

      // Nodes
      const nr = panel.n === 8 ? 11 : 13;
      for (const nd of nodes) {
        svgOut += `<circle cx="${nd.x}" cy="${nd.y}" r="${nr}"
          fill="${col}" fill-opacity="${panel.n === 8 ? '0.55' : '0.20'}"
          stroke="${col}" stroke-width="1.5" opacity="${opNode}"/>`;
      }

      // Labels below
      const isHeavy = n === 8;
      svgOut += `
      <text x="${cx}" y="${cy + r + 36}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="${isHeavy ? '22' : '20'}"
            fill="${col}" opacity="${isHeavy ? '0.75' : '0.52'}">${n} pers.</text>
      <text x="${cx}" y="${cy + r + 62}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="${isHeavy ? '700' : '400'}" font-size="17"
            fill="${col}" opacity="${isHeavy ? '0.60' : '0.35'}">${links} canaux</text>`;
    }

    // Formula label
    const formula = `
    <text x="600" y="220" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.38">n × (n − 1) / 2 canaux de communication</text>`;

    // Arrow showing explosion
    const expl = `
    <line x1="330" y1="830" x2="860" y2="830"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.30" stroke-dasharray="5 3"/>
    <polygon points="860,824 860,836 874,830"
             fill="${p.gold}" opacity="0.30"/>
    <text x="600" y="860" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.42">complexité croissante</text>`;

    return formula + svgOut + expl;
  },
};
