module.exports = {
  id:          'loi-hick',
  title:       'Loi de Hick',
  category:    'Psychologie & Comportement',
  tagline:     "Plus il y a de choix, plus la décision prend du temps.",
  description: "Loi formulée par William Edmund Hick en 1952 : le temps de décision croît logarithmiquement avec le nombre d'options disponibles.",

  render(ctx) {
    const { palette: p } = ctx;

    const baseY = 740;  // baseline (x-axis)
    const bw = 120;     // bar width
    // Log₂(n+1) values: n=2→1.585, n=4→2.322, n=8→3.170, n=16→4.087
    // Scale: 490/4.087 ≈ 120px per unit
    const scale = 120;
    const bars = [
      { n: 2,  cx: 255, h: Math.round(1.585 * scale), op: 0.30 },
      { n: 4,  cx: 460, h: Math.round(2.322 * scale), op: 0.48 },
      { n: 8,  cx: 665, h: Math.round(3.170 * scale), op: 0.65 },
      { n: 16, cx: 870, h: Math.round(4.087 * scale), op: 0.85 },
    ];

    // ── Axes ───────────────────────────────────────────────────────────────
    const axes = `
    <line x1="175" y1="${baseY}" x2="990" y2="${baseY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <polygon points="990,${baseY - 5} 1002,${baseY} 990,${baseY + 5}"
             fill="${p.muted}" opacity="0.28"/>
    <line x1="175" y1="${baseY}" x2="175" y2="235"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <polygon points="170,235 175,223 180,235"
             fill="${p.muted}" opacity="0.28"/>`;

    // ── Axis labels ────────────────────────────────────────────────────────
    const axisLabels = `
    <text x="590" y="${baseY + 42}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">NOMBRE DE CHOIX</text>
    <text transform="translate(138, 490) rotate(-90)"
          text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">TEMPS DE DÉCISION</text>`;

    // ── Bars ───────────────────────────────────────────────────────────────
    const barSVG = bars.map((b, i) => {
      const isLast = i === bars.length - 1;
      const fill = isLast ? p.gold : p.muted;
      const top = baseY - b.h;
      return `
    <rect x="${b.cx - bw / 2}" y="${top}" width="${bw}" height="${b.h}" rx="4"
          fill="${fill}" opacity="${b.op}"/>
    <text x="${b.cx}" y="${baseY + 22}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1" fill="${fill}" opacity="${b.op + 0.10}">${b.n}</text>`;
    }).join('');

    // ── Logarithmic curve connecting bar tops ──────────────────────────────
    //   Points: (255,550) (460,462) (665,361) (870,250)
    const p0 = { x: 255, y: baseY - bars[0].h };
    const p1 = { x: 460, y: baseY - bars[1].h };
    const p2 = { x: 665, y: baseY - bars[2].h };
    const p3 = { x: 870, y: baseY - bars[3].h };

    const curve = `
    <path d="M ${p0.x},${p0.y} C ${(p0.x+p1.x)/2},${p0.y} ${(p0.x+p1.x)/2},${p1.y} ${p1.x},${p1.y}
             C ${(p1.x+p2.x)/2},${p1.y} ${(p1.x+p2.x)/2},${p2.y} ${p2.x},${p2.y}
             C ${(p2.x+p3.x)/2},${p2.y} ${(p2.x+p3.x)/2},${p3.y} ${p3.x},${p3.y}"
          fill="none" stroke="${p.gold}" stroke-width="2" opacity="0.50"
          stroke-dasharray="6 5" stroke-linecap="round"/>`;

    // ── Top markers ────────────────────────────────────────────────────────
    const dots = [p0, p1, p2, p3].map((pt, i) => {
      const isLast = i === 3;
      return `<circle cx="${pt.x}" cy="${pt.y}" r="${isLast ? 5 : 3}"
              fill="${isLast ? p.gold : p.muted}" opacity="${isLast ? 0.90 : 0.55}"/>`;
    }).join('');

    return axes + axisLabels + barSVG + curve + dots;
  },
};
