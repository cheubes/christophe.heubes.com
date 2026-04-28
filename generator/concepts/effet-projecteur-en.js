module.exports = {
  id:          'effet-projecteur-en',
  title:       'Spotlight Effect',
  category:    'Psychology & Behaviour',
  tagline:     'We overestimate the attention others pay to us.',
  description: 'We think we are constantly in the spotlight, while others are absorbed in their own inner world.',

  render(ctx) {
    const { palette: p } = ctx;

    // ── Layout ──────────────────────────────────────────────────────────────
    const lx = 300;   // left panel centre x  (perception)
    const rx = 900;   // right panel centre x (reality)

    const headR  = 44;
    const bodyW  = 52;
    const bodyH  = 130;

    const figHeadY = 700;
    const bodyTop  = figHeadY + headR + 5;   // 749
    const bodyBot  = bodyTop + bodyH;         // 879

    const apexY = 155;
    const halfW = 230;

    // ── Defs ────────────────────────────────────────────────────────────────
    const defs = `
    <defs>
      <linearGradient id="coneGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="${p.gold}"      stop-opacity="0.18"/>
      </linearGradient>
      <radialGradient id="projGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="tinySpot" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stop-color="${p.goldLight}" stop-opacity="0.20"/>
        <stop offset="100%" stop-color="${p.goldLight}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

    // ── Separator ───────────────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="915"
          stroke="${p.muted}" stroke-width="1" opacity="0.20"/>`;

    // ── Panel labels ─────────────────────────────────────────────────────────
    const panelLabels = `
    <text x="${lx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">YOUR PERCEPTION</text>
    <text x="${rx}" y="138" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="21"
          letter-spacing="2" fill="${p.muted}">THE REALITY</text>`;

    // ── Left panel: big spotlight ────────────────────────────────────────────
    const leftPanel = `
    <!-- Light cone -->
    <path d="M ${lx},${apexY} L ${lx - halfW},${bodyBot} L ${lx + halfW},${bodyBot} Z"
          fill="url(#coneGrad)"/>
    <!-- Floor pool of light -->
    <ellipse cx="${lx}" cy="${bodyBot}" rx="${halfW}" ry="20"
             fill="${p.gold}" opacity="0.12"/>
    <!-- Spotlight source -->
    <circle cx="${lx}" cy="${apexY}" r="26" fill="url(#projGlow)"/>
    <circle cx="${lx}" cy="${apexY}" r="8"  fill="${p.goldLight}"/>
    <!-- Bright silhouette -->
    <circle cx="${lx}" cy="${figHeadY}" r="${headR}"
            fill="${p.goldLight}" opacity="0.95"/>
    <rect x="${lx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.goldLight}" opacity="0.95"/>`;

    // ── Right panel: near-darkness (reality) ─────────────────────────────────
    const rightPanel = `
    <!-- Tiny glow around head -->
    <circle cx="${rx}" cy="${figHeadY}" r="58" fill="url(#tinySpot)"/>
    <!-- Dim silhouette -->
    <circle cx="${rx}" cy="${figHeadY}" r="${headR}"
            fill="${p.muted}" opacity="0.32"/>
    <rect x="${rx - bodyW / 2}" y="${bodyTop}" width="${bodyW}" height="${bodyH}" rx="10"
          fill="${p.muted}" opacity="0.32"/>`;

    return defs + sep + leftPanel + rightPanel + panelLabels;
  },
};
