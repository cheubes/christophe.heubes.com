module.exports = {
  id:          'loi-miller-en',
  title:       "Miller's Law",
  category:    'Psychology & Behaviour',
  tagline:     "Working memory can only hold 7 ± 2 items at once.",
  description: "Principle formulated by George Miller in 1956: the capacity of human working memory is limited to approximately seven items, with a variation of plus or minus two.",

  render(ctx) {
    const { palette: p } = ctx;

    const cy = 470;
    const r  = 42;
    const spacing = 100;
    const startX = 200;

    // ── 7 gold circles ────────────────────────────────────────────────────
    const goldCircles = Array.from({ length: 7 }, (_, i) => {
      const cx = startX + i * spacing;
      return `
    <circle cx="${cx}" cy="${cy}" r="${r}"
            fill="${p.gold}" fill-opacity="0.14"
            stroke="${p.gold}" stroke-width="2" opacity="0.80"/>
    <text x="${cx}" y="${cy + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.gold}" opacity="0.80">${i + 1}</text>`;
    }).join('');

    // ── Circle 8 — borderline ─────────────────────────────────────────────
    const cx8 = startX + 7 * spacing;
    const circle8 = `
    <circle cx="${cx8}" cy="${cy}" r="36"
            fill="${p.muted}" fill-opacity="0.06"
            stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.45"/>
    <text x="${cx8}" y="${cy + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          fill="${p.muted}" opacity="0.40">8</text>`;

    // ── Circle 9 — overflow ───────────────────────────────────────────────
    const cx9 = startX + 8 * spacing;
    const circle9 = `
    <circle cx="${cx9}" cy="${cy}" r="28"
            fill="${p.muted}" fill-opacity="0.03"
            stroke="${p.muted}" stroke-width="1" stroke-dasharray="4 5" opacity="0.25"/>
    <text x="${cx9}" y="${cy + 5}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          fill="${p.muted}" opacity="0.20">9</text>`;

    // ── Limit marker ──────────────────────────────────────────────────────
    const limitX = (startX + 6 * spacing + cx8) / 2;
    const limit = `
    <line x1="${limitX}" y1="${cy - 62}" x2="${limitX}" y2="${cy + 62}"
          stroke="${p.gold}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.45"/>
    <text x="${limitX}" y="${cy - 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.65">LIMIT</text>`;

    // ── Bracket under circles 1-7 ─────────────────────────────────────────
    const bracketX1 = startX - r - 4;
    const bracketX2 = startX + 6 * spacing + r + 4;
    const bracketY  = cy + r + 28;
    const bracket = `
    <line x1="${bracketX1}" y1="${bracketY - 10}" x2="${bracketX1}" y2="${bracketY}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.55"/>
    <line x1="${bracketX1}" y1="${bracketY}" x2="${bracketX2}" y2="${bracketY}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.55"/>
    <line x1="${bracketX2}" y1="${bracketY - 10}" x2="${bracketX2}" y2="${bracketY}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.55"/>
    <text x="${(bracketX1 + bracketX2) / 2}" y="${bracketY + 24}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.70">7 ± 2 ITEMS</text>`;

    // ── Zone labels ───────────────────────────────────────────────────────
    const zones = `
    <text x="${(startX + startX + 6 * spacing) / 2}" y="${cy - r - 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.45">NORMAL CAPACITY</text>
    <text x="${(cx8 + cx9) / 2}" y="${cy - r + 5}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.35">OVERLOAD</text>`;

    return goldCircles + circle8 + circle9 + limit + bracket + zones;
  },
};
