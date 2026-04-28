module.exports = {
  id:          'paradoxe-jevons',
  title:       'Paradoxe de Jevons',
  category:    'Économie & Incitations',
  tagline:     'L\'efficacité augmente la consommation.',
  description: 'Quand une ressource devient plus efficace à utiliser, sa consommation totale augmente plutôt que de diminuer.',

  render(ctx) {
    const { palette: p } = ctx;

    const ox   = 300;   // axe Y
    const oy   = 900;   // axe X
    const xEnd = 1110;
    const yTop = 135;

    // Deux points annotés
    //   P_A = oy-ay = 470,  Q_A = ax-ox = 150  → Pa/Pb ≈ 2  ✓
    //   P_B = oy-by = 230,  Q_B = bx-ox = 560  → Qb/Qa ≈ 3.7 >> 1.5  ✓
    const ax = 450, ay = 430;
    const bx = 860, by = 670;
    const midPY = (ay + by) / 2;   // 550
    const midQX = (ax + bx) / 2;   // 655

    // ── Courbe de demande ──────────────────────────────────────────────────
    // Hyperbole élastique P = 7139 × Q^(-0.543)
    // Paramètres ajustés pour passer exactement par A (Q=150, P=470)
    // et B (Q=560, P=230) — vérifiés analytiquement.
    //
    // Points calculés en coordonnées écran : x = ox+Q, y = oy-P
    // Le premier point (Q=50) est hors zone visible pour créer l'effet
    // d'émergence depuis l'axe Y grâce au clipPath #cz.
    const curvePts = [
      [350,  46], // Q=50   (hors clip → curve émerge de yTop)
      [362, 141], // Q=62
      [370, 189], // Q=70
      [380, 240], // Q=80
      [390, 278], // Q=90
      [400, 314], // Q=100
      [415, 358], // Q=115
      [430, 393], // Q=130
      [450, 430], // Q=150  ← Point A
      [475, 469], // Q=175
      [500, 498], // Q=200
      [540, 536], // Q=240
      [580, 566], // Q=280
      [630, 594], // Q=330
      [700, 624], // Q=400
      [750, 641], // Q=450
      [800, 656], // Q=500
      [860, 670], // Q=560  ← Point B
      [950, 688], // Q=650
      [1050, 704],// Q=750
      [1100, 711],// Q=800
    ];

    const pathD = curvePts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x},${y}`)
      .join(' ');

    // ── Éléments SVG ──────────────────────────────────────────────────────
    const defs = `
    <defs>
      <marker id="axArr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="${p.muted}"/>
      </marker>
      <clipPath id="cz">
        <rect x="${ox}" y="${yTop}" width="${xEnd - ox}" height="${oy - yTop}"/>
      </clipPath>
    </defs>`;

    const axes = `
    <line x1="${ox}" y1="${oy}" x2="${xEnd}" y2="${oy}"
          stroke="${p.muted}" stroke-width="3" marker-end="url(#axArr)"/>
    <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${yTop}"
          stroke="${p.muted}" stroke-width="3" marker-end="url(#axArr)"/>`;

    const axisLabels = `
    <text x="${ox - 14}" y="${yTop - 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="44" font-style="italic"
          fill="${p.text}">p</text>
    <text x="${xEnd + 24}" y="${oy + 14}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="44" font-style="italic"
          fill="${p.text}">Q</text>`;

    const curve = `
    <path d="${pathD}"
          clip-path="url(#cz)"
          fill="none" stroke="${p.gold}" stroke-width="6"
          stroke-linecap="round" stroke-linejoin="round"/>`;

    const crosshairs = `
    <line x1="${ox}" y1="${ay}" x2="${ax}" y2="${ay}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${ox}" y1="${by}" x2="${bx}" y2="${by}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${ax}" y1="${ay}" x2="${ax}" y2="${oy}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${bx}" y1="${by}" x2="${bx}" y2="${oy}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>`;

    const dots = `
    <circle cx="${ax}" cy="${ay}" r="10" fill="${p.gold}"/>
    <circle cx="${bx}" cy="${by}" r="10" fill="${p.gold}"/>`;

    const ticks = `
    <line x1="${ox - 13}" y1="${ay}" x2="${ox + 13}" y2="${ay}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${ox - 13}" y1="${by}" x2="${ox + 13}" y2="${by}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${ax}" y1="${oy - 13}" x2="${ax}" y2="${oy + 13}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${bx}" y1="${oy - 13}" x2="${bx}" y2="${oy + 13}"
          stroke="${p.text}" stroke-width="2.5"/>`;

    const priceLabel = `
    <text x="${ox - 26}" y="${midPY - 15}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="23"
          fill="${p.text}">le prix baisse</text>
    <text x="${ox - 26}" y="${midPY + 17}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="23"
          fill="${p.gold}">de moitié</text>`;

    const qtyLabel = `
    <text x="${midQX}" y="${oy + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="23"
          fill="${p.text}">la demande augmente</text>
    <text x="${midQX}" y="${oy + 76}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="23"
          fill="${p.gold}">de plus de moitié</text>`;

    // Label de la courbe : juste au-dessus et à droite de Point B
    const curveLabel = `
    <text x="878" y="655" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="27" font-style="italic"
          fill="${p.goldLight}">demande</text>`;

    return defs + axes + axisLabels + curve + crosshairs + dots + ticks
         + priceLabel + qtyLabel + curveLabel;
  },
};
