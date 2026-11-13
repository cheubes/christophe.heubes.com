const { grid } = require('../templates/shapes/grid');

module.exports = {
  id:          'lotus-culture-apprenante',
  title:       'Lotus de la Culture Apprenante',
  category:    'Management & Organisations',
  tagline:     'Apprendre en continu, à tous les niveaux.',
  description: 'Le modèle Lotus (ou Mandala) structure le développement d\'une culture apprenante : un concept central entouré de 8 dimensions clés.',

  render(ctx) {
    const { cx, cy, palette: p } = ctx;

    const SIZE   = 260;  // size of each cell
    const GAP    = 4;    // gap between cells
    const COLS   = 3;
    const totalW = COLS * SIZE + (COLS - 1) * GAP;
    const totalH = COLS * SIZE + (COLS - 1) * GAP;
    const gx     = cx - totalW / 2;
    const gy     = cy - totalH / 2 - 10;

    // Labels for the 8 dimensions + centre
    const labels = [
      'Partage du Savoir',     'Curiosité Systémique',  'Vision Long Terme',
      'Feedback Continu',      'CULTURE\nAPPRENANTE',   'Droit à l\'Erreur',
      'Temps d\'Expérimentation', 'Exemplarité',         'Apprentissage Croisé',
    ];

    const cells = labels.map((text, i) => {
      const isCenter = i === 4;
      // Handle line breaks in the centre label
      const displayText = isCenter ? 'CULTURE' : text;
      const subText = isCenter ? 'APPRENANTE' : '';

      return {
        bg:          isCenter ? p.gold    : 'transparent',
        stroke:      isCenter ? p.gold    : p.gold,
        sw:          isCenter ? 0         : 1.5,
        text:        displayText,
        sub:         subText,
        textColor:   isCenter ? p.bg      : p.text,
        subColor:    isCenter ? p.bg      : p.muted,
        fontWeight:  isCenter ? 700       : 400,
      };
    });

    // Adjust coordinates to account for the gap
    let svg = '';
    for (let row = 0; row < COLS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col;
        const cell = cells[idx] || {};
        const isCenter = idx === 4;

        const cx2 = gx + col * (SIZE + GAP);
        const cy2 = gy + row * (SIZE + GAP);

        svg += `<rect x="${cx2}" y="${cy2}" width="${SIZE}" height="${SIZE}"
                fill="${cell.bg}" stroke="${cell.stroke}" stroke-width="${cell.sw}"/>`;

        const textX = cx2 + SIZE / 2;
        const textY = cy2 + SIZE / 2;

        if (isCenter) {
          svg += `
          <text x="${textX}" y="${textY - 16}" text-anchor="middle"
                font-family="Ubuntu, sans-serif" font-weight="700" font-size="26"
                fill="${cell.textColor}">${cell.text}</text>
          <text x="${textX}" y="${textY + 18}" text-anchor="middle"
                font-family="Ubuntu, sans-serif" font-weight="700" font-size="26"
                fill="${cell.textColor}">${cell.sub}</text>`;
        } else {
          // Multiline text: split on spaces to centre
          const words = cell.text.split(' ');
          const lineH  = 26;
          const lines  = [];
          let cur = '';
          for (const w of words) {
            const test = cur ? `${cur} ${w}` : w;
            if (test.length > 16 && cur) {
              lines.push(cur); cur = w;
            } else {
              cur = test;
            }
          }
          if (cur) lines.push(cur);

          const totalTextH = lines.length * lineH;
          const startY = textY - totalTextH / 2 + lineH / 2;
          for (let l = 0; l < lines.length; l++) {
            svg += `<text x="${textX}" y="${startY + l * lineH}" text-anchor="middle"
                    font-family="Ubuntu, sans-serif" font-weight="400" font-size="22"
                    fill="${cell.textColor}">${lines[l]}</text>`;
          }
        }
      }
    }
    return svg;
  },
};
