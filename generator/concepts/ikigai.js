module.exports = {
  id:          'ikigai',
  title:       'Ikigai',
  category:    'Épistémologie',
  tagline:     'Ta raison d\'être à l\'intersection de quatre dimensions.',
  description: "L'ikigai (生き甲斐) est un concept japonais qui désigne ce qui donne un sens profond à la vie. Il émerge à la confluence de ce qu'on aime, de ce en quoi on excelle, de ce dont le monde a besoin et de ce pour quoi on peut être rémunéré.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Centres des 4 cercles ─────────────────────────────────────────────
    //   Arrangement center : (600, 540)
    //   dx/dy choisis pour que le centre soit à l'intérieur des 4 cercles
    //   (distance centre → cercle ≈ 176 < r=185)
    const dx = 122, dy = 127, r = 185;
    const TL = { x: 600 - dx, y: 540 - dy };  // (478, 413) — Tu aimes
    const TR = { x: 600 + dx, y: 540 - dy };  // (722, 413) — Tu excelles
    const BL = { x: 600 - dx, y: 540 + dy };  // (478, 667) — Le monde a besoin
    const BR = { x: 600 + dx, y: 540 + dy };  // (722, 667) — Tu peux être payé

    // ── Cercles ───────────────────────────────────────────────────────────
    const circles = [TL, TR, BL, BR].map(c => `
    <circle cx="${c.x}" cy="${c.y}" r="${r}"
            fill="${p.gold}" fill-opacity="0.055"
            stroke="${p.gold}" stroke-width="1.5" stroke-opacity="0.48"/>`).join('');

    // ── Petit cercle central (matérialise le cœur IKIGAI) ─────────────────
    const centerCircle = `
    <circle cx="600" cy="540" r="56"
            fill="${p.gold}" fill-opacity="0.13"
            stroke="${p.gold}" stroke-width="1" stroke-opacity="0.38"/>`;

    // ── Labels extérieurs (région exclusive de chaque cercle) ─────────────
    //   Chaque label est dans le quadrant extérieur de son cercle,
    //   vérifié hors de l'intersection avec les autres cercles.
    const outerLabels = `
    <!-- TL : Ce que tu aimes — quadrant haut-gauche → centre ≈ (408, 298) -->
    <text x="408" y="285" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE QUE</text>
    <text x="408" y="306" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU AIMES</text>

    <!-- TR : Ce en quoi tu excelles — quadrant haut-droit → centre ≈ (792, 298) -->
    <text x="792" y="280" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE EN QUOI</text>
    <text x="792" y="301" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU EXCELLES</text>

    <!-- BL : Ce dont le monde a besoin — quadrant bas-gauche → centre ≈ (408, 778) -->
    <text x="408" y="768" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE DONT LE MONDE</text>
    <text x="408" y="789" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">A BESOIN</text>

    <!-- BR : Ce pour quoi tu peux être payé — quadrant bas-droit → centre ≈ (792, 762) -->
    <text x="792" y="752" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE POUR QUOI</text>
    <text x="792" y="773" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU PEUX</text>
    <text x="792" y="793" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">ÊTRE PAYÉ</text>`;

    // ── Labels d'intersection ─────────────────────────────────────────────
    //   Positionnés au point médian de chaque paire de cercles adjacents.
    //   Passion  = TL ∩ TR  → (600, 413)
    //   Mission  = TL ∩ BL  → (478, 540)
    //   Profession = TR ∩ BR → (722, 540)
    //   Vocation = BL ∩ BR  → (600, 667)
    const interLabels = `
    <!-- PASSION (haut, TL∩TR) -->
    <text x="600" y="408" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">PASSION</text>

    <!-- MISSION (gauche, TL∩BL) -->
    <text x="462" y="546" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">MISSION</text>

    <!-- PROFESSION (droite, TR∩BR) -->
    <text x="738" y="546" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">PROFESSION</text>

    <!-- VOCATION (bas, BL∩BR) -->
    <text x="600" y="672" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">VOCATION</text>`;

    // ── IKIGAI au centre ──────────────────────────────────────────────────
    const center = `
    <text x="600" y="533" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="30"
          letter-spacing="4" fill="${p.gold}">IKIGAI</text>
    <text x="600" y="555" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.70">生き甲斐</text>`;

    return circles + centerCircle + outerLabels + interLabels + center;
  },
};
