/**
 * Capsule médicale (rectangle à coins arrondis + ligne centrale).
 */
function pill({ cx, cy, w = 80, h = 40, color = '#C9A84C', strokeWidth = 3, fill = 'none' }) {
  const rx = h / 2;
  const x  = cx - w / 2;
  const y  = cy - h / 2;
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" ry="${rx}"
        fill="${fill}" stroke="${color}" stroke-width="${strokeWidth}"/>
  <line x1="${cx}" y1="${y + 4}" x2="${cx}" y2="${y + h - 4}"
        stroke="${color}" stroke-width="${strokeWidth - 1}" opacity="0.6"/>
  `;
}

module.exports = { pill };
