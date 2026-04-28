module.exports = {
  id:          'loi-pareto-en',
  title:       "Pareto's Law",
  category:    'Economics & Incentives',
  tagline:     '20% of causes produce 80% of effects.',
  description: "A small number of actions account for the majority of results. Identifying that leverage changes how you prioritise effort.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Columns ───────────────────────────────────────────────────────────
    const lx = 350;    // left column centre  (causes)
    const rx = 850;    // right column centre (effects)
    const bw = 110;    // half column width

    // ── Block heights (total = 640px, y=185 to y=825) ────────────────────
    const top    = 185;
    const bottom = 825;
    const total  = bottom - top;   // 640

    const smallH = Math.round(total * 0.20);  // 128 px → 20 %
    const largeH = total - smallH;            // 512 px → 80 %

    // Left column: small gold block (20%) on top, large muted block (80%) below
    const lGoldTop  = top;
    const lGoldBot  = top + smallH;
    const lMutedTop = lGoldBot;

    // Right column: large gold block (80%) on top, small muted block (20%) below
    const rGoldTop  = top;
    const rGoldBot  = top + largeH;
    const rMutedTop = rGoldBot;

    // ── Vertical separator ────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Column headers ────────────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="156" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">CAUSES</text>
    <text x="${rx}" y="156" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">EFFECTS</text>`;

    // ── Left bars ─────────────────────────────────────────────────────────
    const leftBars = `
    <!-- Gold 20 % block (minority causes) -->
    <rect x="${lx - bw}" y="${lGoldTop}" width="${bw * 2}"
          height="${smallH}" rx="8"
          fill="${p.gold}" opacity="0.90"/>
    <!-- Muted 80 % block -->
    <rect x="${lx - bw}" y="${lMutedTop}" width="${bw * 2}"
          height="${largeH}" rx="8"
          fill="${p.muted}" opacity="0.22"/>`;

    // ── Right bars ────────────────────────────────────────────────────────
    const rightBars = `
    <!-- Gold 80 % block (majority effects) -->
    <rect x="${rx - bw}" y="${rGoldTop}" width="${bw * 2}"
          height="${largeH}" rx="8"
          fill="${p.gold}" opacity="0.90"/>
    <!-- Muted 20 % block -->
    <rect x="${rx - bw}" y="${rMutedTop}" width="${bw * 2}"
          height="${smallH}" rx="8"
          fill="${p.muted}" opacity="0.22"/>`;

    // ── Percentage labels ─────────────────────────────────────────────────
    const pctLabels = `
    <!-- 20% inside left gold block -->
    <text x="${lx}" y="${lGoldTop + smallH / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.bg}">20%</text>
    <!-- 80% inside right gold block -->
    <text x="${rx}" y="${rGoldTop + largeH / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.bg}">80%</text>`;

    // ── Curved arrow: 20% left → 80% right ───────────────────────────────
    const arrowY1 = lGoldTop + smallH / 2;   // ≈ 249
    const arrowY2 = rGoldTop + largeH / 2;   // ≈ 441

    const arrow = `
    <defs>
      <marker id="ah" markerWidth="10" markerHeight="7"
              refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="${p.gold}" opacity="0.80"/>
      </marker>
    </defs>
    <path d="M ${lx + bw + 10},${arrowY1}
             C 600,${arrowY1} 600,${arrowY2}
               ${rx - bw - 10},${arrowY2}"
          fill="none" stroke="${p.gold}" stroke-width="2.5"
          stroke-dasharray="8,5" opacity="0.70"
          marker-end="url(#ah)"/>`;

    return sep + headers + leftBars + rightBars + pctLabels + arrow;
  },
};
