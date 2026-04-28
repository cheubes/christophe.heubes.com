'use strict';

module.exports = {
  id:          'biais-confirmation-en',
  title:       'Confirmation Bias',
  category:    'Biases & Heuristics',
  tagline:     "We seek what confirms. We ignore what contradicts.",
  description: "Tendency to favour information that confirms existing beliefs while minimising or ignoring information that contradicts them.",

  render(ctx) {
    const { palette: p } = ctx;

    const ftx = 165, ftw = 870;
    const fty = 245;
    const fbx = 420, fbw = 360;
    const fby = 720;

    const funnel = `
    <polygon points="${ftx},${fty} ${ftx + ftw},${fty} ${fbx + fbw},${fby} ${fbx},${fby}"
             fill="${p.muted}" fill-opacity="0.04" stroke="none"/>
    <line x1="${ftx}" y1="${fty}" x2="${fbx}" y2="${fby}"
          stroke="${p.muted}" stroke-width="2" opacity="0.30"/>
    <line x1="${ftx + ftw}" y1="${fty}" x2="${fbx + fbw}" y2="${fby}"
          stroke="${p.muted}" stroke-width="2" opacity="0.30"/>`;

    const openings = `
    <line x1="${ftx}" y1="${fty}" x2="${ftx + ftw}" y2="${fty}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.22"/>
    <line x1="${fbx}" y1="${fby}" x2="${fbx + fbw}" y2="${fby}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.40"/>`;

    const inputXs = [210, 340, 470, 600, 730, 860, 940, 1000];
    const isGold  = [true, false, true, false, true, false, true, false];
    let inputDots = '';
    for (let i = 0; i < inputXs.length; i++) {
      const x = inputXs[i], gold = isGold[i];
      const col = gold ? p.gold : p.muted;
      const op  = gold ? '0.72' : '0.32';
      inputDots += `<circle cx="${x}" cy="195" r="16"
        fill="${col}" fill-opacity="${gold ? '0.55' : '0.10'}"
        stroke="${col}" stroke-width="1.5" opacity="${op}"/>`;
    }

    const inputLabel = `
    <text x="600" y="162" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">INCOMING INFORMATION</text>`;

    const rejects = [
      { x: 255, y: 415 }, { x: 310, y: 525 },
      { x: 940, y: 415 }, { x: 884, y: 525 },
    ];
    let rejectDots = '';
    for (const { x, y } of rejects) {
      const s = 10;
      rejectDots += `
      <circle cx="${x}" cy="${y}" r="15"
              fill="${p.muted}" fill-opacity="0.06" stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>
      <line x1="${x - s}" y1="${y - s}" x2="${x + s}" y2="${y + s}"
            stroke="${p.muted}" stroke-width="2.5" opacity="0.32"/>
      <line x1="${x + s}" y1="${y - s}" x2="${x - s}" y2="${y + s}"
            stroke="${p.muted}" stroke-width="2.5" opacity="0.32"/>`;
    }

    const passXs = [500, 570, 640, 710];
    let passDots = '';
    for (const x of passXs) {
      passDots += `<circle cx="${x}" cy="580" r="16"
        fill="${p.gold}" fill-opacity="0.45" stroke="${p.gold}" stroke-width="1.5" opacity="0.65"/>`;
    }

    const outXs = [510, 580, 650, 720];
    let outDots = '';
    for (const x of outXs) {
      outDots += `<circle cx="${x}" cy="790" r="16"
        fill="${p.gold}" fill-opacity="0.60" stroke="${p.gold}" stroke-width="1.5" opacity="0.75"/>`;
    }

    const outputLabel = `
    <text x="600" y="848" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.50">WHAT WE RETAIN</text>`;

    return funnel + openings + inputLabel + inputDots + rejectDots + passDots + outDots + outputLabel;
  },
};
