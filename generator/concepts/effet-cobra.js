'use strict';

module.exports = {
  id:          'effet-cobra',
  title:       'Effet cobra',
  category:    'Économie & Incitations',
  tagline:     "Une solution mal conçue aggrave le problème qu'elle cherche à résoudre.",
  description: "Phénomène dans lequel une mesure incitative produit exactement l'effet inverse de celui recherché, en raison d'une mauvaise anticipation des comportements adaptatifs.",

  render(ctx) {
    const { palette: p } = ctx;

    // Central node: INCITATION / MESURE
    const cx = 600, cy = 390, cr = 68;
    const central = `
    <circle cx="${cx}" cy="${cy}" r="${cr}"
            fill="${p.gold}" fill-opacity="0.10" stroke="${p.gold}" stroke-width="2" opacity="0.65"/>
    <text x="${cx}" y="${cy - 8}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1" fill="${p.gold}" opacity="0.80">INCITATION</text>
    <text x="${cx}" y="${cy + 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.gold}" opacity="0.60">/ MESURE</text>`;

    // Left branch: EFFET VOULU (down, muted, dashed) → PROBLÈME RÉDUIT
    const lx = 290, ly = 650;
    const leftArrow = `
    <line x1="${cx - cr - 8}" y1="${cy + 35}" x2="${lx + 14}" y2="${ly - 14}"
          stroke="${p.muted}" stroke-width="2" opacity="0.35" stroke-dasharray="6 4"/>
    <polygon points="${lx + 4},${ly - 4} ${lx + 24},${ly - 4} ${lx + 14},${ly + 10}"
             fill="${p.muted}" opacity="0.35"/>`;

    const leftBox = `
    <rect x="${lx - 95}" y="${ly + 10}" width="210" height="80" rx="10"
          fill="${p.muted}" fill-opacity="0.06" stroke="${p.muted}" stroke-width="1.5" opacity="0.35"/>
    <text x="${lx + 10}" y="${ly + 52}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">EFFET VOULU</text>
    <text x="${lx + 10}" y="${ly + 74}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.32">↓ problème réduit</text>`;

    // Right branch: EFFET RÉEL (solid, gold) → PROBLÈME AMPLIFIÉ
    const rx2 = 870, ry2 = 650;
    const rightArrow = `
    <line x1="${cx + cr + 8}" y1="${cy + 35}" x2="${rx2 - 14}" y2="${ry2 - 14}"
          stroke="${p.gold}" stroke-width="2.5" opacity="0.65"/>
    <polygon points="${rx2 - 4},${ry2 - 4} ${rx2 - 24},${ry2 - 4} ${rx2 - 14},${ry2 + 10}"
             fill="${p.gold}" opacity="0.65"/>`;

    const rightBox = `
    <rect x="${rx2 - 115}" y="${ry2 + 10}" width="230" height="80" rx="10"
          fill="${p.gold}" fill-opacity="0.08" stroke="${p.gold}" stroke-width="2" opacity="0.60"/>
    <text x="${rx2 + 0}" y="${ry2 + 52}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.gold}" opacity="0.72">EFFET RÉEL</text>
    <text x="${rx2 + 0}" y="${ry2 + 74}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.gold}" opacity="0.50">↑ problème amplifié</text>`;

    // Feedback arc: problem loops back to reinforce the perverse situation
    const arc = `
    <path d="M ${rx2 + 50},${ry2 + 50} C ${rx2 + 120},${ry2 + 120} ${cx + 50},${ry2 + 160} ${cx + 25},${cy + 70}"
          fill="none" stroke="${p.gold}" stroke-width="1.5" opacity="0.28" stroke-dasharray="5 4"/>
    <polygon points="${cx + 18},${cy + 57} ${cx + 32},${cy + 57} ${cx + 25},${ cy + 72}"
             fill="${p.gold}" opacity="0.28"/>`;

    // Example anecdote at bottom
    const example = `
    <text x="600" y="848" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1" fill="${p.muted}" opacity="0.32">Ex. : prime pour cobras tués → élevage de cobras → plus de cobras</text>`;

    // Top label: PROBLÈME INITIAL
    const topLabel = `
    <text x="${cx}" y="275" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">PROBLÈME INITIAL</text>
    <line x1="${cx}" y1="285" x2="${cx}" y2="${cy - cr - 4}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>
    <polygon points="${cx - 6},${cy - cr - 4} ${cx + 6},${cy - cr - 4} ${cx},${cy - cr + 8}"
             fill="${p.muted}" opacity="0.25"/>`;

    return topLabel + central + leftArrow + leftBox + rightArrow + rightBox + arc + example;
  },
};
