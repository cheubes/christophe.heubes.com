module.exports = {
  id:          'loi-goodhart-en',
  title:       "Goodhart's Law",
  category:    'Economics & Incentives',
  tagline:     "When a measure becomes a target, it ceases to be a good measure.",
  description: "Principle formulated by economist Charles Goodhart in 1975: once an indicator is used as a target, it loses its diagnostic value.",

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

    // ── "BECOMES A TARGET" label + downward triangle ──────────────────────
    const pivotLabel = `
    <polygon points="${pivotX - 8},${cT - 47} ${pivotX + 8},${cT - 47} ${pivotX},${cT - 33}"
             fill="${p.gold}" opacity="0.80"/>
    <text x="${pivotX}" y="${cT - 56}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.80">BECOMES A TARGET</text>`;

    // ── Metric curve (gold) ────────────────────────────────────────────────
    const metricPath = `
    <path d="M ${cL},720 C 285,720 440,460 ${pivotX},460
             C 700,460 880,${cT} ${cR},${cT}"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.90"
          stroke-linejoin="round" stroke-linecap="round"/>`;

    // ── Goal / Real curve (muted) ─────────────────────────────────────────
    const goalPath = `
    <path d="M ${cL},760 C 285,760 440,510 ${pivotX},510
             C 700,510 905,660 ${cR},660"
          fill="none" stroke="${p.muted}" stroke-width="2.5" opacity="0.65"
          stroke-linejoin="round" stroke-linecap="round"/>`;

    // ── Divergence fill ───────────────────────────────────────────────────
    const divergenceFill = `
    <path d="M ${pivotX},460 C 700,460 880,${cT} ${cR},${cT}
             L ${cR},660 C 905,660 700,510 ${pivotX},510 Z"
          fill="${p.gold}" fill-opacity="0.04"/>`;

    // ── Circle markers at pivot point ─────────────────────────────────────
    const markers = `
    <circle cx="${pivotX}" cy="460" r="5" fill="${p.gold}" opacity="0.90"/>
    <circle cx="${pivotX}" cy="510" r="4" fill="${p.muted}" opacity="0.65"/>`;

    // ── End-of-line labels ────────────────────────────────────────────────
    const endLabels = `
    <text x="1052" y="${cT + 6}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.90">METRIC</text>
    <text x="1052" y="656" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">TARGET</text>
    <text x="1052" y="674" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">REALITY</text>`;

    // ── Zone labels at bottom ─────────────────────────────────────────────
    const zoneLabels = `
    <text x="360" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">CORRELATED</text>
    <text x="796" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">DECOUPLED</text>`;

    return grid + pivot + pivotLabel + divergenceFill
         + goalPath + metricPath + markers + endLabels + zoneLabels;
  },
};
