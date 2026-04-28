module.exports = {
  id:          'lotus-culture-apprenante-en',
  title:       'Learning Culture Lotus',
  category:    'Management & Organisations',
  tagline:     'Learn continuously, at every level.',
  description: 'The Lotus (or Mandala) model structures the development of a learning culture: a central concept surrounded by 8 key dimensions.',

  render(ctx) {
    const { cx, cy, palette: p } = ctx;

    const SIZE   = 260;
    const GAP    = 4;
    const COLS   = 3;
    const totalW = COLS * SIZE + (COLS - 1) * GAP;
    const totalH = COLS * SIZE + (COLS - 1) * GAP;
    const gx     = cx - totalW / 2;
    const gy     = cy - totalH / 2 - 10;

    const labels = [
      'Knowledge Sharing',  'Systemic Curiosity',  'Long-term Vision',
      'Continuous Feedback', 'LEARNING\nCULTURE',  'Right to Fail',
      'Experimentation Time', 'Role Modeling',      'Cross-Learning',
    ];

    const cells = labels.map((text, i) => {
      const isCenter    = i === 4;
      const displayText = isCenter ? 'LEARNING' : text;
      const subText     = isCenter ? 'CULTURE'  : '';

      return {
        bg:         isCenter ? p.gold    : 'transparent',
        stroke:     isCenter ? p.gold    : p.gold,
        sw:         isCenter ? 0         : 1.5,
        text:       displayText,
        sub:        subText,
        textColor:  isCenter ? p.bg      : p.text,
        subColor:   isCenter ? p.bg      : p.muted,
        fontWeight: isCenter ? 700       : 400,
      };
    });

    let svg = '';
    for (let row = 0; row < COLS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx    = row * COLS + col;
        const cell   = cells[idx] || {};
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
          const words  = cell.text.split(' ');
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
          const startY     = textY - totalTextH / 2 + lineH / 2;
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
