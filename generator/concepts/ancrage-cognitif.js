'use strict';

module.exports = {
  id:          'ancrage-cognitif',
  title:       'Ancrage cognitif',
  category:    'Biais & Heuristiques',
  tagline:     "Le premier chiffre entendu distord tous les suivants.",
  description: "Biais cognitif par lequel la première information reçue (l'ancre) influence de façon disproportionnée les estimations et jugements ultérieurs.",

  render(ctx) {
    const { palette: p } = ctx;

    const toX = v => 165 + v * 870 / 1000;
    const axYA = 390, axYB = 660;

    const makeAxis = (y) => {
      let ticks = '';
      for (const v of [0, 200, 400, 600, 800, 1000]) {
        ticks += `
        <line x1="${toX(v)}" y1="${y - 5}" x2="${toX(v)}" y2="${y + 5}"
              stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>
        <text x="${toX(v)}" y="${y + 20}" text-anchor="middle"
              font-family="Ubuntu, sans-serif" font-size="11"
              fill="${p.muted}" opacity="0.30">${v}</text>`;
      }
      return `<line x1="165" y1="${y}" x2="1035" y2="${y}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.25"/>` + ticks;
    };

    // Scenario A: low anchor 80, estimate pulled to 160
    const anchA = 80, estA = 165;
    const xAnchA = toX(anchA), xEstA = toX(estA);

    const scenarioA = `
    <text x="600" y="240" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">SCÉNARIO A — ANCRE BASSE</text>
    <line x1="${xAnchA}" y1="${axYA - 80}" x2="${xAnchA}" y2="${axYA}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.35" stroke-dasharray="4 3"/>
    <polygon points="${xAnchA - 8},${axYA - 80} ${xAnchA + 8},${axYA - 80} ${xAnchA},${axYA - 64}"
             fill="${p.muted}" opacity="0.50"/>
    <text x="${xAnchA}" y="${axYA - 88}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="20"
          fill="${p.muted}" opacity="0.65">ANCRE : ${anchA}</text>
    <line x1="${xAnchA}" y1="${axYA}" x2="${xEstA - 12}" y2="${axYA}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.20" stroke-dasharray="3 3"/>
    <polygon points="${xEstA - 12},${axYA - 5} ${xEstA - 12},${axYA + 5} ${xEstA},${axYA}"
             fill="${p.muted}" opacity="0.30"/>
    <circle cx="${xEstA}" cy="${axYA}" r="14"
            fill="${p.muted}" fill-opacity="0.35" stroke="${p.muted}" stroke-width="2" opacity="0.60"/>
    <text x="${xEstA}" y="${axYA + 40}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.muted}" opacity="0.60">ESTIMATION : ${estA}</text>`;

    // Scenario B: high anchor 920, estimate pulled to 840
    const anchB = 920, estB = 840;
    const xAnchB = toX(anchB), xEstB = toX(estB);

    const scenarioB = `
    <text x="600" y="510" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="2" fill="${p.gold}" opacity="0.50">SCÉNARIO B — ANCRE HAUTE</text>
    <line x1="${xAnchB}" y1="${axYB + 80}" x2="${xAnchB}" y2="${axYB}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.45" stroke-dasharray="4 3"/>
    <polygon points="${xAnchB - 8},${axYB + 80} ${xAnchB + 8},${axYB + 80} ${xAnchB},${axYB + 64}"
             fill="${p.gold}" opacity="0.65"/>
    <text x="${xAnchB}" y="${axYB + 100}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="20"
          fill="${p.gold}" opacity="0.70">ANCRE : ${anchB}</text>
    <line x1="${xEstB + 12}" y1="${axYB}" x2="${xAnchB - 16}" y2="${axYB}"
          stroke="${p.gold}" stroke-width="1.5" opacity="0.25" stroke-dasharray="3 3"/>
    <polygon points="${xEstB + 12},${axYB - 5} ${xEstB + 12},${axYB + 5} ${xEstB},${axYB}"
             fill="${p.gold}" opacity="0.40"/>
    <circle cx="${xEstB}" cy="${axYB}" r="14"
            fill="${p.gold}" fill-opacity="0.40" stroke="${p.gold}" stroke-width="2" opacity="0.72"/>
    <text x="${xEstB}" y="${axYB - 26}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.gold}" opacity="0.65">ESTIMATION : ${estB}</text>`;

    // Shared "true value" reference
    const tv = 500, xTV = toX(tv);
    const trueRef = `
    <line x1="${xTV}" y1="${axYA - 40}" x2="${xTV}" y2="${axYB + 40}"
          stroke="${p.muted}" stroke-width="1" opacity="0.15" stroke-dasharray="3 5"/>
    <text x="${xTV}" y="${(axYA + axYB) / 2 + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.28">VALEUR RÉELLE ?</text>`;

    return makeAxis(axYA) + makeAxis(axYB) + trueRef + scenarioA + scenarioB;
  },
};
