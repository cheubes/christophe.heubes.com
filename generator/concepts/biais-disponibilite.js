'use strict';

module.exports = {
  id:          'biais-disponibilite',
  title:       'Biais de disponibilité',
  category:    'Biais & Heuristiques',
  tagline:     "On juge probable ce qui vient facilement à l'esprit.",
  description: "Heuristique décrite par Kahneman et Tversky (1973) : on évalue la probabilité d'un événement selon la facilité avec laquelle des exemples nous viennent à l'esprit — pas selon les statistiques réelles.",

  render(ctx) {
    const { palette: p } = ctx;

    const bx = 460, maxW = 490, barH = 30, innerGap = 14, exGap = 90;

    // Column headers
    const headers = `
    <text x="260" y="240" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.40">EXEMPLE</text>
    <rect x="${bx}" y="220" width="16" height="12" rx="2"
          fill="${p.gold}" fill-opacity="0.30" stroke="${p.gold}" opacity="0.55"/>
    <text x="${bx + 24}" y="231" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.60">RISQUE PERÇU</text>
    <rect x="${bx + 180}" y="220" width="16" height="12" rx="2"
          fill="${p.muted}" fill-opacity="0.22" stroke="${p.muted}" opacity="0.40"/>
    <text x="${bx + 204}" y="231" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.45">RISQUE RÉEL</text>`;

    const examples = [
      { label: 'Crash d\'avion',      perceived: 0.78, real: 0.07 },
      { label: 'Attaque de requin',   perceived: 0.62, real: 0.01 },
      { label: 'Accident de voiture', perceived: 0.32, real: 0.90 },
    ];

    let bars = '';
    let y = 290;
    for (const ex of examples) {
      const pw = Math.round(maxW * ex.perceived);
      const rw = Math.round(maxW * ex.real);
      const midY = y + barH + innerGap / 2;

      bars += `
      <text x="${bx - 16}" y="${midY + 5}" text-anchor="end"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
            fill="${p.muted}" opacity="0.55">${ex.label}</text>
      <rect x="${bx}" y="${y}" width="${pw}" height="${barH}" rx="4"
            fill="${p.gold}" fill-opacity="0.22" stroke="${p.gold}" stroke-width="1" opacity="0.55"/>
      <rect x="${bx}" y="${y + barH + innerGap}" width="${rw}" height="${barH}" rx="4"
            fill="${p.muted}" fill-opacity="0.18" stroke="${p.muted}" stroke-width="1" opacity="0.38"/>`;

      y += barH * 2 + innerGap + exGap;
    }

    // Insight note for car accident (counterexample)
    const noteY = y - exGap + 18;
    const note = `
    <text x="${bx}" y="${noteY}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          font-style="italic" fill="${p.muted}" opacity="0.30">← les accidents de voiture sont sous-estimés car moins saillants</text>`;

    const caption = `
    <text x="600" y="858" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">Ce qui est mémorable n'est pas ce qui est probable.</text>`;

    return headers + bars + note + caption;
  },
};
