module.exports = {
  id:          'effet-placebo',
  title:       'Effet Placebo',
  category:    'Psychologie & Comportement',
  tagline:     'La conviction guérit autant que le remède.',
  description: "Deux traitements identiques produisent des résultats différents selon la croyance du patient. L'esprit influence directement la physiologie.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Colonnes ─────────────────────────────────────────────────────────────
    const lx = 350;    // centre colonne gauche (médicament actif)
    const rx = 850;    // centre colonne droite  (placebo)

    // ── Capsule helper ────────────────────────────────────────────────────────
    // Capsule horizontale centrée en (cx, cy)
    function capsule(cx, cy, w, h) {
      const r  = h / 2;
      const x1 = cx - w / 2 + r;   // centre du cap gauche
      const x2 = cx + w / 2 - r;   // centre du cap droit
      const t  = cy - r;
      const b  = cy + r;
      return `M ${x1},${t} L ${x2},${t} A ${r},${r} 0 0 1 ${x2},${b} L ${x1},${b} A ${r},${r} 0 0 1 ${x1},${t} Z`;
    }

    // ── Dimensions ────────────────────────────────────────────────────────────
    const pillW     = 200;
    const pillH     = 78;
    const pillCY    = 195;
    const capR      = pillH / 2;    // 39

    const barW      = 90;
    const barBottom = 838;
    const leftBarH  = 406;          // → top à y = 432  (74 %)
    const rightBarH = 382;          // → top à y = 456  (68 % — presque autant !)
    const leftBarTop  = barBottom - leftBarH;   // 432
    const rightBarTop = barBottom - rightBarH;  // 456

    // ── Séparateur vertical ───────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Capsules ──────────────────────────────────────────────────────────────
    const pills = `
    <!-- Gauche : capsule remplie (médicament actif) -->
    <path d="${capsule(lx, pillCY, pillW, pillH)}" fill="${p.gold}" opacity="0.90"/>
    <!-- Ligne de séparation interne de la capsule gauche -->
    <line x1="${lx}" y1="${pillCY - capR + 6}" x2="${lx}" y2="${pillCY + capR - 6}"
          stroke="${p.bg}" stroke-width="3" opacity="0.35"/>

    <!-- Droite : capsule vide / outline (placebo) -->
    <path d="${capsule(rx, pillCY, pillW, pillH)}"
          fill="${p.bg}" stroke="${p.muted}" stroke-width="3" opacity="0.85"/>
    <!-- Tirets intérieurs pour matérialiser le vide -->
    <line x1="${rx - pillW / 2 + capR + 14}" y1="${pillCY}"
          x2="${rx + pillW / 2 - capR - 14}" y2="${pillCY}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="7,6" opacity="0.45"/>`;

    // ── Labels des capsules ───────────────────────────────────────────────────
    const pillLabels = `
    <text x="${lx}" y="${pillCY + capR + 30}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.gold}">MÉDICAMENT ACTIF</text>
    <text x="${rx}" y="${pillCY + capR + 30}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          letter-spacing="2.5" fill="${p.muted}">PLACEBO</text>`;

    // ── Connecteurs pointillés (capsule → barre) ──────────────────────────────
    const connectors = `
    <line x1="${lx}" y1="${pillCY + capR + 50}"
          x2="${lx}" y2="${leftBarTop - 64}"
          stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.26"/>
    <line x1="${rx}" y1="${pillCY + capR + 50}"
          x2="${rx}" y2="${rightBarTop - 64}"
          stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="7,5" opacity="0.26"/>`;

    // ── Barres de résultat ────────────────────────────────────────────────────
    const bars = `
    <!-- Piste de fond gauche -->
    <rect x="${lx - barW / 2}" y="${leftBarTop - 44}" width="${barW}"
          height="${leftBarH + 44}" rx="8" fill="${p.muted}" opacity="0.07"/>
    <!-- Piste de fond droite -->
    <rect x="${rx - barW / 2}" y="${rightBarTop - 44}" width="${barW}"
          height="${rightBarH + 44}" rx="8" fill="${p.muted}" opacity="0.07"/>

    <!-- Barre gauche — or (médicament) -->
    <rect x="${lx - barW / 2}" y="${leftBarTop}" width="${barW}"
          height="${leftBarH}" rx="8" fill="${p.gold}" opacity="0.88"/>
    <!-- Barre droite — or pâle (placebo — presque aussi haute !) -->
    <rect x="${rx - barW / 2}" y="${rightBarTop}" width="${barW}"
          height="${rightBarH}" rx="8" fill="${p.goldLight}" opacity="0.80"/>

    <!-- Axe de base -->
    <line x1="${lx - barW / 2 - 24}" y1="${barBottom}"
          x2="${rx + barW / 2 + 24}" y2="${barBottom}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>`;

    // ── Pourcentages et labels résultat ───────────────────────────────────────
    const outcomes = `
    <!-- 74 % au-dessus de la barre gauche -->
    <text x="${lx}" y="${leftBarTop - 22}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="54"
          fill="${p.gold}">74%</text>
    <!-- 68 % au-dessus de la barre droite -->
    <text x="${rx}" y="${rightBarTop - 22}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="54"
          fill="${p.goldLight}">68%</text>
    <!-- Labels bas -->
    <text x="${lx}" y="${barBottom + 40}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="21"
          fill="${p.muted}">amélioration</text>
    <text x="${rx}" y="${barBottom + 40}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="21"
          fill="${p.muted}">amélioration</text>`;

    return sep + pills + pillLabels + connectors + bars + outcomes;
  },
};
