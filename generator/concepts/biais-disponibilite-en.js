'use strict';

module.exports = {
  id:          'biais-disponibilite-en',
  title:       'Availability Bias',
  category:    'Biases & Heuristics',
  tagline:     "We judge as probable what comes easily to mind.",
  description: "Heuristic described by Tversky and Kahneman (1973): people assess the probability of an event by how easily examples come to mind, not by actual statistics.",

  render(ctx) {
    const { palette: p, font } = ctx;

    // Fixed seed so that the school of fish is identical on every generation
    let seed = 5;
    const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

    const surface = 400;

    const fish = (x, y, size, color, opacity, direction = 1) => {
      const w = size, h = size * 0.45, stroke = Math.max(1.5, size / 40);
      const tailX = x - direction * (w / 2 + h * 0.8);
      return `
    <g opacity="${opacity}">
      <ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}"
               fill="${color}" fill-opacity="0.35" stroke="${color}" stroke-width="${stroke}"/>
      <polygon points="${x - direction * w / 2},${y} ${tailX},${y - h * 0.55} ${tailX},${y + h * 0.55}"
               fill="${color}" fill-opacity="0.35" stroke="${color}" stroke-width="${stroke}" stroke-linejoin="round"/>
      <circle cx="${x + direction * w * 0.3}" cy="${y - h * 0.1}" r="${Math.max(2, size / 30)}" fill="${color}"/>
    </g>`;
    };

    let school = '';
    for (let i = 0; i < 46; i++) {
      const x = Math.round(200 + random() * 800), y = Math.round(620 + random() * 310);
      school += fish(x, y, 46, p.muted, 0.55, random() < 0.5 ? 1 : -1);
    }

    let waves = `M160,${surface}`;
    for (let i = 0; i < 30; i++) waves += ' q14.7,-6 29.3,0';

    return `
    <rect x="160" y="${surface}" width="880" height="${960 - surface}" fill="${p.muted}" opacity="0.06"/>
    <path d="${waves}" fill="none" stroke="${p.text}" stroke-width="2" opacity="0.55"/>
    <line x1="640" y1="230" x2="640" y2="452" stroke="${p.text}" stroke-width="1.5" opacity="0.8"/>
    <path d="M640,452 v18 a12,12 0 0 1 -24,0"
          fill="none" stroke="${p.text}" stroke-width="3" stroke-linecap="round"/>`
      + fish(600, 480, 170, p.gold, 1)
      + school + `
    <text x="760" y="470"
          font-family="${font}" font-weight="700" font-size="19"
          letter-spacing="2" fill="${p.gold}">WHAT SURFACES</text>
    <text x="760" y="498"
          font-family="${font}" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.8">rare, striking</text>
    <text x="200" y="600"
          font-family="${font}" font-weight="700" font-size="19"
          letter-spacing="2" fill="${p.muted}">WHAT IS FREQUENT</text>`;
  },
};
