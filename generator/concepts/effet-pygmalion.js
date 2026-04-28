module.exports = {
  id:          'effet-pygmalion',
  title:       'Effet Pygmalion',
  category:    'Psychologie & Comportement',
  tagline:     "L'attente crée la réalité.",
  description: "Les attentes élevées d'un tiers influencent positivement la performance. Une prophétie qui s'auto-réalise par le comportement.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Constantes de mise en page ────────────────────────────────────────
    const groundY = 862;

    // Miroir : centré à gauche (x≈380)
    const mCx = 382, mCy = 490;
    const fRx  = 172, fRy = 244;   // cadre (extérieur)
    const gRx  = 150, gRy = 220;   // verre (intérieur)

    // ── Clip path : verre du miroir ───────────────────────────────────────
    const defs = `
    <defs>
      <clipPath id="mc">
        <ellipse cx="${mCx}" cy="${mCy}" rx="${gRx - 1}" ry="${gRy - 1}"/>
      </clipPath>
    </defs>`;

    // ── Sol ───────────────────────────────────────────────────────────────
    const ground = `
    <rect x="80" y="${groundY}" width="1040" height="16" rx="5"
          fill="${p.muted}" opacity="0.28"/>`;

    // ── Pied du miroir ────────────────────────────────────────────────────
    const standTop = mCy + fRy;  // y = 734
    const stand = `
    <rect x="${mCx - 10}" y="${standTop}" width="20" height="${groundY - standTop}"
          rx="4" fill="${p.muted}" opacity="0.72"/>
    <rect x="${mCx - 74}" y="${groundY - 14}" width="148" height="18" rx="6"
          fill="${p.muted}" opacity="0.72"/>`;

    // ── Miroir (cadre elliptique + verre) ─────────────────────────────────
    const mirror = `
    <ellipse cx="${mCx}" cy="${mCy}" rx="${fRx}" ry="${fRy}"
             fill="${p.muted}" opacity="0.68"/>
    <ellipse cx="${mCx}" cy="${mCy}" rx="${gRx}" ry="${gRy}"
             fill="#0e1d2c"/>`;

    // ── Lion dans le miroir (doré, crinière en étoile) ────────────────────
    //
    // Le chat fait face à GAUCHE → sa réflexion fait face à DROITE.
    // Le lion (reflet agrandi) est donc orienté vers la droite dans le miroir.
    // Centre de la crinière : légèrement à droite du centre du miroir.
    const lx = 392, ly = 426;               // centre crinière / tête
    const mOut = 130, mIn = 88, nS = 12;   // starburst : r ext., r int., nb pointes

    const mPts = [];
    for (let i = 0; i < nS * 2; i++) {
      const a = (i * Math.PI / nS) - Math.PI / 2;   // commence en haut (12h)
      const r = i % 2 === 0 ? mOut : mIn;
      mPts.push(
        `${(lx + r * Math.cos(a)).toFixed(1)},${(ly + r * Math.sin(a)).toFixed(1)}`
      );
    }

    const lion = `
    <!-- Corps du lion (clippé au verre du miroir) -->
    <ellipse cx="${lx - 14}" cy="650" rx="92" ry="108"
             fill="${p.gold}" clip-path="url(#mc)"/>
    <!-- Crinière : starburst ${nS} pointes -->
    <polygon points="${mPts.join(' ')}"
             fill="${p.gold}" clip-path="url(#mc)"/>
    <!-- Tête (cercle intérieur à la crinière) -->
    <circle cx="${lx + 4}" cy="${ly + 6}" r="72"
            fill="${p.gold}" clip-path="url(#mc)"/>`;

    // ── Chat (silhouette muted, face gauche, assis à droite) ──────────────
    //
    // Le chat est assis sur le sol, profil orienté vers la gauche (vers le miroir).
    // Tête à gauche du corps, queue enroulée derrière à droite.
    const hx = 796, hy = 716, hr = 56;         // tête : centre et rayon
    const bx = 872, by = 800, brx = 70, bry = 56; // corps : centre et demi-axes

    // Queue : trait épais courbé partant du flanc droit du corps, montant puis recourbant
    const qx0 = bx + brx, qy0 = by + 18;      // départ queue (flanc droit)
    const tail = `
    <path d="M ${qx0},${qy0}
             C ${qx0 + 46},${qy0 - 42} ${qx0 + 60},${qy0 - 100}
               ${qx0 + 16},${qy0 - 136}
             C ${qx0 - 10},${qy0 - 154} ${qx0 - 40},${qy0 - 138}
               ${qx0 - 30},${qy0 - 106}"
          fill="none" stroke="${p.muted}" stroke-width="26" stroke-linecap="round"/>`;

    const cat = `
    <!-- Corps -->
    <ellipse cx="${bx}" cy="${by}" rx="${brx}" ry="${bry}" fill="${p.muted}"/>
    <!-- Tête -->
    <circle cx="${hx}" cy="${hy}" r="${hr}" fill="${p.muted}"/>
    <!-- Oreille avant (côté face, gauche dans le profil) -->
    <polygon points="${hx - 38},${hy - 34}
                     ${hx - 60},${hy - 92}
                     ${hx - 4},${hy - 52}"
             fill="${p.muted}"/>
    <!-- Oreille arrière (côté nuque, droite dans le profil) -->
    <polygon points="${hx + 8},${hy - 40}
                     ${hx - 4},${hy - 90}
                     ${hx + 40},${hy - 62}"
             fill="${p.muted}"/>
    ${tail}
    <!-- Pattes avant (visibles devant le corps, sous la poitrine) -->
    <ellipse cx="${hx - 20}" cy="${groundY - 6}" rx="27" ry="14" fill="${p.muted}"/>
    <!-- Masse assise : pattes arrière et base -->
    <ellipse cx="${bx + 4}" cy="${groundY - 6}" rx="62" ry="18" fill="${p.muted}"/>`;

    // Ordre de dessin : fond → sol → pied → miroir → lion → chat
    return defs + ground + stand + mirror + lion + cat;
  },
};
