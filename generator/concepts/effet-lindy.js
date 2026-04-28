module.exports = {
  id:          'effet-lindy',
  title:       'Effet Lindy',
  category:    'Épistémologie',
  tagline:     "Plus quelque chose a duré, plus ça durera longtemps.",
  description: "Concept popularisé par Nassim Taleb : pour les objets non périssables (idées, livres, technologies), l'espérance de vie future est proportionnelle à l'âge actuel.",

  render(ctx) {
    const { palette: p } = ctx;

    const nowX = 600;
    const ay = 370, ah = 54;  // Entity A (récent)
    const by = 650, bh = 54;  // Entity B (établi)

    // ── "MAINTENANT" dividing line ────────────────────────────────────────
    const nowLine = `
    <line x1="${nowX}" y1="245" x2="${nowX}" y2="810"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="6 6" opacity="0.28"/>
    <text x="${nowX}" y="234" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.55">MAINTENANT</text>`;

    // ── Zone headers ──────────────────────────────────────────────────────
    const headers = `
    <text x="390" y="290" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.42">PASSÉ</text>
    <text x="820" y="290" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.42">FUTUR ESTIMÉ</text>`;

    // ── Entity A — 2 ans ──────────────────────────────────────────────────
    //   Past: 120px  |  Future: 120px (même durée → espérance = âge actuel)
    const aPast = nowX - 120, aFuture = nowX + 120;
    const aRows = `
    <rect x="${aPast}" y="${ay - ah / 2}" width="120" height="${ah}" rx="4"
          fill="${p.muted}" opacity="0.26"/>
    <rect x="${nowX}" y="${ay - ah / 2}" width="120" height="${ah}" rx="4"
          fill="${p.gold}" opacity="0.52"/>
    <text x="${aPast - 14}" y="${ay + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">RÉCENT</text>
    <text x="${(aPast + nowX) / 2}" y="${ay - ah / 2 - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">2 ans</text>
    <text x="${aFuture + 14}" y="${ay + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.62">≈ 2 ans</text>`;

    // ── Entity B — 50 ans ─────────────────────────────────────────────────
    //   Past: 395px  |  Future: 440px (Lindy : futur ≥ passé)
    const bPast = nowX - 395, bFuture = nowX + 440;
    const bRows = `
    <rect x="${bPast}" y="${by - bh / 2}" width="395" height="${bh}" rx="4"
          fill="${p.muted}" opacity="0.20"/>
    <rect x="${nowX}" y="${by - bh / 2}" width="440" height="${bh}" rx="4"
          fill="${p.gold}" opacity="0.78"/>
    <text x="${bPast - 14}" y="${by + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.85">ÉTABLI</text>
    <text x="${(bPast + nowX) / 2}" y="${by - bh / 2 - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">50 ans</text>
    <text x="${bFuture + 14}" y="${by + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.gold}" opacity="0.85">≈ 50 ans</text>`;

    // ── Lindy annotation ──────────────────────────────────────────────────
    const annotation = `
    <text x="${nowX + 220}" y="${by + bh / 2 + 32}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.48">futur ≥ passé</text>`;

    // ── Future comparison bracket (vertical, between A and B) ─────────────
    //   Shows: B's future >> A's future
    const cmpX = nowX + 460;
    const cmp = `
    <line x1="${cmpX}" y1="${ay - ah / 2}" x2="${cmpX}" y2="${by + bh / 2}"
          stroke="${p.gold}" stroke-width="1" opacity="0.30"/>
    <polygon points="${cmpX - 5},${ay - ah / 2} ${cmpX + 5},${ay - ah / 2} ${cmpX},${ay - ah / 2 - 12}"
             fill="${p.gold}" opacity="0.30"/>
    <polygon points="${cmpX - 5},${by + bh / 2} ${cmpX + 5},${by + bh / 2} ${cmpX},${by + bh / 2 + 12}"
             fill="${p.gold}" opacity="0.30"/>`;

    return nowLine + headers + aRows + bRows + annotation;
  },
};
