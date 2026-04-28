module.exports = {
  id:          'marteau-maslow-en',
  title:       "Maslow's Hammer",
  category:    'Biases & Heuristics',
  tagline:     "If your only tool is a hammer, everything looks like a nail.",
  description: "Bias formulated by Abraham Maslow in 1966: possessing a single tool biases perception so that every problem appears suited to that tool, even when it is not.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Object vertical positions (cy = top edge of each icon) ────────────
    const CY = [375, 530, 685];   // 3 objects, 155 px apart
    const lx = 300, rx = 900;

    // ── Vertical separator ────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Panel headers ─────────────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="170" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.muted}">REALITY</text>
    <text x="${rx}" y="158" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="16"
          letter-spacing="2" fill="${p.muted}">PERCEIVED AS</text>
    <text x="${rx}" y="185" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">NAILS</text>`;

    // ── NAIL (used left panel object 1 and throughout right panel) ─────────
    //   cy = top edge. Total height ≈ 83 px.
    const drawNail = (cx, cy, col, op = 0.85) => `
    <rect x="${cx - 11}" y="${cy}" width="22" height="7" rx="1.5"
          fill="${col}" opacity="${op}"/>
    <rect x="${cx - 3}" y="${cy + 7}" width="6" height="62"
          fill="${col}" opacity="${op}"/>
    <polygon points="${cx - 3},${cy + 69} ${cx + 3},${cy + 69} ${cx},${cy + 83}"
             fill="${col}" opacity="${op}"/>`;

    // ── SCREW — circle head + shaft + thread marks ─────────────────────────
    //   cy = top edge. Total height ≈ 82 px.
    const drawScrew = (cx, cy) => {
      const threads = [28, 38, 48, 58, 68].map(d => `
    <line x1="${cx - 8}" y1="${cy + d}" x2="${cx + 8}" y2="${cy + d}"
          stroke="${p.muted}" stroke-width="1" opacity="0.28"/>`).join('');
      return `
    <circle cx="${cx}" cy="${cy + 11}" r="11"
            fill="${p.muted}" fill-opacity="0.10"
            stroke="${p.muted}" stroke-width="1.5" stroke-opacity="0.65"/>
    <line x1="${cx - 8}" y1="${cy + 11}" x2="${cx + 8}" y2="${cy + 11}"
          stroke="${p.bg}" stroke-width="2.5" opacity="0.70"/>
    <rect x="${cx - 3.5}" y="${cy + 22}" width="7" height="60"
          fill="${p.muted}" opacity="0.65"/>${threads}`;
    };

    // ── LIGHTBULB — globe + filament + base ───────────────────────────────
    //   cy = top edge. Total height ≈ 76 px.
    const drawBulb = (cx, cy) => `
    <circle cx="${cx}" cy="${cy + 27}" r="26"
            fill="${p.muted}" fill-opacity="0.10"
            stroke="${p.muted}" stroke-width="1.5" stroke-opacity="0.65"/>
    <polyline points="${cx - 8},${cy + 18} ${cx},${cy + 32} ${cx + 8},${cy + 18}"
              fill="none" stroke="${p.muted}" stroke-width="1.5" opacity="0.40"/>
    <rect x="${cx - 13}" y="${cy + 53}" width="26" height="15" rx="3"
          fill="${p.muted}" opacity="0.55"/>
    <rect x="${cx - 9}" y="${cy + 67}" width="18" height="8" rx="2"
          fill="${p.muted}" opacity="0.45"/>`;

    // ── Left panel: 3 distinct objects ────────────────────────────────────
    const leftObjects =
      drawNail(lx, CY[0], p.gold)        // ① NAIL  → correct tool
    + drawScrew(lx, CY[1])               // ② SCREW → wrong tool
    + drawBulb(lx, CY[2]);               // ③ IDEA  → very wrong tool

    const leftLabels = `
    <text x="${lx}" y="${CY[0] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}">NAIL</text>
    <text x="${lx}" y="${CY[1] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.muted}">SCREW</text>
    <text x="${lx}" y="${CY[2] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.muted}">IDEA</text>`;

    // ── Right panel: 3 identical nails (cognitive bias) ───────────────────
    //   Opacity fades to underscore the absurdity of the distortion.
    const rightObjects =
      drawNail(rx, CY[0], p.gold)
    + drawNail(rx, CY[1], p.gold, 0.70)
    + drawNail(rx, CY[2], p.gold, 0.55);

    const rightLabels = `
    <text x="${rx}" y="${CY[0] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}">NAIL</text>
    <text x="${rx}" y="${CY[1] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.70">NAIL</text>
    <text x="${rx}" y="${CY[2] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">NAIL</text>`;

    // ── Summary labels at bottom ──────────────────────────────────────────
    const summary = `
    <text x="${lx}" y="852" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">3 distinct problems</text>
    <text x="${rx}" y="852" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">1 answer × 3</text>`;

    return sep + headers + leftObjects + leftLabels + rightObjects + rightLabels + summary;
  },
};
