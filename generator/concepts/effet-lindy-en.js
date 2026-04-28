module.exports = {
  id:          'effet-lindy-en',
  title:       'The Lindy Effect',
  category:    'Epistemology',
  tagline:     "The longer something has survived, the longer it will likely survive.",
  description: "Concept popularised by Nassim Taleb: for non-perishable things (ideas, books, technologies), future life expectancy is proportional to current age.",

  render(ctx) {
    const { palette: p } = ctx;

    const nowX = 600;
    const ay = 370, ah = 54;
    const by = 650, bh = 54;

    // ── "NOW" dividing line ───────────────────────────────────────────────
    const nowLine = `
    <line x1="${nowX}" y1="245" x2="${nowX}" y2="810"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="6 6" opacity="0.28"/>
    <text x="${nowX}" y="234" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.55">NOW</text>`;

    // ── Zone headers ──────────────────────────────────────────────────────
    const headers = `
    <text x="390" y="290" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.42">PAST</text>
    <text x="820" y="290" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.42">ESTIMATED FUTURE</text>`;

    // ── Entity A — 2 years ────────────────────────────────────────────────
    const aPast = nowX - 120, aFuture = nowX + 120;
    const aRows = `
    <rect x="${aPast}" y="${ay - ah / 2}" width="120" height="${ah}" rx="4"
          fill="${p.muted}" opacity="0.26"/>
    <rect x="${nowX}" y="${ay - ah / 2}" width="120" height="${ah}" rx="4"
          fill="${p.gold}" opacity="0.52"/>
    <text x="${aPast - 14}" y="${ay + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">RECENT</text>
    <text x="${(aPast + nowX) / 2}" y="${ay - ah / 2 - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">2 years</text>
    <text x="${aFuture + 14}" y="${ay + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.62">≈ 2 years</text>`;

    // ── Entity B — 50 years ───────────────────────────────────────────────
    const bPast = nowX - 395, bFuture = nowX + 440;
    const bRows = `
    <rect x="${bPast}" y="${by - bh / 2}" width="395" height="${bh}" rx="4"
          fill="${p.muted}" opacity="0.20"/>
    <rect x="${nowX}" y="${by - bh / 2}" width="440" height="${bh}" rx="4"
          fill="${p.gold}" opacity="0.78"/>
    <text x="${bPast - 14}" y="${by + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.85">ESTABLISHED</text>
    <text x="${(bPast + nowX) / 2}" y="${by - bh / 2 - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">50 years</text>
    <text x="${bFuture + 14}" y="${by + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.gold}" opacity="0.85">≈ 50 years</text>`;

    // ── Lindy annotation ──────────────────────────────────────────────────
    const annotation = `
    <text x="${nowX + 220}" y="${by + bh / 2 + 32}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.48">future ≥ past</text>`;

    return nowLine + headers + aRows + bRows + annotation;
  },
};
