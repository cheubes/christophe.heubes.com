module.exports = {
  id:          'effet-pygmalion',
  title:       'Effet Pygmalion',
  category:    'Psychologie & Comportement',
  tagline:     "L'attente crée la réalité.",
  description: "Les attentes élevées d'un tiers influencent positivement la performance. Une prophétie qui s'auto-réalise par le comportement.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Layout constants ──────────────────────────────────────────────────
    const groundY = 862;

    // Mirror: centred on the left (x≈380)
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

    // ── Mirror (elliptical frame + glass) ─────────────────────────────────
    const mirror = `
    <ellipse cx="${mCx}" cy="${mCy}" rx="${fRx}" ry="${fRy}"
             fill="${p.muted}" opacity="0.68"/>
    <ellipse cx="${mCx}" cy="${mCy}" rx="${gRx}" ry="${gRy}"
             fill="#0e1d2c"/>`;

    // ── Lion in the mirror (gold, starburst mane) ─────────────────────────
    //
    // Cat faces LEFT → its reflection faces RIGHT.
    // The lion (enlarged reflection) therefore faces right inside the mirror.
    // Mane centre: slightly right of the mirror centre.
    const lx = 392, ly = 426;               // mane / head centre
    const mOut = 130, mIn = 88, nS = 12;   // starburst: outer r, inner r, point count

    const mPts = [];
    for (let i = 0; i < nS * 2; i++) {
      const a = (i * Math.PI / nS) - Math.PI / 2;   // starts at the top (12 o'clock)
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
    // Cat sits on the floor, profile facing left (toward the mirror).
    // Head left of body, tail curled behind on the right.
    const hx = 796, hy = 716, hr = 56;         // head: centre and radius
    const bx = 872, by = 800, brx = 70, bry = 56; // body: centre and semi-axes

    // Tail: thick curved stroke from the right flank of the body, rising then curling back
    const qx0 = bx + brx, qy0 = by + 18;      // tail start (right flank)
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
    <!-- Front ear (face side, left in profile) -->
    <polygon points="${hx - 38},${hy - 34}
                     ${hx - 60},${hy - 92}
                     ${hx - 4},${hy - 52}"
             fill="${p.muted}"/>
    <!-- Back ear (nape side, right in profile) -->
    <polygon points="${hx + 8},${hy - 40}
                     ${hx - 4},${hy - 90}
                     ${hx + 40},${hy - 62}"
             fill="${p.muted}"/>
    ${tail}
    <!-- Front paws (visible in front of the body, under the chest) -->
    <ellipse cx="${hx - 20}" cy="${groundY - 6}" rx="27" ry="14" fill="${p.muted}"/>
    <!-- Sitting mass: hind legs and base -->
    <ellipse cx="${bx + 4}" cy="${groundY - 6}" rx="62" ry="18" fill="${p.muted}"/>`;

    // Draw order: background → floor → stand → mirror → lion → cat
    return defs + ground + stand + mirror + lion + cat;
  },
};
