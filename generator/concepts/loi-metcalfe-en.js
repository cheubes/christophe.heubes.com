'use strict';

module.exports = {
  id:          'loi-metcalfe-en',
  title:       "Metcalfe's Law",
  category:    'Engineering & Technology',
  tagline:     "The value of a network grows as the square of its number of users.",
  description: "Law formulated by Robert Metcalfe: the value of a network is proportional to the square of the number of its users (n²), creating exponential network effects.",

  render(ctx) {
    const { palette: p } = ctx;

    // Graph area
    const gx0 = 200, gx1 = 990, gy0 = 195, gy1 = 520;
    const maxN = 8;
    const toX  = n => gx0 + (n - 1) * (gx1 - gx0) / (maxN - 1);
    const toYL = n => gy1 - (gy1 - gy0) * n / maxN;
    const toYQ = n => gy1 - (gy1 - gy0) * (n * n) / (maxN * maxN);

    // Axes
    const axes = `
    <line x1="${gx0}" y1="${gy1}" x2="${gx1 + 20}" y2="${gy1}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <line x1="${gx0}" y1="${gy1 + 5}" x2="${gx0}" y2="${gy0 - 10}"
          stroke="${p.muted}" stroke-width="1.5" opacity="0.28"/>
    <text x="${gx1 + 30}" y="${gy1 + 6}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-size="12" fill="${p.muted}" opacity="0.35">n</text>
    <text x="${gx0}" y="${gy0 - 18}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-size="12" fill="${p.muted}" opacity="0.35">value</text>`;

    // X-axis ticks
    let ticks = '';
    for (let n = 1; n <= maxN; n++) {
      ticks += `
      <line x1="${toX(n)}" y1="${gy1}" x2="${toX(n)}" y2="${gy1 + 6}"
            stroke="${p.muted}" stroke-width="1" opacity="0.22"/>
      <text x="${toX(n)}" y="${gy1 + 20}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-size="12" fill="${p.muted}" opacity="0.30">${n}</text>`;
    }

    // Linear curve (muted)
    const linearPts = Array.from({ length: maxN }, (_, i) => `${toX(i + 1)},${toYL(i + 1)}`).join(' ');
    const linear = `<polyline points="${linearPts}" fill="none"
      stroke="${p.muted}" stroke-width="2" opacity="0.35" stroke-dasharray="5 3"/>`;

    // Quadratic curve (gold)
    const quadPts = Array.from({ length: maxN }, (_, i) => `${toX(i + 1)},${toYQ(i + 1)}`).join(' ');
    const quad = `<polyline points="${quadPts}" fill="none"
      stroke="${p.gold}" stroke-width="3" opacity="0.75"/>`;

    // Curve labels
    const curveLabels = `
    <text x="${toX(maxN) + 14}" y="${toYL(maxN) + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          fill="${p.muted}" opacity="0.45">n (users)</text>
    <text x="${toX(maxN) + 14}" y="${toYQ(maxN) + 5}" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          fill="${p.gold}" opacity="0.72">n² (value)</text>`;

    // Three node diagrams below graph
    const diagrams = [
      { n: 2, cx: 280, cy: 740, r: 45 },
      { n: 4, cx: 600, cy: 740, r: 58 },
      { n: 8, cx: 920, cy: 740, r: 72 },
    ];

    let nodeSvg = '';
    for (const d of diagrams) {
      const { n, cx, cy, r } = d;
      const links = n * (n - 1) / 2;
      const isLarge = n === 8;
      const col = isLarge ? p.gold : p.muted;
      const nodes = Array.from({ length: n }, (_, i) => {
        const a = 2 * Math.PI * i / n - Math.PI / 2;
        return { x: Math.round(cx + r * Math.cos(a)), y: Math.round(cy + r * Math.sin(a)) };
      });

      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          nodeSvg += `<line x1="${nodes[i].x}" y1="${nodes[i].y}" x2="${nodes[j].x}" y2="${nodes[j].y}"
            stroke="${col}" stroke-width="1.2" opacity="${isLarge ? '0.20' : '0.18'}"/>`;
        }
      }
      for (const nd of nodes) {
        nodeSvg += `<circle cx="${nd.x}" cy="${nd.y}" r="${isLarge ? 9 : 10}"
          fill="${col}" fill-opacity="${isLarge ? '0.55' : '0.25'}"
          stroke="${col}" stroke-width="1.5" opacity="${isLarge ? '0.72' : '0.45'}"/>`;
      }

      nodeSvg += `
      <text x="${cx}" y="${cy + r + 28}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="700" font-size="${isLarge ? '20' : '17'}"
            fill="${col}" opacity="${isLarge ? '0.72' : '0.45'}">n=${n} → ${links} links</text>`;
    }

    return axes + ticks + linear + quad + curveLabels + nodeSvg;
  },
};
