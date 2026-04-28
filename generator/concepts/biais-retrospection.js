'use strict';

module.exports = {
  id:          'biais-retrospection',
  title:       'Biais de rétrospection',
  category:    'Biais & Heuristiques',
  tagline:     "« Je le savais depuis le début. »",
  description: "Biais documenté par Baruch Fischhoff (1975) : après avoir connu l'issue d'un événement, on surestime la probabilité qu'on lui aurait attribuée à l'avance — la mémoire se réécrit.",

  render(ctx) {
    const { palette: p } = ctx;

    const panelY = 258, panelH = 370, panelW = 300;
    const lx = 165, rx = 735;

    // Timeline
    const timeY = panelY + panelH + 65;
    const timeline = `
    <line x1="155" y1="${timeY}" x2="1048" y2="${timeY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.18" stroke-dasharray="5 3"/>
    <polygon points="1048,${timeY - 5} 1048,${timeY + 5} 1060,${timeY}"
             fill="${p.muted}" opacity="0.18"/>
    <line x1="600" y1="${timeY - 18}" x2="600" y2="${timeY + 18}"
          stroke="${p.gold}" stroke-width="2.5" opacity="0.65"/>
    <text x="600" y="${timeY + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.65">ÉVÉNEMENT</text>`;

    // Left panel: AVANT
    const barMaxH = 150, barW = 56;
    const lBarX = lx + panelW / 2 - barW / 2;
    const h50 = Math.round(barMaxH * 0.50);
    const leftPanel = `
    <rect x="${lx}" y="${panelY}" width="${panelW}" height="${panelH}" rx="12"
          fill="${p.muted}" fill-opacity="0.04" stroke="${p.muted}" stroke-width="1.5" opacity="0.25"
          stroke-dasharray="6 4"/>
    <text x="${lx + panelW / 2}" y="${panelY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.50">AVANT</text>
    <text x="${lx + panelW / 2}" y="${panelY + 56}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.muted}" opacity="0.35">estimation initiale</text>
    <rect x="${lBarX}" y="${panelY + 90}" width="${barW}" height="${barMaxH}" rx="4"
          fill="${p.muted}" fill-opacity="0.06" stroke="${p.muted}" stroke-width="1" opacity="0.20"/>
    <rect x="${lBarX}" y="${panelY + 90 + barMaxH - h50}" width="${barW}" height="${h50}" rx="4"
          fill="${p.muted}" fill-opacity="0.25" stroke="none"/>
    <text x="${lx + panelW / 2}" y="${panelY + 268}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="28"
          fill="${p.muted}" opacity="0.40">~50 %</text>
    <text x="${lx + panelW / 2}" y="${panelY + 298}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.32">incertain</text>
    <text x="${lx + panelW / 2}" y="${panelY + 332}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.muted}" opacity="0.22">probabilité honnête</text>`;

    // Right panel: APRÈS
    const h85 = Math.round(barMaxH * 0.85);
    const rBarX = rx + panelW / 2 - barW / 2;
    const rightPanel = `
    <rect x="${rx}" y="${panelY}" width="${panelW}" height="${panelH}" rx="12"
          fill="${p.gold}" fill-opacity="0.06" stroke="${p.gold}" stroke-width="2" opacity="0.55"/>
    <text x="${rx + panelW / 2}" y="${panelY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.70">APRÈS</text>
    <text x="${rx + panelW / 2}" y="${panelY + 56}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.gold}" opacity="0.45">mémoire reconstruite</text>
    <rect x="${rBarX}" y="${panelY + 90}" width="${barW}" height="${barMaxH}" rx="4"
          fill="${p.muted}" fill-opacity="0.06" stroke="${p.muted}" stroke-width="1" opacity="0.20"/>
    <rect x="${rBarX}" y="${panelY + 90 + barMaxH - h85}" width="${barW}" height="${h85}" rx="4"
          fill="${p.gold}" fill-opacity="0.35" stroke="none"/>
    <text x="${rx + panelW / 2}" y="${panelY + 268}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="28"
          fill="${p.gold}" opacity="0.72">~85 %</text>
    <text x="${rx + panelW / 2}" y="${panelY + 298}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1" fill="${p.gold}" opacity="0.65">« Je le savais »</text>
    <text x="${rx + panelW / 2}" y="${panelY + 328}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.gold}" opacity="0.40">certitude rétrospective</text>`;

    // Arrow between panels (distortion)
    const midY = panelY + panelH / 2 - 18;
    const distortArrow = `
    <line x1="${lx + panelW + 12}" y1="${midY}" x2="${rx - 12}" y2="${midY}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.22" stroke-dasharray="4 3"/>
    <polygon points="${rx - 12},${midY - 5} ${rx - 12},${midY + 5} ${rx},${midY}"
             fill="${p.muted}" opacity="0.22"/>
    <text x="${(lx + panelW + rx) / 2}" y="${midY - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          letter-spacing="1" fill="${p.muted}" opacity="0.28">réécriture mémorielle</text>`;

    const caption = `
    <text x="600" y="858" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">La mémoire se réécrit à la lumière du résultat connu.</text>`;

    return leftPanel + rightPanel + distortArrow + timeline + caption;
  },
};
