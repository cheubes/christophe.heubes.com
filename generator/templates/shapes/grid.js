/**
 * Grille N×N de cellules rectangulaires.
 */
function grid({ x, y, w, h, cols, rows, cells = [], strokeColor = '#C9A84C', strokeWidth = 2, fontSize = 22 }) {
  const cellW = w / cols;
  const cellH = h / rows;
  let svg = '';

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = x + col * cellW;
      const cy = y + row * cellH;
      const idx = row * cols + col;
      const cell = cells[idx] || {};

      const bgFill  = cell.bg    || 'none';
      const stroke  = cell.stroke || strokeColor;
      const sw      = cell.sw    || strokeWidth;
      const text    = cell.text  || '';
      const sub     = cell.sub   || '';
      const textCol = cell.textColor || '#F0EDE4';
      const subCol  = cell.subColor  || '#8A9BB0';
      const fw      = cell.fontWeight || 400;

      svg += `<rect x="${cx}" y="${cy}" width="${cellW}" height="${cellH}"
              fill="${bgFill}" stroke="${stroke}" stroke-width="${sw}"/>`;

      if (text) {
        svg += `<text x="${cx + cellW / 2}" y="${cy + cellH / 2 - (sub ? 14 : 0)}"
                text-anchor="middle" dominant-baseline="middle"
                font-family="Ubuntu, sans-serif" font-weight="${fw}" font-size="${fontSize}"
                fill="${textCol}">${text}</text>`;
      }
      if (sub) {
        svg += `<text x="${cx + cellW / 2}" y="${cy + cellH / 2 + 18}"
                text-anchor="middle" dominant-baseline="middle"
                font-family="Ubuntu, sans-serif" font-weight="400" font-size="${Math.round(fontSize * 0.75)}"
                fill="${subCol}">${sub}</text>`;
      }
    }
  }
  return svg;
}

module.exports = { grid };
