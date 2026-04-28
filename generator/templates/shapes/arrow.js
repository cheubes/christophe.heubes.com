/**
 * Flèche directionnelle entre deux points.
 */
function arrow({ x1, y1, x2, y2, color = '#C9A84C', strokeWidth = 3, id = 'arr' }) {
  const markerId = `arrow-${id}`;
  return `
  <defs>
    <marker id="${markerId}" markerWidth="10" markerHeight="7"
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${color}"/>
    </marker>
  </defs>
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
        stroke="${color}" stroke-width="${strokeWidth}"
        marker-end="url(#${markerId})"/>
  `;
}

/**
 * Flèche courbe (arc SVG) entre deux points.
 */
function curvedArrow({ x1, y1, x2, y2, sweep = 1, color = '#C9A84C', strokeWidth = 3, id = 'carrow' }) {
  const markerId = `carrow-${id}`;
  const rx = Math.abs(x2 - x1) * 0.6;
  const ry = Math.abs(y2 - y1) * 0.6;
  return `
  <defs>
    <marker id="${markerId}" markerWidth="10" markerHeight="7"
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${color}"/>
    </marker>
  </defs>
  <path d="M ${x1} ${y1} A ${rx} ${ry} 0 0 ${sweep} ${x2} ${y2}"
        stroke="${color}" stroke-width="${strokeWidth}" fill="none"
        marker-end="url(#${markerId})"/>
  `;
}

module.exports = { arrow, curvedArrow };
