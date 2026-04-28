module.exports = {
  id:          'loi-goodhart',
  title:       'Loi de Goodhart',
  category:    'Économie & Incitations',
  tagline:     "Quand une mesure devient un objectif, elle cesse d'être une bonne mesure.",
  description: "Principe formulé par l'économiste Charles Goodhart en 1975 : dès qu'un indicateur est utilisé comme cible, il perd sa valeur diagnostique.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Canvas bounds ─────────────────────────────────────────────────────
    const cL = 165, cR = 1038, cT = 215, cB = 850;
    const pivotX = 555;

    // ── Faint horizontal grid lines ───────────────────────────────────────
    const gridYs = [400, 560, 720];
    const grid = gridYs.map(gy => `
    <line x1="${cL}" y1="${gy}" x2="${cR}" y2="${gy}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="4 6" opacity="0.11"/>`
    ).join('');

    // ── Pivot dashed vertical line ────────────────────────────────────────
    const pivot = `
    <line x1="${pivotX}" y1="${cT - 45}" x2="${pivotX}" y2="${cB}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5 7" opacity="0.32"/>`;

    // ── "DEVIENT UNE CIBLE" label + downward triangle ─────────────────────
    //   Triangle pointing down at (pivotX, cT-30) i.e. tip at y=185
    const pivotLabel = `
    <polygon points="${pivotX - 8},${cT - 47} ${pivotX + 8},${cT - 47} ${pivotX},${cT - 33}"
             fill="${p.gold}" opacity="0.80"/>
    <text x="${pivotX}" y="${cT - 56}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.80">DEVIENT UNE CIBLE</text>`;

    // ── Metric curve (gold) — was correlated, shoots up after pivot ────────
    //   Before pivot: nearly flat around y=720, rising gently to y=460
    //   After pivot:  shoots up aggressively to y=215 (top)
    const metricPath = `
    <path d="M ${cL},720 C 285,720 440,460 ${pivotX},460
             C 700,460 880,${cT} ${cR},${cT}"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.90"
          stroke-linejoin="round" stroke-linecap="round"/>`;

    // ── Goal / Real curve (muted) — flat before pivot, diverges after ──────
    //   Before pivot: very close to metric at y=760→510
    //   After pivot:  diverges downward (y=510→660)
    const goalPath = `
    <path d="M ${cL},760 C 285,760 440,510 ${pivotX},510
             C 700,510 905,660 ${cR},660"
          fill="none" stroke="${p.muted}" stroke-width="2.5" opacity="0.65"
          stroke-linejoin="round" stroke-linecap="round"/>`;

    // ── Area between the two curves AFTER pivot (divergence fill) ─────────
    const divergenceFill = `
    <path d="M ${pivotX},460 C 700,460 880,${cT} ${cR},${cT}
             L ${cR},660 C 905,660 700,510 ${pivotX},510 Z"
          fill="${p.gold}" fill-opacity="0.04"/>`;

    // ── Circle markers at pivot point ─────────────────────────────────────
    const markers = `
    <circle cx="${pivotX}" cy="460" r="5" fill="${p.gold}" opacity="0.90"/>
    <circle cx="${pivotX}" cy="510" r="4" fill="${p.muted}" opacity="0.65"/>`;

    // ── End-of-line labels (right side) ───────────────────────────────────
    const endLabels = `
    <text x="1052" y="${cT + 6}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.90">MESURE</text>
    <text x="1052" y="656" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">OBJECTIF</text>
    <text x="1052" y="674" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">RÉEL</text>`;

    // ── Zone labels at bottom ─────────────────────────────────────────────
    const zoneLabels = `
    <text x="360" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">CORRÉLÉE</text>
    <text x="796" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">DÉCORRÉLÉE</text>`;

    return grid + pivot + pivotLabel + divergenceFill
         + goalPath + metricPath + markers + endLabels + zoneLabels;
  },
};
