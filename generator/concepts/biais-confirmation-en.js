'use strict';

module.exports = {
  id:          'biais-confirmation-en',
  title:       'Confirmation Bias',
  category:    'Biases & Heuristics',
  tagline:     "We seek what confirms. We ignore what contradicts.",
  description: "Tendency to favor information that confirms existing beliefs while minimizing or ignoring information that contradicts them.",

  render(ctx) {
    const { palette: p, font } = ctx;

    // Fixed seed so that the star field is identical on every generation
    let seed = 11;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const checkMark = [[300, 600], [380, 680], [470, 770], [580, 660], [690, 550], [800, 440], [910, 330]];

    let stars = '';
    for (let i = 0; i < 110; i++) {
      const x = 180 + random() * 840, y = 290 + random() * 640;
      if (checkMark.some(([sx, sy]) => Math.hypot(sx - x, sy - y) < 40)) continue;
      const r = 1.5 + random() * 3.5;
      const opacity = 0.35 + random() * 0.4;
      stars += `
    <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}"
            fill="${p.muted}" opacity="${opacity.toFixed(2)}"/>`;
    }

    const line = checkMark.map(([x, y], i) => `${i ? 'L' : 'M'}${x},${y}`).join(' ');
    const goldStars = checkMark.map(([x, y]) => `
    <circle cx="${x}" cy="${y}" r="16" fill="${p.gold}" opacity="0.18"/>
    <circle cx="${x}" cy="${y}" r="7" fill="${p.gold}"/>`).join('');

    return stars + `
    <path d="${line}" fill="none" stroke="${p.gold}" stroke-width="2.5"
          opacity="0.8" stroke-linejoin="round"/>` + goldStars + `
    <text x="600" y="960" text-anchor="middle"
          font-family="${font}" font-weight="500" font-size="19"
          letter-spacing="2" fill="${p.muted}" opacity="0.9">WE ONLY CONNECT THE STARS THAT CONFIRM</text>`;
  },
};
