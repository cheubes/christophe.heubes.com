'use strict';

module.exports = {
  id:          'ancrage-cognitif',
  title:       'Ancrage cognitif',
  category:    'Biais & Heuristiques',
  tagline:     "Le premier chiffre entendu distord tous les suivants.",
  description: "Biais cognitif par lequel la première information reçue (l'ancre) influence de façon disproportionnée les estimations et jugements ultérieurs.",

  render(ctx) {
    const { palette: p, font } = ctx;

    const toX = v => 165 + v * 0.87;
    const trueValue = 500;
    const xTrue = toX(trueValue);

    // Each adjustment halves the previous one, so the estimate stops short of the true value
    const row = (y, anchorValue, direction, color, opacity, title, titleAnchor) => {
      let value = anchorValue, hops = '';
      for (const step of [140, 70, 35]) {
        const next = value + direction * step;
        const x0 = toX(value), x1 = toX(next);
        const midX = (x0 + x1) / 2, controlY = y - 6 - (22 + step * 0.45) * 2;
        const tipX = x1 - direction * 4, tipY = y - 16;
        const dx = tipX - midX, dy = tipY - controlY, length = Math.hypot(dx, dy);
        const ux = dx / length, uy = dy / length;
        const baseX = tipX - ux * 12, baseY = tipY - uy * 12;
        hops += `
    <path d="M${x0},${y - 16} Q${midX},${controlY} ${baseX},${baseY}"
          fill="none" stroke="${color}" stroke-width="2" opacity="${opacity * 0.75}"/>
    <polygon points="${tipX},${tipY} ${baseX - uy * 6},${baseY + ux * 6} ${baseX + uy * 6},${baseY - ux * 6}"
             fill="${color}" opacity="${opacity}"/>`;
        value = next;
      }

      const xAnchor = toX(anchorValue), xEnd = toX(value);
      const gap0 = direction > 0 ? xEnd + 18 : xTrue + 4;
      const gap1 = direction > 0 ? xTrue - 4 : xEnd - 18;
      const titleX = titleAnchor === 'end' ? 1035 : 165;

      return `
    <text x="${titleX}" y="${y - 140}" text-anchor="${titleAnchor}"
          font-family="${font}" font-weight="500" font-size="19"
          letter-spacing="2" fill="${color}" opacity="${opacity}">${title}</text>
    <line x1="165" y1="${y}" x2="1035" y2="${y}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.35"/>
    <rect x="${xAnchor - 9}" y="${y - 9}" width="18" height="18"
          fill="${color}" opacity="${opacity}" transform="rotate(45 ${xAnchor} ${y})"/>
    <text x="${xAnchor}" y="${y + 40}" text-anchor="middle"
          font-family="${font}" font-weight="700" font-size="18"
          fill="${color}" opacity="${opacity}">ANCRE : ${anchorValue}</text>${hops}
    <circle cx="${xEnd}" cy="${y}" r="13"
            fill="${color}" fill-opacity="0.6" stroke="${color}" stroke-width="2" opacity="${opacity}"/>
    <text x="${xEnd}" y="${y + 40}" text-anchor="middle"
          font-family="${font}" font-weight="700" font-size="18"
          fill="${color}" opacity="${opacity}">${value}</text>
    <path d="M${gap0},${y + 54} V${y + 70} M${gap0},${y + 62} H${gap1} M${gap1},${y + 54} V${y + 70}"
          fill="none" stroke="${p.text}" stroke-width="1.5" opacity="0.6"/>
    <text x="${(gap0 + gap1) / 2}" y="${y + 94}" text-anchor="middle"
          font-family="${font}" font-weight="500" font-size="17"
          letter-spacing="2" fill="${p.text}" opacity="0.75">ÉCART</text>`;
    };

    return `
    <line x1="${xTrue}" y1="300" x2="${xTrue}" y2="930"
          stroke="${p.text}" stroke-width="1.5" opacity="0.45" stroke-dasharray="3 5"/>
    <text x="${xTrue}" y="960" text-anchor="middle"
          font-family="${font}" font-size="17" letter-spacing="1.5"
          fill="${p.text}" opacity="0.7">VALEUR RÉELLE</text>`
      + row(450, 80, 1, p.muted, 0.9, 'ANCRE BASSE', 'start')
      + row(780, 920, -1, p.gold, 0.95, 'ANCRE HAUTE', 'end');
  },
};
