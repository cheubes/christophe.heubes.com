module.exports = {
  id:          'effet-pygmalion-en',
  title:       'Pygmalion Effect',
  category:    'Psychology & Behaviour',
  tagline:     'Expectation creates reality.',
  description: "High expectations from a third party positively influence an individual's performance. A self-fulfilling prophecy driven by behaviour.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Layout constants ──────────────────────────────────────────────────
    const groundY = 862;

    // Mirror: centred on the left (x≈382)
    const mCx = 382, mCy = 490;
    const fRx  = 172, fRy = 244;   // frame (outer)
    const gRx  = 150, gRy = 220;   // glass (inner)

    // ── Clip path: mirror glass ───────────────────────────────────────────
    const defs = `
    <defs>
      <clipPath id="mc">
        <ellipse cx="${mCx}" cy="${mCy}" rx="${gRx - 1}" ry="${gRy - 1}"/>
      </clipPath>
    </defs>`;

    // ── Floor ─────────────────────────────────────────────────────────────
    const ground = `
    <rect x="80" y="${groundY}" width="1040" height="16" rx="5"
          fill="${p.muted}" opacity="0.28"/>`;

    // ── Mirror stand ──────────────────────────────────────────────────────
    const standTop = mCy + fRy;  // y = 734
    const stand = `
    <rect x="${mCx - 10}" y="${standTop}" width="20" height="${groundY - standTop}"
          rx="4" fill="${p.muted}" opacity="0.72"/>
    <rect x="${mCx - 74}" y="${groundY - 14}" width="148" height="18" rx="6"
          fill="${p.muted}" opacity="0.72"/>`;

    // ── Mirror (frame + glass) ────────────────────────────────────────────
    const mirror = `
    <ellipse cx="${mCx}" cy="${mCy}" rx="${fRx}" ry="${fRy}"
             fill="${p.muted}" opacity="0.68"/>
    <ellipse cx="${mCx}" cy="${mCy}" rx="${gRx}" ry="${gRy}"
             fill="#0e1d2c"/>`;

    // ── Lion in the mirror (gold, starburst mane) ─────────────────────────
    //
    // Cat faces LEFT → its reflection faces RIGHT.
    // The lion (enlarged reflection) therefore faces right inside the mirror.
    const lx = 392, ly = 426;
    const mOut = 130, mIn = 88, nS = 12;

    const mPts = [];
    for (let i = 0; i < nS * 2; i++) {
      const a = (i * Math.PI / nS) - Math.PI / 2;
      const r = i % 2 === 0 ? mOut : mIn;
      mPts.push(
        `${(lx + r * Math.cos(a)).toFixed(1)},${(ly + r * Math.sin(a)).toFixed(1)}`
      );
    }

    const lion = `
    <!-- Lion body (clipped to mirror glass) -->
    <ellipse cx="${lx - 14}" cy="650" rx="92" ry="108"
             fill="${p.gold}" clip-path="url(#mc)"/>
    <!-- Mane: ${nS}-point starburst -->
    <polygon points="${mPts.join(' ')}"
             fill="${p.gold}" clip-path="url(#mc)"/>
    <!-- Head (circle inside mane) -->
    <circle cx="${lx + 4}" cy="${ly + 6}" r="72"
            fill="${p.gold}" clip-path="url(#mc)"/>`;

    // ── Cat (muted silhouette, facing left, sitting on the right) ─────────
    //
    // Sitting cat, profile facing left (toward the mirror).
    // Head left of body, tail curling up on the right.
    const hx = 796, hy = 716, hr = 56;
    const bx = 872, by = 800, brx = 70, bry = 56;

    const qx0 = bx + brx, qy0 = by + 18;
    const tail = `
    <path d="M ${qx0},${qy0}
             C ${qx0 + 46},${qy0 - 42} ${qx0 + 60},${qy0 - 100}
               ${qx0 + 16},${qy0 - 136}
             C ${qx0 - 10},${qy0 - 154} ${qx0 - 40},${qy0 - 138}
               ${qx0 - 30},${qy0 - 106}"
          fill="none" stroke="${p.muted}" stroke-width="26" stroke-linecap="round"/>`;

    const cat = `
    <!-- Body -->
    <ellipse cx="${bx}" cy="${by}" rx="${brx}" ry="${bry}" fill="${p.muted}"/>
    <!-- Head -->
    <circle cx="${hx}" cy="${hy}" r="${hr}" fill="${p.muted}"/>
    <!-- Front ear (left in profile) -->
    <polygon points="${hx - 38},${hy - 34}
                     ${hx - 60},${hy - 92}
                     ${hx - 4},${hy - 52}"
             fill="${p.muted}"/>
    <!-- Back ear (right in profile) -->
    <polygon points="${hx + 8},${hy - 40}
                     ${hx - 4},${hy - 90}
                     ${hx + 40},${hy - 62}"
             fill="${p.muted}"/>
    ${tail}
    <!-- Front paws -->
    <ellipse cx="${hx - 20}" cy="${groundY - 6}" rx="27" ry="14" fill="${p.muted}"/>
    <!-- Sitting base (hind legs) -->
    <ellipse cx="${bx + 4}" cy="${groundY - 6}" rx="62" ry="18" fill="${p.muted}"/>`;

    return defs + ground + stand + mirror + lion + cat;
  },
};
