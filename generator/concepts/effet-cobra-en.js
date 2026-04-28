'use strict';

module.exports = {
  id:          'effet-cobra-en',
  title:       'Cobra Effect',
  category:    'Economics & Incentives',
  tagline:     "An incentive designed to solve a problem ends up making it worse.",
  description: "Named after a colonial India anecdote: the British offered a bounty for dead cobras to reduce their numbers. Locals started breeding cobras for profit. When the program was cancelled, captive cobras were released — and the population surged.",

  render(ctx) {
    const { palette: p } = ctx;

    // Central circle
    const cx = 600, cy = 390, cr = 68;
    const center = `
    <circle cx="${cx}" cy="${cy}" r="${cr}"
            fill="${p.gold}" fill-opacity="0.10"
            stroke="${p.gold}" stroke-width="2" opacity="0.65"/>
    <text x="${cx}" y="${cy - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.75">INCENTIVE</text>
    <text x="${cx}" y="${cy + 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.gold}" opacity="0.55">/</text>
    <text x="${cx}" y="${cy + 28}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1" fill="${p.gold}" opacity="0.65">MEASURE</text>`;

    // Left branch: intended effect (dashed, muted)
    const lx = 290, ly = 650;
    const leftLine = `
    <line x1="${cx - cr - 4}" y1="${cy + 20}" x2="${lx + 80}" y2="${ly - 40}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28" stroke-dasharray="5 3"/>
    <rect x="${lx - 95}" y="${ly - 30}" width="250" height="110" rx="10"
          fill="${p.muted}" fill-opacity="0.04" stroke="${p.muted}" stroke-width="1.5"
          opacity="0.28" stroke-dasharray="5 3"/>
    <text x="${lx}" y="${ly + 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">INTENDED EFFECT</text>
    <text x="${lx}" y="${ly + 34}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.30">↓ problem reduced</text>
    <text x="${lx}" y="${ly + 55}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.muted}" opacity="0.22">(hoped for)</text>`;

    // Right branch: real effect (solid, gold)
    const rx2 = 870, ry2 = 650;
    const rightLine = `
    <line x1="${cx + cr + 4}" y1="${cy + 20}" x2="${rx2 - 80}" y2="${ry2 - 40}"
          stroke="${p.gold}" stroke-width="2" opacity="0.60"/>
    <polygon points="${rx2 - 84},${ry2 - 32} ${rx2 - 74},${ry2 - 48} ${rx2 - 68},${ry2 - 34}"
             fill="${p.gold}" opacity="0.60"/>
    <rect x="${rx2 - 120}" y="${ry2 - 30}" width="250" height="110" rx="10"
          fill="${p.gold}" fill-opacity="0.08" stroke="${p.gold}" stroke-width="2" opacity="0.60"/>
    <text x="${rx2}" y="${ry2 + 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.80">ACTUAL EFFECT</text>
    <text x="${rx2}" y="${ry2 + 34}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          fill="${p.gold}" opacity="0.65">↑ problem amplified</text>
    <text x="${rx2}" y="${ry2 + 55}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.gold}" opacity="0.45">(perverse incentive)</text>`;

    // Feedback arc from right branch back to center
    const feedback = `
    <path d="M ${rx2} ${ry2 + 82} C ${rx2 + 80} ${ry2 + 150} ${cx + 150} ${cy + 200} ${cx + cr - 10} ${cy + 55}"
          fill="none" stroke="${p.gold}" stroke-width="1.5" opacity="0.35" stroke-dasharray="4 4"/>
    <polygon points="${cx + cr - 16},${cy + 48} ${cx + cr + 2},${cy + 62} ${cx + cr + 8},${cy + 44}"
             fill="${p.gold}" opacity="0.35"/>`;

    // Example note
    const note = `
    <text x="600" y="848" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.30">Ex: bounty for cobras → locals breed cobras → population explodes.</text>`;

    return center + leftLine + rightLine + feedback + note;
  },
};
