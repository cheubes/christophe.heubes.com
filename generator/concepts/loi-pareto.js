module.exports = {
  id:          'loi-pareto',
  title:       'Loi de Pareto',
  category:    'Économie & Incitations',
  tagline:     '20 % des causes produisent 80 % des effets.',
  description: "Un petit nombre d'actions concentre la majorité des résultats. Identifier ce levier change la façon dont on priorise l'effort.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Colonnes ──────────────────────────────────────────────────────────
    const lx = 350;    // centre colonne gauche (causes)
    const rx = 850;    // centre colonne droite  (effets)
    const bw = 110;    // demi-largeur colonne

    // ── Hauteurs des blocs (total = 640px, de y=185 à y=825) ─────────────
    const top    = 185;
    const bottom = 825;
    const total  = bottom - top;   // 640

    const smallH = Math.round(total * 0.20);  // 128 px → 20 %
    const largeH = total - smallH;            // 512 px → 80 %

    // Colonne gauche : petit bloc or (20 %) en haut, grand bloc muted (80 %) en bas
    const lGoldTop   = top;
    const lGoldBot   = top + smallH;
    const lMutedTop  = lGoldBot;
    const lMutedBot  = bottom;

    // Colonne droite : grand bloc or (80 %) en haut, petit bloc muted (20 %) en bas
    const rGoldTop   = top;
    const rGoldBot   = top + largeH;
    const rMutedTop  = rGoldBot;
    const rMutedBot  = bottom;

    // ── Séparateur vertical ───────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Headers de colonnes ───────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="156" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">CAUSES</text>
    <text x="${rx}" y="156" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">EFFETS</text>`;

    // ── Barres gauche ─────────────────────────────────────────────────────
    const leftBars = `
    <!-- Bloc or 20 % (causes minoritaires) -->
    <rect x="${lx - bw}" y="${lGoldTop}" width="${bw * 2}"
          height="${smallH}" rx="8"
          fill="${p.gold}" opacity="0.90"/>
    <!-- Bloc muted 80 % -->
    <rect x="${lx - bw}" y="${lMutedTop}" width="${bw * 2}"
          height="${largeH}" rx="8"
          fill="${p.muted}" opacity="0.22"/>`;

    // ── Barres droite ─────────────────────────────────────────────────────
    const rightBars = `
    <!-- Bloc or 80 % (effets majoritaires) -->
    <rect x="${rx - bw}" y="${rGoldTop}" width="${bw * 2}"
          height="${largeH}" rx="8"
          fill="${p.gold}" opacity="0.90"/>
    <!-- Bloc muted 20 % -->
    <rect x="${rx - bw}" y="${rMutedTop}" width="${bw * 2}"
          height="${smallH}" rx="8"
          fill="${p.muted}" opacity="0.22"/>`;

    // ── Labels de pourcentage ─────────────────────────────────────────────
    const pctLabels = `
    <!-- 20 % dans le bloc or gauche -->
    <text x="${lx}" y="${lGoldTop + smallH / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.bg}">20%</text>
    <!-- 80 % dans le bloc or droit -->
    <text x="${rx}" y="${rGoldTop + largeH / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="52"
          fill="${p.bg}">80%</text>`;

    // ── Flèche courbe reliant 20 % gauche → 80 % droit ───────────────────
    // Centre vertical du bloc or gauche → centre vertical du bloc or droit
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
