'use strict';

module.exports = {
  id:          'rasoir-ockham',
  title:       "Rasoir d'Ockham",
  category:    'Épistémologie',
  tagline:     "Entre deux explications équivalentes, choisir la plus simple.",
  description: "Principe de parcimonie attribué à Guillaume d'Ockham : à résultat égal, l'explication nécessitant le moins d'hypothèses doit être préférée.",

  render(ctx) {
    const { palette: p } = ctx;

    const ty = 350, by = 640, r = 28;

    // Top row: 4 hypotheses (muted, complex)
    const topXs = [210, 400, 580, 760, 950];
    let topNodes = '';
    for (let i = 0; i < topXs.length; i++) {
      const x = topXs[i], isFact = i === topXs.length - 1;
      const col = isFact ? p.gold : p.muted;
      const op  = isFact ? '0.60' : '0.38';
      topNodes += `
      <circle cx="${x}" cy="${ty}" r="${r}"
              fill="${col}" fill-opacity="0.07" stroke="${col}" stroke-width="1.8" opacity="${op}"/>
      <text x="${x}" y="${ty + 6}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
            fill="${col}" opacity="${op}">${isFact ? 'FAIT' : 'H' + (i + 1)}</text>`;
    }
    for (let i = 0; i < topXs.length - 1; i++) {
      const ax = topXs[i] + r + 2, bx = topXs[i + 1] - r - 10;
      topNodes += `
      <line x1="${ax}" y1="${ty}" x2="${bx}" y2="${ty}"
            stroke="${p.muted}" stroke-width="1.5" opacity="0.22"/>
      <polygon points="${bx},${ty - 5} ${bx},${ty + 5} ${bx + 10},${ty}"
               fill="${p.muted}" opacity="0.22"/>`;
    }
    topNodes += `
    <text x="575" y="${ty - r - 18}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.38">4 HYPOTHÈSES — COMPLEXE</text>`;

    // X marks on superfluous nodes H2, H3, H4
    let xMarks = '';
    for (const x of [400, 580, 760]) {
      const s = 13;
      xMarks += `
      <line x1="${x - s}" y1="${ty - s}" x2="${x + s}" y2="${ty + s}"
            stroke="${p.muted}" stroke-width="2.5" opacity="0.28"/>
      <line x1="${x + s}" y1="${ty - s}" x2="${x - s}" y2="${ty + s}"
            stroke="${p.muted}" stroke-width="2.5" opacity="0.28"/>`;
    }

    // Razor line across superfluous nodes
    const razor = `
    <line x1="355" y1="${ty - 90}" x2="810" y2="${ty + 90}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.22" stroke-dasharray="7 4"/>
    <text x="390" y="${ty - 96}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="2" fill="${p.gold}" opacity="0.35">RASOIR</text>`;

    // Bottom row: 1 hypothesis (gold, simple)
    const botXs = [210, 950];
    let botNodes = '';
    for (let i = 0; i < botXs.length; i++) {
      const x = botXs[i];
      botNodes += `
      <circle cx="${x}" cy="${by}" r="${r + 2}"
              fill="${p.gold}" fill-opacity="0.10" stroke="${p.gold}" stroke-width="2" opacity="0.72"/>
      <text x="${x}" y="${by + 6}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
            fill="${p.gold}" opacity="0.80">${i === 0 ? 'H₁' : 'FAIT'}</text>`;
    }
    const ax2 = botXs[0] + r + 5, bx2 = botXs[1] - r - 12;
    botNodes += `
    <line x1="${ax2}" y1="${by}" x2="${bx2}" y2="${by}"
          stroke="${p.gold}" stroke-width="2.5" opacity="0.65"/>
    <polygon points="${bx2},${by - 6} ${bx2},${by + 6} ${bx2 + 12},${by}"
             fill="${p.gold}" opacity="0.65"/>
    <text x="575" y="${by + r + 26}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.60">1 HYPOTHÈSE — SIMPLE — PRÉFÉRÉE</text>`;

    // Middle label
    const mid = `
    <text x="950" y="${(ty + by) / 2 - 8}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.30">MÊME</text>
    <text x="950" y="${(ty + by) / 2 + 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.30">RÉSULTAT</text>`;

    return topNodes + razor + xMarks + botNodes + mid;
  },
};
