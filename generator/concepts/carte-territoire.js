'use strict';

module.exports = {
  id:          'carte-territoire',
  title:       'La carte n\'est pas le territoire',
  category:    'Épistémologie',
  tagline:     "Nos modèles du monde ne sont pas le monde.",
  description: "Aphorisme d'Alfred Korzybski : toute représentation (carte, modèle, concept) est une simplification de la réalité. La confondre avec la réalité mène à l'erreur.",

  render(ctx) {
    const { palette: p } = ctx;

    // Two panels split at x=600
    // LEFT: regular grid (the map)
    // RIGHT: organic terrain (the territory)

    const divider = `
    <line x1="600" y1="185" x2="600" y2="855"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="5 5"/>
    <text x="600" y="530" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.muted}" opacity="0.18">≠</text>`;

    // Panel labels
    const panelLabels = `
    <text x="382" y="208" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2.5" fill="${p.muted}" opacity="0.50">LA CARTE</text>
    <text x="820" y="208" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2.5" fill="${p.gold}" opacity="0.55">LE TERRITOIRE</text>`;

    // LEFT: regular grid
    const gx0 = 185, gx1 = 575;
    const gy0 = 230, gy1 = 840;
    const gCols = 6, gRows = 8;
    const gw = (gx1 - gx0) / gCols, gh = (gy1 - gy0) / gRows;

    let grid = '';
    for (let i = 0; i <= gCols; i++) {
      const x = gx0 + i * gw;
      grid += `<line x1="${x}" y1="${gy0}" x2="${x}" y2="${gy1}"
        stroke="${p.muted}" stroke-width="1" opacity="0.22"/>`;
    }
    for (let j = 0; j <= gRows; j++) {
      const y = gy0 + j * gh;
      grid += `<line x1="${gx0}" y1="${y}" x2="${gx1}" y2="${y}"
        stroke="${p.muted}" stroke-width="1" opacity="0.22"/>`;
    }

    // A few labeled points on the map
    const mapPoints = [
      { cx: gx0 + gw * 1.5, cy: gy0 + gh * 1.5, label: 'A' },
      { cx: gx0 + gw * 4,   cy: gy0 + gh * 3.5, label: 'B' },
      { cx: gx0 + gw * 2,   cy: gy0 + gh * 6,   label: 'C' },
      { cx: gx0 + gw * 5,   cy: gy0 + gh * 5.5, label: 'D' },
    ];
    let mapPts = '';
    for (const pt of mapPoints) {
      mapPts += `
      <circle cx="${pt.cx}" cy="${pt.cy}" r="7"
              fill="${p.muted}" fill-opacity="0.50" stroke="${p.muted}" stroke-width="1.5" opacity="0.55"/>
      <text x="${pt.cx + 12}" y="${pt.cy + 5}" text-anchor="start"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
            fill="${p.muted}" opacity="0.45">${pt.label}</text>`;
    }
    // A route line on the map (A → B → D)
    mapPts += `
    <polyline points="${mapPoints[0].cx},${mapPoints[0].cy} ${mapPoints[1].cx},${mapPoints[1].cy} ${mapPoints[3].cx},${mapPoints[3].cy}"
              fill="none" stroke="${p.muted}" stroke-width="1.5" opacity="0.35" stroke-dasharray="5 3"/>`;

    // RIGHT: organic terrain (irregular shapes)
    // Several overlapping organic blobs as contour lines
    const terrainShapes = [
      `<path d="M 630,480 C 660,360 760,290 860,320 C 960,350 1020,440 1000,560 C 980,680 880,760 770,750 C 660,740 620,620 630,480 Z"
            fill="${p.gold}" fill-opacity="0.06" stroke="${p.gold}" stroke-width="1.5" opacity="0.35"/>`,
      `<path d="M 670,480 C 695,390 770,335 850,355 C 940,378 980,450 960,555 C 940,650 868,710 780,700 C 695,690 660,580 670,480 Z"
            fill="${p.gold}" fill-opacity="0.07" stroke="${p.gold}" stroke-width="1.5" opacity="0.45"/>`,
      `<path d="M 710,485 C 728,415 788,375 850,392 C 920,412 945,470 928,555 C 910,630 852,672 786,662 C 722,652 700,562 710,485 Z"
            fill="${p.gold}" fill-opacity="0.10" stroke="${p.gold}" stroke-width="1.5" opacity="0.55"/>`,
      `<path d="M 750,490 C 762,440 805,415 850,428 C 900,444 912,490 896,555 C 880,610 838,635 795,625 C 752,615 742,544 750,490 Z"
            fill="${p.gold}" fill-opacity="0.16" stroke="${p.gold}" stroke-width="2" opacity="0.65"/>`,
      `<path d="M 790,495 C 798,462 822,445 852,454 C 886,465 888,500 875,548 C 862,586 834,602 804,592 C 774,582 784,528 790,495 Z"
            fill="${p.gold}" fill-opacity="0.25" stroke="${p.gold}" stroke-width="2" opacity="0.72"/>`,
    ];

    // Irregular details: small dots scattered around
    const scatterDots = [
      [650, 310], [980, 370], [625, 720], [990, 690], [670, 260],
      [1005, 500], [630, 820], [1020, 780], [780, 255], [940, 808],
    ];
    let scatter = '';
    for (const [x, y] of scatterDots) {
      scatter += `<circle cx="${x}" cy="${y}" r="3"
        fill="${p.gold}" fill-opacity="0.25" opacity="0.30"/>`;
    }

    const terrain = terrainShapes.join('') + scatter;

    // Bottom captions
    const captions = `
    <text x="382" y="872" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.38">simplifiée, balisée, lisible</text>
    <text x="820" y="872" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.50">complexe, nuancée, résistante</text>`;

    return divider + panelLabels + grid + mapPts + terrain + captions;
  },
};
