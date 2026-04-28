module.exports = {
  id:          'paradoxe-jevons-en',
  title:       'Jevons Paradox',
  category:    'Economics & Incentives',
  tagline:     'Efficiency increases consumption.',
  description: 'When a resource becomes more efficient to use, its total consumption increases rather than decreases.',

  render(ctx) {
    const { palette: p } = ctx;

    const ox   = 300;
    const oy   = 900;
    const xEnd = 1110;
    const yTop = 135;

    const ax = 450, ay = 430;
    const bx = 860, by = 670;
    const midPY = (ay + by) / 2;
    const midQX = (ax + bx) / 2;

    const curvePts = [
      [350,  46],
      [362, 141],
      [370, 189],
      [380, 240],
      [390, 278],
      [400, 314],
      [415, 358],
      [430, 393],
      [450, 430], // Point A
      [475, 469],
      [500, 498],
      [540, 536],
      [580, 566],
      [630, 594],
      [700, 624],
      [750, 641],
      [800, 656],
      [860, 670], // Point B
      [950, 688],
      [1050, 704],
      [1100, 711],
    ];

    const pathD = curvePts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x},${y}`)
      .join(' ');

    const defs = `
    <defs>
      <marker id="axArr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="${p.muted}"/>
      </marker>
      <clipPath id="cz">
        <rect x="${ox}" y="${yTop}" width="${xEnd - ox}" height="${oy - yTop}"/>
      </clipPath>
    </defs>`;

    const axes = `
    <line x1="${ox}" y1="${oy}" x2="${xEnd}" y2="${oy}"
          stroke="${p.muted}" stroke-width="3" marker-end="url(#axArr)"/>
    <line x1="${ox}" y1="${oy}" x2="${ox}" y2="${yTop}"
          stroke="${p.muted}" stroke-width="3" marker-end="url(#axArr)"/>`;

    const axisLabels = `
    <text x="${ox - 14}" y="${yTop - 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="44" font-style="italic"
          fill="${p.text}">p</text>
    <text x="${xEnd + 24}" y="${oy + 14}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="44" font-style="italic"
          fill="${p.text}">Q</text>`;

    const curve = `
    <path d="${pathD}"
          clip-path="url(#cz)"
          fill="none" stroke="${p.gold}" stroke-width="6"
          stroke-linecap="round" stroke-linejoin="round"/>`;

    const crosshairs = `
    <line x1="${ox}" y1="${ay}" x2="${ax}" y2="${ay}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${ox}" y1="${by}" x2="${bx}" y2="${by}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${ax}" y1="${ay}" x2="${ax}" y2="${oy}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>
    <line x1="${bx}" y1="${by}" x2="${bx}" y2="${oy}"
          stroke="${p.muted}" stroke-width="2" stroke-dasharray="10,6" opacity="0.65"/>`;

    const dots = `
    <circle cx="${ax}" cy="${ay}" r="10" fill="${p.gold}"/>
    <circle cx="${bx}" cy="${by}" r="10" fill="${p.gold}"/>`;

    const ticks = `
    <line x1="${ox - 13}" y1="${ay}" x2="${ox + 13}" y2="${ay}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${ox - 13}" y1="${by}" x2="${ox + 13}" y2="${by}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${ax}" y1="${oy - 13}" x2="${ax}" y2="${oy + 13}"
          stroke="${p.text}" stroke-width="2.5"/>
    <line x1="${bx}" y1="${oy - 13}" x2="${bx}" y2="${oy + 13}"
          stroke="${p.text}" stroke-width="2.5"/>`;

    const priceLabel = `
    <text x="${ox - 26}" y="${midPY - 15}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="23"
          fill="${p.text}">price drops</text>
    <text x="${ox - 26}" y="${midPY + 17}" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="23"
          fill="${p.gold}">by half</text>`;

    const qtyLabel = `
    <text x="${midQX}" y="${oy + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="23"
          fill="${p.text}">demand increases</text>
    <text x="${midQX}" y="${oy + 76}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="23"
          fill="${p.gold}">by more than half</text>`;

    const curveLabel = `
    <text x="878" y="655" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="27" font-style="italic"
          fill="${p.goldLight}">demand</text>`;

    return defs + axes + axisLabels + curve + crosshairs + dots + ticks
         + priceLabel + qtyLabel + curveLabel;
  },
};
