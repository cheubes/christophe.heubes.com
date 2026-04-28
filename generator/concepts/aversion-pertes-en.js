'use strict';

module.exports = {
  id:          'aversion-pertes-en',
  title:       'Loss Aversion',
  category:    'Biases & Heuristics',
  tagline:     "Losing £100 hurts more than gaining £100 feels good.",
  description: "Principle from prospect theory (Kahneman &amp; Tversky): losses have roughly twice the psychological impact of equivalent gains.",

  render(ctx) {
    const { palette: p } = ctx;

    const ox = 600, oy = 540;

    const axes = `
    <line x1="165" y1="${oy}" x2="1030" y2="${oy}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.30"/>
    <polygon points="1030,${oy - 6} 1030,${oy + 6} 1048,${oy}"
             fill="${p.muted}" opacity="0.30"/>
    <line x1="${ox}" y1="820" x2="${ox}" y2="240"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.30"/>
    <polygon points="${ox - 6},240 ${ox + 6},240 ${ox},222"
             fill="${p.muted}" opacity="0.30"/>
    <text x="180" y="${oy - 12}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">← LOSSES</text>
    <text x="1020" y="${oy - 12}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">GAINS →</text>
    <text x="${ox + 14}" y="240" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.35">VALUE ↑</text>
    <text x="${ox + 14}" y="820" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.35">PAIN ↓</text>`;

    const curve = `
    <path d="M 175,795 C 300,720 460,620 ${ox},${oy} C 720,460 870,400 1040,360"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.75"/>`;

    const gainX = ox + 174, gainY = 425;
    const lossX = ox - 174, lossY = 745;

    const annotations = `
    <line x1="${ox}" y1="${oy}" x2="${gainX}" y2="${oy}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <line x1="${gainX}" y1="${oy}" x2="${gainX}" y2="${gainY}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <text x="${gainX + 14}" y="${(oy + gainY) / 2 + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.gold}" opacity="0.70">+ ${oy - gainY}</text>
    <text x="${gainX + 14}" y="${(oy + gainY) / 2 + 24}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.42">pts of pleasure</text>

    <line x1="${ox}" y1="${oy}" x2="${lossX}" y2="${oy}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <line x1="${lossX}" y1="${oy}" x2="${lossX}" y2="${lossY}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <text x="${lossX - 14}" y="${(oy + lossY) / 2 + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.muted}" opacity="0.60">− ${lossY - oy}</text>
    <text x="${lossX - 14}" y="${(oy + lossY) / 2 + 24}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.38">pts of pain</text>`;

    const ratio = `
    <text x="600" y="860" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.50">× 2.25</text>
    <text x="600" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">the impact of a loss vs an equivalent gain</text>`;

    const origin = `
    <circle cx="${ox}" cy="${oy}" r="5" fill="${p.muted}" opacity="0.40"/>`;

    return axes + curve + annotations + origin + ratio;
  },
};
