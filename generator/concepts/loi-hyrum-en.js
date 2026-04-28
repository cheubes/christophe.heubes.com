'use strict';

module.exports = {
  id:          'loi-hyrum-en',
  title:       "Hyrum's Law",
  category:    'Engineering & Technology',
  tagline:     "With enough users, all observable behavior becomes a dependency.",
  description: "Law stated by Hyrum Wright (Google engineer): regardless of what the documented interface says, users will eventually depend on every observable behavior of a system.",

  render(ctx) {
    const { palette: p } = ctx;

    const apiX = 680, apiW = 262;

    const topApiY = 228, secH = 102;
    const topApi = `
    <text x="420" y="192" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.muted}" opacity="0.38">FEW USERS</text>
    <rect x="${apiX}" y="${topApiY}" width="${apiW}" height="${secH}"
          fill="${p.gold}" fill-opacity="0.08"
          stroke="${p.gold}" stroke-width="2" opacity="0.62" rx="10"/>
    <text x="${apiX + apiW / 2}" y="${topApiY + 36}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.72">INTENDED INTERFACE</text>
    <text x="${apiX + apiW / 2}" y="${topApiY + 58}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.gold}" opacity="0.45">documented behaviors</text>
    <rect x="${apiX}" y="${topApiY + secH}" width="${apiW}" height="${secH}" rx="0"
          fill="${p.muted}" fill-opacity="0.03"
          stroke="${p.muted}" stroke-width="1" opacity="0.18" stroke-dasharray="4 4"/>
    <text x="${apiX + apiW / 2}" y="${topApiY + secH + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.25">IMPLEMENTATION</text>
    <text x="${apiX + apiW / 2}" y="${topApiY + secH + 58}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.muted}" opacity="0.16">(opaque)</text>`;

    const topUserNodes = [{ x: 300, y: 262 }, { x: 300, y: 316 }, { x: 300, y: 370 }];
    const ifaceMidY = topApiY + secH / 2;
    let topUsers = '';
    for (const nd of topUserNodes) {
      topUsers += `
      <circle cx="${nd.x}" cy="${nd.y}" r="16"
              fill="${p.gold}" fill-opacity="0.18"
              stroke="${p.gold}" stroke-width="1.5" opacity="0.52"/>
      <line x1="${nd.x + 18}" y1="${nd.y}" x2="${apiX - 8}" y2="${ifaceMidY}"
            stroke="${p.gold}" stroke-width="1.5" opacity="0.35"/>`;
    }

    const sep = `
    <line x1="165" y1="462" x2="1035" y2="462"
          stroke="${p.muted}" stroke-width="1" opacity="0.10" stroke-dasharray="4 6"/>`;

    const botApiY = 518, botSecH = 78;
    const botSections = [
      { label: 'INTENDED INTERFACE',  sub: 'documented behaviors',   col: p.gold,  op: 0.65, fillOp: 0.08, dashes: '' },
      { label: 'EDGE CASES',          sub: 'boundary behaviors',     col: p.muted, op: 0.40, fillOp: 0.04, dashes: 'stroke-dasharray="5 3"' },
      { label: 'BUGS / QUIRKS',       sub: 'abnormal behaviors',     col: p.muted, op: 0.28, fillOp: 0.03, dashes: 'stroke-dasharray="4 4"' },
      { label: 'IMPLICIT',            sub: 'undocumented',           col: p.muted, op: 0.18, fillOp: 0.02, dashes: 'stroke-dasharray="3 5"' },
    ];

    let botApi = `
    <text x="420" y="490" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="13"
          letter-spacing="2" fill="${p.gold}" opacity="0.55">MANY USERS</text>`;

    for (let i = 0; i < botSections.length; i++) {
      const sec = botSections[i];
      const sy = botApiY + i * botSecH;
      botApi += `
      <rect x="${apiX}" y="${sy}" width="${apiW}" height="${botSecH}"
            fill="${sec.col}" fill-opacity="${sec.fillOp}"
            stroke="${sec.col}" stroke-width="${i === 0 ? 2 : 1}" opacity="${sec.op}" ${sec.dashes}/>
      <text x="${apiX + apiW / 2}" y="${sy + 28}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="${i === 0 ? '700' : '400'}" font-size="${i === 0 ? '12' : '11'}"
            letter-spacing="1.5" fill="${sec.col}" opacity="${Math.min(1, sec.op + 0.12)}">${sec.label}</text>
      <text x="${apiX + apiW / 2}" y="${sy + 48}" text-anchor="middle"
            font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
            fill="${sec.col}" opacity="${sec.op * 0.7}">${sec.sub}</text>`;
    }

    const botNodes = [
      { x: 230, y: 538 }, { x: 310, y: 538 },
      { x: 230, y: 616 }, { x: 310, y: 616 },
      { x: 230, y: 694 }, { x: 310, y: 694 },
      { x: 230, y: 772 }, { x: 310, y: 772 },
    ];

    let botUsers = '';
    for (let ni = 0; ni < botNodes.length; ni++) {
      const nd = botNodes[ni];
      botUsers += `
      <circle cx="${nd.x}" cy="${nd.y}" r="14"
              fill="${p.gold}" fill-opacity="0.18"
              stroke="${p.gold}" stroke-width="1.5" opacity="0.52"/>`;
      for (let si = 0; si < botSections.length; si++) {
        const targetY = botApiY + si * botSecH + botSecH / 2;
        const op = si === 0 ? '0.32' : si === 1 ? '0.14' : '0.07';
        const dashes = si === 0 ? '' : `stroke-dasharray="${Math.max(2, 5 - si)} ${2 + si}"`;
        botUsers += `
        <line x1="${nd.x + 15}" y1="${nd.y}" x2="${apiX - 6}" y2="${targetY}"
              stroke="${si === 0 ? p.gold : p.muted}" stroke-width="1" opacity="${op}" ${dashes}/>`;
      }
    }

    const caption = `
    <text x="600" y="925" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.32">More users means more unintended behaviors become implicit contracts.</text>`;

    return topApi + topUsers + sep + botApi + botUsers + caption;
  },
};
