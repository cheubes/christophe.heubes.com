module.exports = {
  id:          'loi-conway',
  title:       'Loi de Conway',
  category:    'Ingénierie & Technologie',
  tagline:     'Les systèmes reflètent la structure de communication de leur organisation.',
  description: "Formulée par Melvin Conway en 1967 : toute organisation qui conçoit un système produira un design dont la structure reproduit sa propre structure de communication.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Positions des nœuds (même topologie en triangle des 2 côtés) ──────
    const L = {
      top: { x: 300, y: 345 },
      bl:  { x: 185, y: 545 },
      br:  { x: 415, y: 545 },
    };
    const R = {
      top: { x: 900, y: 345 },
      bl:  { x: 785, y: 545 },
      br:  { x: 1015, y: 545 },
    };

    // ── Séparateur vertical ───────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── En-têtes de panneaux ──────────────────────────────────────────────
    const headers = `
    <text x="300" y="170" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.muted}">ORGANISATION</text>
    <text x="900" y="170" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.gold}">ARCHITECTURE</text>`;

    // ── Arêtes — dessinées en premier, sous les nœuds ────────────────────
    //   Même topologie sur les deux panneaux (triangle complet)
    const edgeLine = (a, b, col, op) =>
      `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"
             stroke="${col}" stroke-width="1.5" opacity="${op}"/>`;

    const edges = `
    ${edgeLine(L.top, L.bl, p.gold,      0.30)}
    ${edgeLine(L.top, L.br, p.gold,      0.30)}
    ${edgeLine(L.bl,  L.br, p.gold,      0.30)}
    ${edgeLine(R.top, R.bl, p.goldLight, 0.28)}
    ${edgeLine(R.top, R.br, p.goldLight, 0.28)}
    ${edgeLine(R.bl,  R.br, p.goldLight, 0.28)}`;

    // ── Nœuds gauche : cercles (équipes humaines) ─────────────────────────
    const rL = 36;
    const circleNode = (pos, label) => `
    <circle cx="${pos.x}" cy="${pos.y}" r="${rL}"
            fill="${p.gold}" fill-opacity="0.15"
            stroke="${p.gold}" stroke-width="1.5" stroke-opacity="0.58"/>
    <text x="${pos.x}" y="${pos.y + 5}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.2" fill="${p.text}">${label}</text>`;

    const leftNodes = circleNode(L.top, 'PM')
                    + circleNode(L.bl,  'FRONT')
                    + circleNode(L.br,  'BACK');

    // ── Nœuds droite : rectangles arrondis (composants système) ──────────
    const rw = 84, rh = 38;
    const rectNode = (pos, label) => `
    <rect x="${pos.x - rw / 2}" y="${pos.y - rh / 2}"
          width="${rw}" height="${rh}" rx="8"
          fill="${p.goldLight}" fill-opacity="0.12"
          stroke="${p.goldLight}" stroke-width="1.5" stroke-opacity="0.48"/>
    <text x="${pos.x}" y="${pos.y + 5}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.2" fill="${p.text}">${label}</text>`;

    const rightNodes = rectNode(R.top, 'PORTAIL')
                     + rectNode(R.bl,  'WEB')
                     + rectNode(R.br,  'API');

    // ── Labels contextuels sous chaque panneau ────────────────────────────
    const botLabels = `
    <text x="300" y="634" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.50">communication entre équipes</text>
    <text x="900" y="634" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.50">interfaces entre services</text>`;

    // ── Légende centrale ──────────────────────────────────────────────────
    //   Deux courtes lignes pointillées + label "SE REFLÈTE" au centre
    const centerLegend = `
    <line x1="448" y1="448" x2="570" y2="448"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5,4" opacity="0.28"/>
    <line x1="630" y1="448" x2="752" y2="448"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5,4" opacity="0.28"/>
    <text x="600" y="453" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">SE REFLÈTE</text>`;

    // Ordre de dessin : fond → arêtes → nœuds → labels
    return sep + headers + edges + leftNodes + rightNodes + centerLegend + botLabels;
  },
};
