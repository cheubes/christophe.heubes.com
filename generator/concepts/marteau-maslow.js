module.exports = {
  id:          'marteau-maslow',
  title:       'Marteau de Maslow',
  category:    'Biais & Heuristiques',
  tagline:     "Si ton seul outil est un marteau, tout ressemble à un clou.",
  description: "Biais formulé par Abraham Maslow en 1966 : posséder un outil unique pousse à percevoir chaque problème comme adapté à cet outil, même quand ce n'est pas le cas.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Positions des trois objets (cy = bord supérieur de chaque icône) ──
    const CY = [375, 530, 685];   // 3 objets, 155 px d'écart
    const lx = 300, rx = 900;

    // ── Séparateur vertical ───────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── En-têtes de panneaux ──────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="170" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.muted}">LA RÉALITÉ</text>
    <text x="${rx}" y="158" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="16"
          letter-spacing="2" fill="${p.muted}">PERÇU COMME</text>
    <text x="${rx}" y="185" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">DES CLOUS</text>`;

    // ── CLOU (utilisé à gauche pour l'objet 1 et pour tout le panneau droit) ─
    //   cy = bord supérieur. Hauteur totale ≈ 83 px.
    const drawNail = (cx, cy, col, op = 0.85) => `
    <rect x="${cx - 11}" y="${cy}" width="22" height="7" rx="1.5"
          fill="${col}" opacity="${op}"/>
    <rect x="${cx - 3}" y="${cy + 7}" width="6" height="62"
          fill="${col}" opacity="${op}"/>
    <polygon points="${cx - 3},${cy + 69} ${cx + 3},${cy + 69} ${cx},${cy + 83}"
             fill="${col}" opacity="${op}"/>`;

    // ── VIS — tête cercle + tige + filetage ──────────────────────────────
    //   cy = bord supérieur. Hauteur totale ≈ 82 px.
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

    // ── AMPOULE — globe + filament + embase ───────────────────────────────
    //   cy = bord supérieur. Hauteur totale ≈ 76 px.
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

    // ── Panneau gauche : 3 objets différents ──────────────────────────────
    const leftObjects =
      drawNail(lx, CY[0], p.gold)        // ① CLOU  → outil adapté
    + drawScrew(lx, CY[1])               // ② VIS   → mauvais outil
    + drawBulb(lx, CY[2]);               // ③ IDÉE  → très mauvais outil

    const leftLabels = `
    <text x="${lx}" y="${CY[0] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}">CLOU</text>
    <text x="${lx}" y="${CY[1] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.muted}">VIS</text>
    <text x="${lx}" y="${CY[2] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.muted}">IDÉE</text>`;

    // ── Panneau droit : 3 clous identiques (biais) ───────────────────────
    const rightObjects =
      drawNail(rx, CY[0], p.gold)
    + drawNail(rx, CY[1], p.gold, 0.70)  // légèrement plus pâle — la même forme
    + drawNail(rx, CY[2], p.gold, 0.55); // pâlit encore — l'absurdité croît

    const rightLabels = `
    <text x="${rx}" y="${CY[0] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}">CLOU</text>
    <text x="${rx}" y="${CY[1] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.70">CLOU</text>
    <text x="${rx}" y="${CY[2] + 98}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">CLOU</text>`;

    // ── Labels résumé en bas ──────────────────────────────────────────────
    const summary = `
    <text x="${lx}" y="852" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">3 problèmes distincts</text>
    <text x="${rx}" y="852" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">1 réponse × 3</text>`;

    return sep + headers + leftObjects + leftLabels + rightObjects + rightLabels + summary;
  },
};
