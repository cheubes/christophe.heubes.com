'use strict';

module.exports = {
  id:          'principe-peter',
  title:       'Principe de Peter',
  category:    'Management & Organisations',
  tagline:     "Dans une hiérarchie, chacun s'élève jusqu'à son niveau d'incompétence.",
  description: "Principe formulé par Laurence J. Peter (1969) : dans toute organisation, un individu compétent est promu jusqu'au poste où il devient incompétent — et y reste.",

  render(ctx) {
    const { palette: p } = ctx;

    const levels = [
      { label: 'POSTE D', sublabel: 'niveau d\'incompétence',  competent: false, y: 235 },
      { label: 'POSTE C', sublabel: 'compétent → promu',        competent: true,  y: 390 },
      { label: 'POSTE B', sublabel: 'compétent → promu',        competent: true,  y: 545 },
      { label: 'POSTE A', sublabel: 'compétent → promu',        competent: true,  y: 700 },
    ];

    const lx = 250, lw = 500, lh = 110, rx = 10;

    let floors = '';
    for (const lv of levels) {
      const col    = lv.competent ? p.gold  : p.muted;
      const fillOp = lv.competent ? '0.08'  : '0.05';
      const stOp   = lv.competent ? '0.65'  : '0.38';
      const dashes = lv.competent ? ''       : 'stroke-dasharray="5 4"';

      floors += `
      <rect x="${lx}" y="${lv.y}" width="${lw}" height="${lh}" rx="${rx}"
            fill="${col}" fill-opacity="${fillOp}"
            stroke="${col}" stroke-width="2" opacity="${stOp}" ${dashes}/>
      <text x="${lx + lw / 2}" y="${lv.y + 44}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
            letter-spacing="2" fill="${col}" opacity="${lv.competent ? '0.80' : '0.45'}">${lv.label}</text>
      <text x="${lx + lw / 2}" y="${lv.y + 70}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
            letter-spacing="1" fill="${col}" opacity="${lv.competent ? '0.45' : '0.30'}">${lv.sublabel}</text>`;

      // Competence indicator
      const indX = lx + lw + 30, indY = lv.y + lh / 2;
      if (lv.competent) {
        floors += `
        <text x="${indX}" y="${indY + 8}" text-anchor="start"
              font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
              fill="${p.gold}" opacity="0.65">✓</text>`;
      } else {
        floors += `
        <text x="${indX}" y="${indY + 8}" text-anchor="start"
              font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
              fill="${p.muted}" opacity="0.45">✗</text>
        <text x="${indX + 35}" y="${indY + 8}" text-anchor="start"
              font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
              letter-spacing="1" fill="${p.muted}" opacity="0.38">BLOQUÉ</text>`;
      }
    }

    // Promotion arrows between floors
    const arrowX = lx - 40;
    for (let i = 1; i < levels.length; i++) {
      const topY  = levels[i - 1].y + levels[i - 1].h;
      const botY  = levels[i].y;
      const midY  = (levels[i - 1].y + lh + levels[i].y) / 2;

      floors += `
      <line x1="${arrowX}" y1="${levels[i].y + lh / 2}" x2="${arrowX}" y2="${levels[i - 1].y + lh / 2 + 14}"
            stroke="${p.gold}" stroke-width="2" opacity="0.45"/>
      <polygon points="${arrowX - 7},${levels[i - 1].y + lh / 2 + 14} ${arrowX + 7},${levels[i - 1].y + lh / 2 + 14} ${arrowX},${levels[i - 1].y + lh / 2}"
               fill="${p.gold}" opacity="0.45"/>`;
    }

    // "PROMOTION" label on arrow
    floors += `
    <text x="${arrowX - 12}" y="${(levels[0].y + levels[3].y + lh) / 2 + 6}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.40"
          transform="rotate(-90, ${arrowX - 12}, ${(levels[0].y + levels[3].y + lh) / 2 + 6})">PROMOTIONS</text>`;

    // Bottom caption
    const caption = `
    <text x="600" y="855" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">La compétence dans un rôle mène à un rôle différent.</text>`;

    return floors + caption;
  },
};
