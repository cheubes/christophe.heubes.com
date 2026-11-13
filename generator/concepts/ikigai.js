module.exports = {
  id:          'ikigai',
  title:       'Ikigai',
  category:    'Épistémologie',
  tagline:     'Ta raison d\'être à l\'intersection de quatre dimensions.',
  description: "L'ikigai (生き甲斐) est un concept japonais qui désigne ce qui donne un sens profond à la vie. Il émerge à la confluence de ce qu'on aime, de ce en quoi on excelle, de ce dont le monde a besoin et de ce pour quoi on peut être rémunéré.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Centres of the 4 circles ──────────────────────────────────────────
    //   Arrangement center: (600, 540)
    //   dx/dy chosen so the center point lies inside all 4 circles
    //   (distance center → circle ≈ 176 < r=185)
    const dx = 122, dy = 127, r = 185;
    const TL = { x: 600 - dx, y: 540 - dy };  // (478, 413): what you love
    const TR = { x: 600 + dx, y: 540 - dy };  // (722, 413): what you're good at
    const BL = { x: 600 - dx, y: 540 + dy };  // (478, 667): what the world needs
    const BR = { x: 600 + dx, y: 540 + dy };  // (722, 667): what you can be paid for

    // ── Circles ───────────────────────────────────────────────────────────
    const circles = [TL, TR, BL, BR].map(c => `
    <circle cx="${c.x}" cy="${c.y}" r="${r}"
            fill="${p.gold}" fill-opacity="0.055"
            stroke="${p.gold}" stroke-width="1.5" stroke-opacity="0.48"/>`).join('');

    // ── Small centre circle (highlights the IKIGAI core) ──────────────────
    const centerCircle = `
    <circle cx="600" cy="540" r="56"
            fill="${p.gold}" fill-opacity="0.13"
            stroke="${p.gold}" stroke-width="1" stroke-opacity="0.38"/>`;

    // ── Outer labels (each circle's exclusive region) ─────────────────────
    //   Each label sits in its circle's outer quadrant,
    //   checked to be outside the intersection with the other circles.
    const outerLabels = `
    <!-- TL: what you love, top-left quadrant → centre ≈ (408, 298) -->
    <text x="408" y="285" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE QUE</text>
    <text x="408" y="306" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU AIMES</text>

    <!-- TR: what you're good at, top-right quadrant → centre ≈ (792, 298) -->
    <text x="792" y="280" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE EN QUOI</text>
    <text x="792" y="301" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU EXCELLES</text>

    <!-- BL: what the world needs, bottom-left quadrant → centre ≈ (408, 778) -->
    <text x="408" y="768" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE DONT LE MONDE</text>
    <text x="408" y="789" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">A BESOIN</text>

    <!-- BR: what you can be paid for, bottom-right quadrant → centre ≈ (792, 762) -->
    <text x="792" y="752" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">CE POUR QUOI</text>
    <text x="792" y="773" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">TU PEUX</text>
    <text x="792" y="793" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">ÊTRE PAYÉ</text>`;

    // ── Intersection labels ───────────────────────────────────────────────
    //   Placed at the midpoint of each pair of adjacent circles.
    //   Passion  = TL ∩ TR  → (600, 413)
    //   Mission  = TL ∩ BL  → (478, 540)
    //   Profession = TR ∩ BR → (722, 540)
    //   Vocation = BL ∩ BR  → (600, 667)
    const interLabels = `
    <!-- PASSION (top, TL∩TR) -->
    <text x="600" y="408" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">PASSION</text>

    <!-- MISSION (left, TL∩BL) -->
    <text x="462" y="546" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">MISSION</text>

    <!-- PROFESSION (right, TR∩BR) -->
    <text x="738" y="546" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">PROFESSION</text>

    <!-- VOCATION (bottom, BL∩BR) -->
    <text x="600" y="672" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="17"
          letter-spacing="1.5" fill="${p.goldLight}">VOCATION</text>`;

    // ── IKIGAI at centre ──────────────────────────────────────────────────
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
