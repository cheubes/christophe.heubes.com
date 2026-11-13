module.exports = {
  id:          'effet-projecteur',
  title:       'Effet de Projecteur',
  category:    'Psychologie & Comportement',
  tagline:     "Nous surévaluons l'attention que les autres nous portent.",
  description: "Nous pensons être sous les projecteurs en permanence, alors que les autres sont absorbés par leur propre monde intérieur.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Layout ──────────────────────────────────────────────────────────────
    // Left panel (perception) centred at x=300
    // Right panel (reality)     centred at x=900
    // Vertical separator at x=600
    const lx = 300;
    const rx = 900;

    // Silhouette (same proportions as the other illustrations)
    const headR   = 44;
    const bodyW   = 52;
    const bodyH   = 130;

    // Y axis of the figures
    const figHeadY = 700;
    const bodyTop  = figHeadY + headR + 5;   // 749
    const bodyBot  = bodyTop + bodyH;         // 879

    // Left light cone
    const apexY  = 155;   // spotlight apex
    const halfW  = 230;   // half-width of the cone base

    // ── Defs ────────────────────────────────────────────────────────────────
    const defs = `
    <defs>
      <!-- Vertical gradient for the cone (source → floor) -->
      <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${p.gold}"      stop-opacity="0.18"/>
      </linearGradient>
      <!-- Light source glow -->
      <radialGradient id="projGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
      <!-- Faint glow on the reality side -->
      <radialGradient id="tinySpot" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.20"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

    // ── Separator ───────────────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="915"
          stroke="${p.muted}" stroke-width="1" opacity="0.20"/>`;

    // ── Panel labels ────────────────────────────────────────────────────────
    const panelLabels = `
    <text x="${lx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">TA PERCEPTION</text>
    <text x="${rx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">LA RÉALITÉ</text>`;

    // ── Left panel: big spotlight ───────────────────────────────────────────
    const leftPanel = `
    <!-- Light cone -->
    <path d="M ${lx},${apexY} L ${lx - halfW},${bodyBot} L ${lx + halfW},${bodyBot} Z"
          fill="url(#coneGrad)"/>
    <!-- Floor pool of light -->
    <ellipse cx="${lx}" cy="${bodyBot}" rx="${halfW}" ry="20"
             fill="${p.gold}" opacity="0.12"/>
    <!-- Light source (spotlight) -->
    <circle cx="${lx}" cy="${apexY}" r="26" fill="url(#projGlow)"/>
    <circle cx="${lx}" cy="${apexY}" r="8"  fill="${p.goldLight}"/>
    <!-- Bright silhouette -->
    <circle cx="${lx}" cy="${figHeadY}" r="${headR}"
            fill="${p.goldLight}" opacity="0.95"/>
    <rect x="${lx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.goldLight}" opacity="0.95"/>`;

    // ── Right panel: near-darkness (reality) ─────────────────────────────────
    const rightPanel = `
    <!-- Faint glow around the head -->
    <circle cx="${rx}" cy="${figHeadY}" r="58" fill="url(#tinySpot)"/>
    <!-- Silhouette in the shadow -->
    <circle cx="${rx}" cy="${figHeadY}" r="${headR}"
            fill="${p.muted}" opacity="0.32"/>
    <rect x="${rx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.muted}" opacity="0.32"/>`;

    return defs + sep + leftPanel + rightPanel + panelLabels;
  },
};
