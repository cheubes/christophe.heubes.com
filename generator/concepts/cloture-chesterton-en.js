module.exports = {
  id:          'cloture-chesterton-en',
  title:       "Chesterton's Fence",
  category:    'Epistemology',
  tagline:     "Don't remove what you don't yet understand.",
  description: "Principle formulated by G. K. Chesterton in 1929: before removing an existing rule or structure, you must understand why it was put in place.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Fence posts ───────────────────────────────────────────────────────
    const postXs = [215, 420, 625, 830, 1035];
    const posts = postXs.map(px => `
    <rect x="${px - 8}" y="355" width="16" height="168" rx="5"
          fill="${p.muted}" opacity="0.55"/>`).join('');

    // ── Fence rails (gold) ────────────────────────────────────────────────
    const rails = `
    <rect x="215" y="388" width="820" height="14" rx="6"
          fill="${p.gold}" opacity="0.62"/>
    <rect x="215" y="450" width="820" height="14" rx="6"
          fill="${p.gold}" opacity="0.62"/>`;

    // ── "?" above the fence ───────────────────────────────────────────────
    const question = `
    <text x="600" y="340" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="120"
          fill="${p.gold}" opacity="0.12">?</text>
    <text x="600" y="262" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="2.5" fill="${p.gold}" opacity="0.65">WHY IS IT THERE?</text>`;

    // ── Separator below fence ─────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="538" x2="600" y2="820"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5 7" opacity="0.20"/>`;

    // ── LEFT zone — remove without understanding ──────────────────────────
    const leftZone = `
    <line x1="238" y1="614" x2="268" y2="644"
          stroke="${p.muted}" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
    <line x1="268" y1="614" x2="238" y2="644"
          stroke="${p.muted}" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
    <text x="290" y="644" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">REMOVE</text>
    <text x="290" y="666" text-anchor="start"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.40">without understanding why</text>`;

    // ── RIGHT zone — understand first ─────────────────────────────────────
    const rightZone = `
    <polyline points="918,648 932,664 958,620"
              fill="none" stroke="${p.gold}" stroke-width="3.5"
              stroke-linecap="round" stroke-linejoin="round" opacity="0.78"/>
    <text x="902" y="644" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          letter-spacing="1" fill="${p.gold}" opacity="0.82">UNDERSTAND</text>
    <text x="902" y="666" text-anchor="end"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.50">first, then decide</text>`;

    return question + posts + rails + sep + leftZone + rightZone;
  },
};
