module.exports = {
  id:          'ikigai-en',
  title:       'Ikigai',
  category:    'Epistemology',
  tagline:     'Your reason for being at the intersection of four dimensions.',
  description: "Ikigai (生き甲斐) is a Japanese concept for what gives life deep meaning. It emerges at the confluence of what you love, what you excel at, what the world needs, and what you can be paid for.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Circle centres ────────────────────────────────────────────────────
    //   Arrangement center : (600, 540)
    //   dx/dy chosen so center point lies inside all 4 circles (dist ≈ 176 < r=185)
    const dx = 122, dy = 127, r = 185;
    const TL = { x: 600 - dx, y: 540 - dy };  // (478, 413) — What you love
    const TR = { x: 600 + dx, y: 540 - dy };  // (722, 413) — What you're good at
    const BL = { x: 600 - dx, y: 540 + dy };  // (478, 667) — What the world needs
    const BR = { x: 600 + dx, y: 540 + dy };  // (722, 667) — What you can be paid for

    // ── Circles ───────────────────────────────────────────────────────────
    const circles = [TL, TR, BL, BR].map(c => `
    <circle cx="${c.x}" cy="${c.y}" r="${r}"
            fill="${p.gold}" fill-opacity="0.055"
            stroke="${p.gold}" stroke-width="1.5" stroke-opacity="0.48"/>`).join('');

    // ── Small centre circle (highlights the IKIGAI zone) ──────────────────
    const centerCircle = `
    <circle cx="600" cy="540" r="56"
            fill="${p.gold}" fill-opacity="0.13"
            stroke="${p.gold}" stroke-width="1" stroke-opacity="0.38"/>`;

    // ── Outer labels (exclusive region of each circle) ────────────────────
    const outerLabels = `
    <!-- TL: What you love — top-left quadrant → centre ≈ (408, 298) -->
    <text x="408" y="285" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">WHAT YOU</text>
    <text x="408" y="306" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">LOVE</text>

    <!-- TR: What you're good at — top-right quadrant → centre ≈ (792, 298) -->
    <text x="792" y="280" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">WHAT YOU'RE</text>
    <text x="792" y="301" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">GOOD AT</text>

    <!-- BL: What the world needs — bottom-left quadrant → centre ≈ (408, 778) -->
    <text x="408" y="768" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">WHAT THE WORLD</text>
    <text x="408" y="789" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">NEEDS</text>

    <!-- BR: What you can be paid for — bottom-right quadrant → centre ≈ (792, 762) -->
    <text x="792" y="752" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.8" fill="${p.muted}">WHAT YOU CAN</text>
    <text x="792" y="773" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">BE PAID</text>
    <text x="792" y="793" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.text}">FOR</text>`;

    // ── Intersection labels ───────────────────────────────────────────────
    //   Passion    = TL ∩ TR  → midpoint (600, 413)
    //   Mission    = TL ∩ BL  → midpoint (478, 540)
    //   Profession = TR ∩ BR  → midpoint (722, 540)
    //   Vocation   = BL ∩ BR  → midpoint (600, 667)
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
