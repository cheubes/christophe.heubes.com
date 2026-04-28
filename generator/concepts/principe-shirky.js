module.exports = {
  id:          'principe-shirky',
  title:       'Principe de Shirky',
  category:    'Management & Organisations',
  tagline:     "Les institutions perpétuent le problème auquel elles sont la solution.",
  description: "Principe formulé par Clay Shirky : toute institution tend à préserver le problème qui justifie son existence, car résoudre définitivement ce problème la rendrait obsolète.",

  render(ctx) {
    const { palette: p } = ctx;

    const c1 = { x: 360, y: 510 }, r1 = 108;   // PROBLÈME
    const c2 = { x: 840, y: 510 }, r2 = 108;   // INSTITUTION

    // ── Circles ───────────────────────────────────────────────────────────
    const circles = `
    <circle cx="${c1.x}" cy="${c1.y}" r="${r1}"
            fill="${p.muted}" fill-opacity="0.09"
            stroke="${p.muted}" stroke-width="2" opacity="0.65"/>
    <text x="${c1.x}" y="${c1.y - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.80">PROBLÈME</text>
    <text x="${c1.x}" y="${c1.y + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.50">persiste</text>

    <circle cx="${c2.x}" cy="${c2.y}" r="${r2}"
            fill="${p.gold}" fill-opacity="0.09"
            stroke="${p.gold}" stroke-width="2" opacity="0.72"/>
    <text x="${c2.x}" y="${c2.y - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          letter-spacing="1" fill="${p.gold}" opacity="0.88">INSTITUTION</text>
    <text x="${c2.x}" y="${c2.y + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.55">survit</text>`;

    // ── Top arc: Institution → résout partiellement → Problème ───────────
    //   Arc from top of c2 curving above to top of c1
    const topArc = `
    <path d="M ${c2.x},${c2.y - r2} C ${c2.x},280 ${c1.x},280 ${c1.x},${c1.y - r1}"
          fill="none" stroke="${p.muted}" stroke-width="2" opacity="0.50"
          stroke-dasharray="6 4"/>
    <polygon points="${c1.x - 7},${c1.y - r1 + 14} ${c1.x + 7},${c1.y - r1 + 14} ${c1.x},${c1.y - r1}"
             fill="${p.muted}" opacity="0.50"/>
    <text x="600" y="262" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">résout partiellement</text>`;

    // ── Bottom arc: Problème → perpétue → Institution ─────────────────────
    //   Arc from bottom of c1 curving below to bottom of c2
    const bottomArc = `
    <path d="M ${c1.x},${c1.y + r1} C ${c1.x},740 ${c2.x},740 ${c2.x},${c2.y + r2}"
          fill="none" stroke="${p.gold}" stroke-width="2" opacity="0.60"/>
    <polygon points="${c2.x - 7},${c2.y + r2 - 14} ${c2.x + 7},${c2.y + r2 - 14} ${c2.x},${c2.y + r2}"
             fill="${p.gold}" opacity="0.60"/>
    <text x="600" y="760" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.62">perpétue pour survivre</text>`;

    // ── Central "∞" loop hint ─────────────────────────────────────────────
    const center = `
    <text x="600" y="518" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="28"
          fill="${p.muted}" opacity="0.18">∞</text>`;

    return circles + topArc + bottomArc + center;
  },
};
