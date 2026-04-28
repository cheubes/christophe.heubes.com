module.exports = {
  id:          'loi-hick-en',
  title:       "Hick's Law",
  category:    'Psychology & Behaviour',
  tagline:     "The more choices, the longer the decision takes.",
  description: "Law formulated by William Edmund Hick in 1952: decision time grows logarithmically with the number of available options.",

  render(ctx) {
    const { palette: p } = ctx;

    const baseY = 740;
    const bw = 120;
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
          letter-spacing="2" fill="${p.muted}" opacity="0.45">NUMBER OF CHOICES</text>
    <text transform="translate(138, 490) rotate(-90)"
          text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">DECISION TIME</text>`;

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

    // ── Logarithmic curve ─────────────────────────────────────────────────
    const pts = bars.map(b => ({ x: b.cx, y: baseY - b.h }));
    const curve = `
    <path d="M ${pts[0].x},${pts[0].y} C ${(pts[0].x+pts[1].x)/2},${pts[0].y} ${(pts[0].x+pts[1].x)/2},${pts[1].y} ${pts[1].x},${pts[1].y}
             C ${(pts[1].x+pts[2].x)/2},${pts[1].y} ${(pts[1].x+pts[2].x)/2},${pts[2].y} ${pts[2].x},${pts[2].y}
             C ${(pts[2].x+pts[3].x)/2},${pts[2].y} ${(pts[2].x+pts[3].x)/2},${pts[3].y} ${pts[3].x},${pts[3].y}"
          fill="none" stroke="${p.gold}" stroke-width="2" opacity="0.50"
          stroke-dasharray="6 5" stroke-linecap="round"/>`;

    // ── Top markers ────────────────────────────────────────────────────────
    const dots = pts.map((pt, i) => {
      const isLast = i === 3;
      return `<circle cx="${pt.x}" cy="${pt.y}" r="${isLast ? 5 : 3}"
              fill="${isLast ? p.gold : p.muted}" opacity="${isLast ? 0.90 : 0.55}"/>`;
    }).join('');

    return axes + axisLabels + barSVG + curve + dots;
  },
};
