'use strict';

module.exports = {
  id:          'loi-gall',
  title:       'Loi de Gall',
  category:    'Ingénierie & Technologie',
  tagline:     "Tout système complexe qui fonctionne a évolué depuis un système simple qui fonctionnait.",
  description: "Loi de John Gall (Systemantics, 1975) : un système complexe conçu directement comme tel est voué à l'échec. La complexité fonctionnelle émerge toujours d'une simplicité fonctionnelle.",

  render(ctx) {
    const { palette: p } = ctx;

    // TOP path (gold): Simple → grow → grow → Complex ✓
    const ty = 360;
    const steps = [
      { x: 195, r: 28, label: 'v1', sublabel: 'simple' },
      { x: 410, r: 38, label: 'v2', sublabel: '' },
      { x: 645, r: 50, label: 'v3', sublabel: '' },
      { x: 905, r: 65, label: 'vN', sublabel: 'complexe' },
    ];

    let topPath = `
    <text x="600" y="${ty - 90}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.52">ÉVOLUTION DEPUIS LA SIMPLICITÉ</text>`;

    for (let i = 0; i < steps.length - 1; i++) {
      const a = steps[i], b = steps[i + 1];
      const ax = a.x + a.r + 4, bx = b.x - b.r - 12;
      topPath += `
      <line x1="${ax}" y1="${ty}" x2="${bx}" y2="${ty}"
            stroke="${p.gold}" stroke-width="2" opacity="0.50"/>
      <polygon points="${bx},${ty - 6} ${bx},${ty + 6} ${bx + 12},${ty}"
               fill="${p.gold}" opacity="0.50"/>`;
    }

    for (let i = 0; i < steps.length; i++) {
      const s = steps[i];
      const isLast = i === steps.length - 1;
      topPath += `
      <circle cx="${s.x}" cy="${ty}" r="${s.r}"
              fill="${p.gold}" fill-opacity="${isLast ? '0.18' : '0.10'}"
              stroke="${p.gold}" stroke-width="${isLast ? '2.5' : '1.8'}" opacity="${isLast ? '0.80' : '0.55'}"/>
      <text x="${s.x}" y="${ty + 5}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="${isLast ? '15' : '13'}"
            fill="${p.gold}" opacity="${isLast ? '0.80' : '0.60'}">${s.label}</text>`;
      if (s.sublabel) {
        topPath += `
        <text x="${s.x}" y="${ty + s.r + 22}" text-anchor="middle"
              font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
              letter-spacing="1" fill="${p.gold}" opacity="0.45">${s.sublabel}</text>`;
      }
    }

    // ✓ mark
    topPath += `
    <text x="${steps[3].x}" y="${ty - steps[3].r - 18}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.gold}" opacity="0.75">✓ FONCTIONNE</text>`;

    // BOTTOM path (muted): complex from scratch → FAILS
    const by = 680;
    const botPath = `
    <text x="490" y="${by - 55}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">CONÇU DIRECTEMENT COMPLEXE</text>
    <rect x="185" y="${by - 55}" width="560" height="100" rx="14"
          fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="1.5" opacity="0.30"
          stroke-dasharray="5 4"/>
    <text x="465" y="${by - 8}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">SYSTÈME COMPLEXE</text>
    <text x="465" y="${by + 18}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.28">conçu d'emblée comme tel</text>
    <line x1="757" y1="${by - 8}" x2="840" y2="${by - 8}"
          stroke="${p.muted}" stroke-width="2" opacity="0.28"/>
    <polygon points="840,${by - 14} 840,${by - 2} 854,${by - 8}"
             fill="${p.muted}" opacity="0.28"/>
    <text x="905" y="${by - 16}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.38">✗ ÉCHOUE</text>`;

    // Separator line
    const sep = `
    <line x1="185" y1="${(ty + by) / 2 - 10}" x2="1015" y2="${(ty + by) / 2 - 10}"
          stroke="${p.muted}" stroke-width="1" opacity="0.12" stroke-dasharray="4 6"/>`;

    return topPath + sep + botPath;
  },
};
