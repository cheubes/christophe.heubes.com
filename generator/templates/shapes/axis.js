/**
 * Axes XY avec flèches et labels.
 * @param {object} opts
 *   x, y         : origine des axes
 *   xLen, yLen   : longueur des axes
 *   xLabel       : label axe X
 *   yLabel       : label axe Y
 *   color        : couleur (défaut muted)
 */
function axis({ x, y, xLen, yLen, xLabel = '', yLabel = '', color = '#8A9BB0' }) {
  const aw = 10; // taille flèche
  return `
  <defs>
    <marker id="arrowhead-${color.replace('#','')}" markerWidth="10" markerHeight="7"
            refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${color}"/>
    </marker>
  </defs>
  <!-- Axe X -->
  <line x1="${x}" y1="${y}" x2="${x + xLen}" y2="${y}"
        stroke="${color}" stroke-width="2"
        marker-end="url(#arrowhead-${color.replace('#','')})"/>
  <!-- Axe Y -->
  <line x1="${x}" y1="${y}" x2="${x}" y2="${y - yLen}"
        stroke="${color}" stroke-width="2"
        marker-end="url(#arrowhead-${color.replace('#','')})"/>
  <!-- Label X -->
  ${xLabel ? `<text x="${x + xLen + 10}" y="${y + 6}"
        font-family="Ubuntu, sans-serif" font-weight="500" font-size="24"
        fill="${color}">${xLabel}</text>` : ''}
  <!-- Label Y -->
  ${yLabel ? `<text x="${x - 10}" y="${y - yLen - 10}" text-anchor="end"
        font-family="Ubuntu, sans-serif" font-weight="500" font-size="24"
        fill="${color}">${yLabel}</text>` : ''}
  `;
}

module.exports = { axis };
