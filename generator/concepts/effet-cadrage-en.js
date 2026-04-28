'use strict';

module.exports = {
  id:          'effet-cadrage-en',
  title:       'The Framing Effect',
  category:    'Biases & Heuristics',
  tagline:     "The same data produces opposite decisions depending on how it is presented.",
  description: "Cognitive bias in which the way information is framed — not its content — determines the decision made.",

  render(ctx) {
    const { palette: p } = ctx;

    const cxL = 350, cxR = 850, cy = 480;
    const cw = 310, ch = 340, rx = 12;

    const cardL = `
    <rect x="${cxL - cw / 2}" y="${cy - ch / 2}" width="${cw}" height="${ch}" rx="${rx}"
          fill="${p.gold}" fill-opacity="0.07" stroke="${p.gold}" stroke-width="1.8" opacity="0.65"/>
    <text x="${cxL}" y="${cy - 80}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="88"
          fill="${p.gold}" opacity="0.85">90%</text>
    <text x="${cxL}" y="${cy - 8}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="18"
          letter-spacing="2" fill="${p.gold}" opacity="0.65">SURVIVAL RATE</text>
    <line x1="${cxL - 60}" y1="${cy + 30}" x2="${cxL + 60}" y2="${cy + 30}"
          stroke="${p.gold}" stroke-width="1" opacity="0.25"/>
    <text x="${cxL}" y="${cy + 75}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1" fill="${p.gold}" opacity="0.50">OPTION CHOSEN</text>
    <text x="${cxL}" y="${cy + 100}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.gold}" opacity="0.80">72 %</text>
    <text x="${cxL}" y="${cy + 120}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          letter-spacing="1" fill="${p.gold}" opacity="0.38">of subjects</text>`;

    const cardR = `
    <rect x="${cxR - cw / 2}" y="${cy - ch / 2}" width="${cw}" height="${ch}" rx="${rx}"
          fill="${p.muted}" fill-opacity="0.05" stroke="${p.muted}" stroke-width="1.8" opacity="0.40"/>
    <text x="${cxR}" y="${cy - 80}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="88"
          fill="${p.muted}" opacity="0.50">10%</text>
    <text x="${cxR}" y="${cy - 8}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="18"
          letter-spacing="2" fill="${p.muted}" opacity="0.42">MORTALITY RATE</text>
    <line x1="${cxR - 60}" y1="${cy + 30}" x2="${cxR + 60}" y2="${cy + 30}"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>
    <text x="${cxR}" y="${cy + 75}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.35">OPTION CHOSEN</text>
    <text x="${cxR}" y="${cy + 100}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.55">28 %</text>
    <text x="${cxR}" y="${cy + 120}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          letter-spacing="1" fill="${p.muted}" opacity="0.28">of subjects</text>`;

    const center = `
    <text x="600" y="${cy + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="300" font-size="42"
          fill="${p.muted}" opacity="0.30">=</text>`;

    const header = `
    <text x="600" y="215" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="15"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">SAME DATA — SAME TREATMENT</text>`;

    const footer = `
    <text x="600" y="860" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.35">The framing changes the decision.</text>`;

    return header + cardL + center + cardR + footer;
  },
};
