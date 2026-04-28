module.exports = {
  id:          'loi-carlson-en',
  title:       "Carlson's Law",
  category:    'Management & Organisations',
  tagline:     'Continuous work is always more effective than interrupted work.',
  description: "Formulated by Sune Carlson in 1951: every interruption resets the cost of concentration. Working in uninterrupted blocks reduces the real duration of a task by a factor of 2 to 3.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Columns ───────────────────────────────────────────────────────────
    const lx = 300;   // left column centre  (fragmented)
    const rx = 900;   // right column centre (continuous)
    const hw = 56;    // half bar-width

    // ── Work blocks ───────────────────────────────────────────────────────
    const bh     = 60;   // single work block height
    const gh     = 80;   // gap (interruption) height
    const n      = 4;    // number of fragmented sessions
    const startY = 215;

    // Left column: n blocks + (n-1) gaps
    // Total span = n*bh + (n-1)*gh = 240 + 240 = 480 px → ×2
    const leftEndY  = startY + n * bh + (n - 1) * gh;   // 695
    const workH     = n * bh;                            // 240 px — same real work
    const rightEndY = startY + workH;                    // 455

    // ── Vertical separator ────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Column headers ────────────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">FRAGMENTED</text>
    <text x="${lx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.muted}">WORK</text>
    <text x="${rx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">CONTINUOUS</text>
    <text x="${rx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">WORK</text>`;

    // ── Left column: blocks + dashed gap lines ────────────────────────────
    let leftSVG = '';
    for (let i = 0; i < n; i++) {
      const by = startY + i * (bh + gh);
      leftSVG += `
    <rect x="${lx - hw}" y="${by}" width="${hw * 2}" height="${bh}"
          rx="5" fill="${p.goldLight}" opacity="0.72"/>`;

      if (i < n - 1) {
        const gy = by + bh;
        // 3 dashed lines fading out — suggest wasted time
        for (let d = 1; d <= 3; d++) {
          const dy = gy + d * (gh / 4);
          const op = (0.36 - d * 0.08).toFixed(2);
          leftSVG += `
    <line x1="${lx - hw + 12}" y1="${dy}" x2="${lx + hw - 12}" y2="${dy}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5,5" opacity="${op}"/>`;
        }
      }
    }

    // ── Right column: continuous block + saved-time zone ─────────────────
    const savedH  = leftEndY - rightEndY;         // 240 px
    const savedCY = rightEndY + savedH / 2;       // 575
    const rightSVG = `
    <rect x="${rx - hw}" y="${startY}" width="${hw * 2}" height="${workH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>
    <!-- Saved-time zone: dashed outline -->
    <rect x="${rx - hw}" y="${rightEndY + 5}" width="${hw * 2}" height="${savedH - 10}"
          rx="5" fill="none" stroke="${p.muted}" stroke-width="1"
          stroke-dasharray="6,4" opacity="0.22"/>`;

    // ── Label inside the saved zone ───────────────────────────────────────
    const savedLabel = `
    <text x="${rx}" y="${savedCY - 11}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">TIME</text>
    <text x="${rx}" y="${savedCY + 11}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">SAVED</text>`;

    // ── Ratio labels (below each column) ─────────────────────────────────
    const ratioY = leftEndY + 48;
    const unitY  = leftEndY + 76;
    const ratioLabels = `
    <text x="${lx}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.muted}" opacity="0.72">×2</text>
    <text x="${lx}" y="${unitY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">longer</text>
    <text x="${rx}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.gold}" opacity="0.88">×1</text>
    <text x="${rx}" y="${unitY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">baseline</text>`;

    return sep + headers + leftSVG + rightSVG + savedLabel + ratioLabels;
  },
};
