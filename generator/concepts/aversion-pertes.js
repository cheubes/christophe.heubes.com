'use strict';

module.exports = {
  id:          'aversion-pertes',
  title:       'Aversion aux pertes',
  category:    'Biais & Heuristiques',
  tagline:     "Perdre 100€ fait plus mal que gagner 100€ ne fait plaisir.",
  description: "Principe issu de la théorie des perspectives (Kahneman &amp; Tversky) : les pertes ont un impact psychologique environ deux fois plus fort que des gains équivalents.",

  render(ctx) {
    const { palette: p } = ctx;

    // Origin: (600, 540) — intersection of axes
    const ox = 600, oy = 540;

    // X-axis: losses left (165), gains right (1035)
    // Y-axis: negative value down (820), positive value up (230)

    const axes = `
    <line x1="165" y1="${oy}" x2="1030" y2="${oy}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.30"/>
    <polygon points="1030,${oy - 6} 1030,${oy + 6} 1048,${oy}"
             fill="${p.muted}" opacity="0.30"/>
    <line x1="${ox}" y1="820" x2="${ox}" y2="240"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.30"/>
    <polygon points="${ox - 6},240 ${ox + 6},240 ${ox},222"
             fill="${p.muted}" opacity="0.30"/>
    <text x="180" y="${oy - 12}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.45">← PERTES</text>
    <text x="1020" y="${oy - 12}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="14"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">GAINS →</text>
    <text x="${ox + 14}" y="240" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.35">VALEUR ↑</text>
    <text x="${ox + 14}" y="820" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.35">DOULEUR ↓</text>`;

    // Prospect theory curve — asymmetric S-shape
    // Loss side: steep decline (left of origin)
    // Gain side: gentle rise (right of origin)
    // Path goes from bottom-left (big loss) through origin to top-right (big gain)
    const curve = `
    <path d="M 175,795 C 300,720 460,620 ${ox},${oy} C 720,460 870,400 1040,360"
          fill="none" stroke="${p.gold}" stroke-width="3" opacity="0.75"/>`;

    // Asymmetry annotations
    // +200 units right (x=600+174) → gain ≈ 540-120=420 (y=420, Δy=-120 upward)
    // -200 units left (x=600-174) → loss ≈ 540+220=760 (y=760, Δy=+220 downward)
    const gainX = ox + 174, gainY = 425;
    const lossX = ox - 174, lossY = 745;

    const annotations = `
    <line x1="${ox}" y1="${oy}" x2="${gainX}" y2="${oy}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <line x1="${gainX}" y1="${oy}" x2="${gainX}" y2="${gainY}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <text x="${gainX + 14}" y="${(oy + gainY) / 2 + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.gold}" opacity="0.70">+ ${oy - gainY}</text>
    <text x="${gainX + 14}" y="${(oy + gainY) / 2 + 24}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.42">pts de plaisir</text>

    <line x1="${ox}" y1="${oy}" x2="${lossX}" y2="${oy}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <line x1="${lossX}" y1="${oy}" x2="${lossX}" y2="${lossY}"
          stroke="${p.muted}" stroke-width="1" opacity="0.20" stroke-dasharray="3 4"/>
    <text x="${lossX - 14}" y="${(oy + lossY) / 2 + 5}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.muted}" opacity="0.60">− ${lossY - oy}</text>
    <text x="${lossX - 14}" y="${(oy + lossY) / 2 + 24}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.38">pts de douleur</text>

    <line x1="${lossX}" y1="${oy}" x2="${gainX}" y2="${oy}"
          stroke="${p.muted}" stroke-width="0.8" opacity="0.12"/>`;

    // Ratio label at center bottom
    const ratio = `
    <text x="600" y="860" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          fill="${p.muted}" opacity="0.50">× 2.25</text>
    <text x="600" y="886" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">l'impact d'une perte vs un gain équivalent</text>`;

    // Origin dot
    const origin = `
    <circle cx="${ox}" cy="${oy}" r="5" fill="${p.muted}" opacity="0.40"/>`;

    return axes + curve + annotations + origin + ratio;
  },
};
