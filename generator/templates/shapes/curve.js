/**
 * Courbe de Bézier cubique.
 * Points : [{x, y}, ...] — au moins 2 points.
 * Crée une path SVG lissée.
 */
function bezierCurve({ points, color = '#C9A84C', strokeWidth = 4, fill = 'none' }) {
  if (points.length < 2) return '';
  const [start, ...rest] = points;
  let d = `M ${start.x} ${start.y}`;

  if (points.length === 2) {
    d += ` L ${rest[0].x} ${rest[0].y}`;
  } else if (points.length === 3) {
    d += ` Q ${rest[0].x} ${rest[0].y} ${rest[1].x} ${rest[1].y}`;
  } else {
    // Courbe cubique via points de contrôle automatiques
    for (let i = 0; i < rest.length - 1; i++) {
      const cp1x = points[i].x + (points[i + 1].x - points[i].x) / 3;
      const cp1y = points[i].y + (points[i + 1].y - points[i].y) / 3;
      const cp2x = points[i].x + 2 * (points[i + 1].x - points[i].x) / 3;
      const cp2y = points[i].y + 2 * (points[i + 1].y - points[i].y) / 3;
      d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${rest[i].x} ${rest[i].y}`;
    }
    const last = rest[rest.length - 1];
    const prev = rest[rest.length - 2];
    const cp1x = prev.x + (last.x - prev.x) / 2;
    const cp1y = prev.y + (last.y - prev.y) / 2;
    d += ` Q ${cp1x} ${cp1y} ${last.x} ${last.y}`;
  }

  return `<path d="${d}" stroke="${color}" stroke-width="${strokeWidth}" fill="${fill}" stroke-linecap="round"/>`;
}

module.exports = { bezierCurve };
