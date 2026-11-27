'use strict';

module.exports = {
  id:          'aversion-pertes',
  title:       'Aversion aux pertes',
  category:    'Biais & Heuristiques',
  tagline:     "Perdre 100 € fait plus mal que gagner 100 € ne fait plaisir.",
  description: "Principe issu de la théorie des perspectives (Kahneman &amp; Tversky) : les pertes ont un impact psychologique environ deux fois plus fort que des gains équivalents.",

  render(ctx) {
    const { palette: p, font } = ctx;

    const beamY = 470, leftX = 330, rightX = 870, panY = 700;

    const pan = (x, color) => `
    <line x1="${x}" y1="${beamY}" x2="${x - 110}" y2="${panY}"
          stroke="${color}" stroke-width="1.5" opacity="0.6"/>
    <line x1="${x}" y1="${beamY}" x2="${x + 110}" y2="${panY}"
          stroke="${color}" stroke-width="1.5" opacity="0.6"/>
    <path d="M${x - 130},${panY} Q${x},${panY + 60} ${x + 130},${panY}"
          fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="2.5" opacity="0.9"/>`;

    const coin = (x, label, color) => {
      const y = panY - 22, r = 46;
      return `
    <circle cx="${x}" cy="${y}" r="${r}" fill="${p.bg}"/>
    <circle cx="${x}" cy="${y}" r="${r}"
            fill="${color}" fill-opacity="0.22" stroke="${color}" stroke-width="3" opacity="0.95"/>
    <circle cx="${x}" cy="${y}" r="${r - 9}"
            fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
    <text x="${x}" y="${y + 8}" text-anchor="middle"
          font-family="${font}" font-weight="700" font-size="21" fill="${color}">${label}</text>`;
    };

    return `
    <text x="600" y="300" text-anchor="middle"
          font-family="${font}" font-weight="500" font-size="19"
          letter-spacing="2" fill="${p.muted}" opacity="0.85">IL FAUT DEUX GAINS POUR COMPENSER UNE PERTE</text>
    <polygon points="600,${beamY + 6} 548,900 652,900"
             fill="${p.muted}" fill-opacity="0.15" stroke="${p.muted}" stroke-width="2" opacity="0.8"/>
    <line x1="470" y1="900" x2="730" y2="900"
          stroke="${p.muted}" stroke-width="2" opacity="0.6"/>
    <line x1="${leftX}" y1="${beamY}" x2="${rightX}" y2="${beamY}"
          stroke="${p.text}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
    <circle cx="600" cy="${beamY}" r="10"
            fill="${p.bg}" stroke="${p.text}" stroke-width="3" opacity="0.9"/>`
      + pan(leftX, p.muted)
      + pan(rightX, p.gold)
      + coin(leftX, '−100 €', p.muted)
      + coin(rightX - 50, '+100 €', p.gold)
      + coin(rightX + 50, '+100 €', p.gold)
      + `
    <text x="${leftX}" y="${panY + 100}" text-anchor="middle"
          font-family="${font}" font-weight="500" font-size="18"
          letter-spacing="2" fill="${p.muted}" opacity="0.9">UNE PERTE</text>
    <text x="${rightX}" y="${panY + 100}" text-anchor="middle"
          font-family="${font}" font-weight="500" font-size="18"
          letter-spacing="2" fill="${p.gold}" opacity="0.9">DEUX GAINS</text>`;
  },
};
