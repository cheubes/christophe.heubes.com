/**
 * Cercle avec label optionnel.
 */
function circle({ cx, cy, r, fill = 'none', stroke = '#C9A84C', strokeWidth = 2, label = '', labelColor = '#F0EDE4', fontSize = 24 }) {
  return `
  <circle cx="${cx}" cy="${cy}" r="${r}"
          fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>
  ${label ? `<text x="${cx}" y="${cy + fontSize / 3}" text-anchor="middle"
        font-family="Ubuntu, sans-serif" font-weight="500" font-size="${fontSize}"
        fill="${labelColor}">${label}</text>` : ''}
  `;
}

module.exports = { circle };
