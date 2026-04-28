module.exports = {
  id:          'effet-projecteur',
  title:       'Effet de Projecteur',
  category:    'Psychologie & Comportement',
  tagline:     "Nous surévaluons l'attention que les autres nous portent.",
  description: "Nous pensons être sous les projecteurs en permanence, alors que les autres sont absorbés par leur propre monde intérieur.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Layout ──────────────────────────────────────────────────────────────
    // Panneau gauche (perception) centré en x=300
    // Panneau droit  (réalité)    centré en x=900
    // Séparateur vertical à x=600
    const lx = 300;
    const rx = 900;

    // Silhouette (mêmes proportions que les autres illustrations)
    const headR   = 44;
    const bodyW   = 52;
    const bodyH   = 130;

    // Axe Y des figures
    const figHeadY = 700;
    const bodyTop  = figHeadY + headR + 5;   // 749
    const bodyBot  = bodyTop + bodyH;         // 879

    // Cône de lumière gauche
    const apexY  = 155;   // sommet du projecteur
    const halfW  = 230;   // demi-largeur de la base du cône

    // ── Defs ────────────────────────────────────────────────────────────────
    const defs = `
    <defs>
      <!-- Gradient vertical pour le cône (source → sol) -->
      <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${p.gold}"      stop-opacity="0.18"/>
      </linearGradient>
      <!-- Halo de la source lumineuse -->
      <radialGradient id="projGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
      <!-- Infime halo côté réalité -->
      <radialGradient id="tinySpot" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.20"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

    // ── Séparateur ──────────────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="915"
          stroke="${p.muted}" stroke-width="1" opacity="0.20"/>`;

    // ── Labels de panneau ───────────────────────────────────────────────────
    const panelLabels = `
    <text x="${lx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">TA PERCEPTION</text>
    <text x="${rx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">LA RÉALITÉ</text>`;

    // ── Panneau gauche : grand projecteur ───────────────────────────────────
    const leftPanel = `
    <!-- Cône de lumière -->
    <path d="M ${lx},${apexY} L ${lx - halfW},${bodyBot} L ${lx + halfW},${bodyBot} Z"
          fill="url(#coneGrad)"/>
    <!-- Halo au sol (pool de lumière) -->
    <ellipse cx="${lx}" cy="${bodyBot}" rx="${halfW}" ry="20"
             fill="${p.gold}" opacity="0.12"/>
    <!-- Source lumineuse (projecteur) -->
    <circle cx="${lx}" cy="${apexY}" r="26" fill="url(#projGlow)"/>
    <circle cx="${lx}" cy="${apexY}" r="8"  fill="${p.goldLight}"/>
    <!-- Silhouette lumineuse -->
    <circle cx="${lx}" cy="${figHeadY}" r="${headR}"
            fill="${p.goldLight}" opacity="0.95"/>
    <rect x="${lx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.goldLight}" opacity="0.95"/>`;

    // ── Panneau droit : quasi-obscurité (réalité) ────────────────────────────
    const rightPanel = `
    <!-- Infime halo autour de la tête -->
    <circle cx="${rx}" cy="${figHeadY}" r="58" fill="url(#tinySpot)"/>
    <!-- Silhouette dans l'ombre -->
    <circle cx="${rx}" cy="${figHeadY}" r="${headR}"
            fill="${p.muted}" opacity="0.32"/>
    <rect x="${rx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.muted}" opacity="0.32"/>`;

    return defs + sep + leftPanel + rightPanel + panelLabels;
  },
};
