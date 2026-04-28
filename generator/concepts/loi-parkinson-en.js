module.exports = {
  id:          'loi-parkinson-en',
  title:       "Parkinson's Law",
  category:    'Management & Organisations',
  tagline:     'Work expands to fill the time available for its completion.',
  description: "Formulated by C. Northcote Parkinson in 1955: regardless of its real complexity, a task always occupies the entirety of the time allocated to it.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Columns ───────────────────────────────────────────────────────────
    const lx = 300, rx = 900, hw = 58;

    // ── Blocks ────────────────────────────────────────────────────────────
    const startY   = 215;
    const coreH    = 200;   // real work — identical on both sides
    const expH     = 300;   // Parkinson expansion (×1.5 extra work)
    const coreEnd  = startY + coreH;    // 415 — "result" level
    const rightEnd = coreEnd + expH;    // 715 — end of long deadline

    // ── Vertical separator ────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Column headers ────────────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">SHORT</text>
    <text x="${lx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">DEADLINE</text>
    <text x="${rx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">LONG</text>
    <text x="${rx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.muted}">DEADLINE</text>`;

    // ── Left block: work contained within the short deadline ──────────────
    const leftBlock = `
    <rect x="${lx - hw}" y="${startY}" width="${hw * 2}" height="${coreH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>`;

    // ── Right block: same real work + expansion zone ──────────────────────
    const rightBlock = `
    <!-- Same real work as left -->
    <rect x="${rx - hw}" y="${startY}" width="${hw * 2}" height="${coreH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>
    <!-- Expansion zone — work dilates to fill time -->
    <rect x="${rx - hw}" y="${coreEnd + 3}" width="${hw * 2}" height="${expH - 6}"
          rx="5" fill="${p.goldLight}" opacity="0.12"/>
    <rect x="${rx - hw}" y="${coreEnd + 3}" width="${hw * 2}" height="${expH - 6}"
          rx="5" fill="none" stroke="${p.muted}" stroke-width="1"
          stroke-dasharray="6,4" opacity="0.28"/>`;

    // ── "IDENTICAL RESULT" marker at coreEnd level ─────────────────────────
    const connector = `
    <line x1="${lx - hw - 10}" y1="${coreEnd}" x2="${lx + hw + 10}" y2="${coreEnd}"
          stroke="${p.goldLight}" stroke-width="2" opacity="0.55"/>
    <line x1="${rx - hw - 10}" y1="${coreEnd}" x2="${rx + hw + 10}" y2="${coreEnd}"
          stroke="${p.goldLight}" stroke-width="2" opacity="0.55"/>
    <text x="600" y="${coreEnd - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="15"
          letter-spacing="1.5" fill="${p.goldLight}" opacity="0.68">IDENTICAL RESULT</text>`;

    // ── Label inside expansion zone ───────────────────────────────────────
    const expMidY = coreEnd + expH / 2;
    const expLabel = `
    <text x="${rx}" y="${expMidY - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">EXPANDED</text>
    <text x="${rx}" y="${expMidY + 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">WORK</text>`;

    // ── Ratio labels below each column ────────────────────────────────────
    const ratioLabels = `
    <text x="${lx}" y="${coreEnd + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.gold}" opacity="0.88">×1</text>
    <text x="${lx}" y="${coreEnd + 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">baseline</text>
    <text x="${rx}" y="${rightEnd + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.muted}" opacity="0.72">×2.5</text>
    <text x="${rx}" y="${rightEnd + 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">longer</text>`;

    return sep + headers + leftBlock + rightBlock + connector + expLabel + ratioLabels;
  },
};
