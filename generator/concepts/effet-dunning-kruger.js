module.exports = {
  id:          'effet-dunning-kruger',
  title:       'Effet Dunning-Kruger',
  category:    'Psychologie & Comportement',
  tagline:     "Plus on en sait peu, plus on croit tout savoir.",
  description: "Biais cognitif décrit par Dunning et Kruger en 1999 : les personnes peu compétentes surestiment leurs capacités, tandis que les experts tendent à les sous-estimer.",

  render(ctx) {
    const { palette: p } = ctx;

    const cL = 200, cR = 1040, cT = 220, cB = 840;
    const peakX = 400, peakY = 275;
    const valleyX = 660, valleyY = 760;
    const expertX = cR, expertY = 445;

    // ── Axes ───────────────────────────────────────────────────────────────
    const axes = `
    <line x1="${cL}" y1="${cB}" x2="${cR + 12}" y2="${cB}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <polygon points="${cR + 12},${cB - 6} ${cR + 24},${cB} ${cR + 12},${cB + 6}"
             fill="${p.muted}" opacity="0.28"/>
    <line x1="${cL}" y1="${cB}" x2="${cL}" y2="${cT - 12}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <polygon points="${cL - 6},${cT - 12} ${cL},${cT - 24} ${cL + 6},${cT - 12}"
             fill="${p.muted}" opacity="0.28"/>`;

    // ── Axis labels ────────────────────────────────────────────────────────
    const axisLabels = `
    <text x="${(cL + cR) / 2}" y="${cB + 40}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">EXPÉRIENCE &amp; COMPÉTENCE</text>
    <text transform="translate(${cL - 32}, ${(cT + cB) / 2}) rotate(-90)"
          text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.45">CONFIANCE</text>`;

    // ── Phase dividers (dashed verticals at peak & valley) ────────────────
    const dividers = `
    <line x1="${peakX}" y1="${peakY + 10}" x2="${peakX}" y2="${cB}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="4 7" opacity="0.14"/>
    <line x1="${valleyX}" y1="${valleyY + 10}" x2="${valleyX}" y2="${cB}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="4 7" opacity="0.14"/>`;

    // ── Subtle area under curve ────────────────────────────────────────────
    const area = `
    <path d="M ${cL},700 C 280,700 338,${peakY} ${peakX},${peakY}
             C 462,${peakY} 512,${valleyY} ${valleyX},${valleyY}
             C 810,${valleyY} 878,${expertY} ${expertX},${expertY}
             L ${expertX},${cB} L ${cL},${cB} Z"
          fill="${p.gold}" fill-opacity="0.04"/>`;

    // ── Curve ──────────────────────────────────────────────────────────────
    const curve = `
    <path d="M ${cL},700 C 280,700 338,${peakY} ${peakX},${peakY}
             C 462,${peakY} 512,${valleyY} ${valleyX},${valleyY}
             C 810,${valleyY} 878,${expertY} ${expertX},${expertY}"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.90"
          stroke-linejoin="round" stroke-linecap="round"/>`;

    // ── Key point markers ─────────────────────────────────────────────────
    const markers = `
    <circle cx="${cL}" cy="700" r="4" fill="${p.gold}" opacity="0.55"/>
    <circle cx="${peakX}" cy="${peakY}" r="6" fill="${p.gold}" opacity="0.92"/>
    <circle cx="${valleyX}" cy="${valleyY}" r="6" fill="${p.muted}" opacity="0.70"/>
    <circle cx="${expertX}" cy="${expertY}" r="6" fill="${p.gold}" opacity="0.92"/>`;

    // ── Peak annotation ───────────────────────────────────────────────────
    //   Leader from peak toward upper-right; label below the leader tip
    const peakLabel = `
    <line x1="${peakX + 6}" y1="${peakY - 4}" x2="${peakX + 38}" y2="${peakY - 36}"
          stroke="${p.gold}" stroke-width="1" opacity="0.50"/>
    <text x="${peakX + 44}" y="${peakY - 44}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.88">MONT DE LA STUPIDITÉ</text>`;

    // ── Valley annotation ─────────────────────────────────────────────────
    const valleyLabel = `
    <line x1="${valleyX}" y1="${valleyY + 7}" x2="${valleyX}" y2="${valleyY + 34}"
          stroke="${p.muted}" stroke-width="1" opacity="0.45"/>
    <text x="${valleyX}" y="${valleyY + 52}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.muted}" opacity="0.75">VALLÉE DU DÉSESPOIR</text>`;

    // ── Expert annotation ─────────────────────────────────────────────────
    const expertLabel = `
    <line x1="${expertX - 7}" y1="${expertY - 4}" x2="${expertX - 42}" y2="${expertY - 36}"
          stroke="${p.gold}" stroke-width="1" opacity="0.50"/>
    <text x="${expertX - 48}" y="${expertY - 44}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.88">MAÎTRISE</text>`;

    // ── Phase labels along bottom ─────────────────────────────────────────
    const p1x = (cL + peakX) / 2;    // 300
    const p2x = (peakX + valleyX) / 2; // 530
    const p3x = (valleyX + expertX) / 2; // 850
    const phaseY = cB + 65;

    const phaseLabels = `
    <text x="${p1x}" y="${phaseY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.35">IGNORANCE</text>
    <text x="${p2x}" y="${phaseY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.35">PRISE DE CONSCIENCE</text>
    <text x="${p3x}" y="${phaseY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.35">EXPERTISE PROGRESSIVE</text>`;

    return axes + axisLabels + dividers + area + curve + markers
         + peakLabel + valleyLabel + expertLabel + phaseLabels;
  },
};
