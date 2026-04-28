module.exports = {
  id:          'loi-hofstadter-en',
  title:       "Hofstadter's Law",
  category:    'Management & Organisations',
  tagline:     "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
  description: "Recursive law formulated by Douglas Hofstadter in 1979: duration estimates are systematically too optimistic, even when you try to correct for this bias.",

  render(ctx) {
    const { palette: p } = ctx;

    const ty = 530;
    const sx = 165, ex = 1040;
    const d1 = 390, d2 = 580, d3 = 775;

    // ── Timeline bar ──────────────────────────────────────────────────────
    const bar = `
    <rect x="${sx}" y="${ty - 3}" width="${ex - sx}" height="6" rx="3"
          fill="${p.muted}" opacity="0.16"/>`;

    // ── Overrun zone ──────────────────────────────────────────────────────
    const overrun = `
    <rect x="${d1}" y="${ty - 4}" width="${ex - d1}" height="8" rx="3"
          fill="${p.gold}" fill-opacity="0.06"/>`;

    // ── START marker ──────────────────────────────────────────────────────
    const start = `
    <line x1="${sx}" y1="${ty - 55}" x2="${sx}" y2="${ty + 55}"
          stroke="${p.muted}" stroke-width="2" opacity="0.38"/>
    <circle cx="${sx}" cy="${ty}" r="5" fill="${p.muted}" opacity="0.55"/>
    <text x="${sx}" y="${ty + 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.50">START</text>`;

    // ── Deadline 1 — above, muted ─────────────────────────────────────────
    const m1 = `
    <line x1="${d1}" y1="${ty - 90}" x2="${d1}" y2="${ty}"
          stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.45"/>
    <circle cx="${d1}" cy="${ty}" r="4" fill="${p.muted}" opacity="0.60"/>
    <text x="${d1}" y="${ty - 100}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.65">PLANNED DELIVERY</text>`;

    // ── Deadline 2 — below, muted ─────────────────────────────────────────
    const m2 = `
    <line x1="${d2}" y1="${ty}" x2="${d2}" y2="${ty + 90}"
          stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.40"/>
    <circle cx="${d2}" cy="${ty}" r="4" fill="${p.muted}" opacity="0.55"/>
    <text x="${d2}" y="${ty + 108}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.muted}" opacity="0.60">1ST REVISION</text>`;

    // ── Deadline 3 — above, goldLight ─────────────────────────────────────
    const m3 = `
    <line x1="${d3}" y1="${ty - 90}" x2="${d3}" y2="${ty}"
          stroke="${p.goldLight}" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.42"/>
    <circle cx="${d3}" cy="${ty}" r="4" fill="${p.goldLight}" opacity="0.58"/>
    <text x="${d3}" y="${ty - 100}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.goldLight}" opacity="0.65">2ND REVISION</text>`;

    // ── Final marker — gold, solid ─────────────────────────────────────────
    const final = `
    <line x1="${ex}" y1="${ty - 120}" x2="${ex}" y2="${ty + 80}"
          stroke="${p.gold}" stroke-width="2.5" opacity="0.88"/>
    <circle cx="${ex}" cy="${ty}" r="7" fill="${p.gold}" opacity="0.92"/>
    <text x="${ex}" y="${ty - 133}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.92">ACTUAL</text>
    <text x="${ex}" y="${ty - 113}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="16"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.92">DELIVERY</text>`;

    // ── Recursive annotation ──────────────────────────────────────────────
    const midX = (d2 + d3) / 2;
    const annotation = `
    <text x="${midX}" y="${ty - 52}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.48">even accounting for the law →</text>`;

    // ── Ratio labels ──────────────────────────────────────────────────────
    const ratioY = ty + 168;
    const ratios = `
    <text x="${d1}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.33">×1.0</text>
    <text x="${d2}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.33">×1.5</text>
    <text x="${d3}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.33">×2.0</text>
    <text x="${ex}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.gold}" opacity="0.50">×2.7</text>`;

    return bar + overrun + start + m1 + m2 + m3 + final + annotation + ratios;
  },
};
