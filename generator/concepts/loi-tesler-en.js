module.exports = {
  id:          'loi-tesler-en',
  title:       "Tesler's Law",
  category:    'Engineering & Technology',
  tagline:     "Complexity is incompressible: it shifts, it doesn't disappear.",
  description: "Law formulated by Larry Tesler (Xerox, Apple): every system has an irreducible amount of complexity that cannot be eliminated — only moved between the user and the developer.",

  render(ctx) {
    const { palette: p } = ctx;

    const top = 250, base = 810;
    const H = base - top;
    const H80 = Math.round(H * 0.80);
    const H20 = H - H80;
    const bw = 180;
    const axc = 380, bxc = 820;

    // ── Conservation reference line ───────────────────────────────────────
    const refLine = `
    <line x1="${axc - bw / 2 - 20}" y1="${top}" x2="${bxc + bw / 2 + 20}" y2="${top}"
          stroke="${p.gold}" stroke-width="1" stroke-dasharray="6 5" opacity="0.35"/>
    <text x="600" y="${top - 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">TOTAL COMPLEXITY = CONSTANT</text>`;

    // ── Bar A — Complex UI ────────────────────────────────────────────────
    const aL = axc - bw / 2;
    const barA = `
    <text x="${axc}" y="${top - 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.65">COMPLEX UI</text>
    <rect x="${aL}" y="${top}" width="${bw}" height="${H80}" rx="4"
          fill="${p.muted}" opacity="0.52"/>
    <text x="${axc}" y="${top + H80 / 2 - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.text}" opacity="0.85">USER</text>
    <text x="${axc}" y="${top + H80 / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.text}" opacity="0.78">80%</text>
    <rect x="${aL}" y="${top + H80}" width="${bw}" height="${H20}" rx="4"
          fill="${p.gold}" opacity="0.52"/>
    <text x="${axc}" y="${top + H80 + H20 / 2 - 7}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.bg}" opacity="0.85">SYSTEM</text>
    <text x="${axc}" y="${top + H80 + H20 / 2 + 13}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.bg}" opacity="0.85">20%</text>`;

    // ── Bar B — Simple UI ─────────────────────────────────────────────────
    const bL = bxc - bw / 2;
    const barB = `
    <text x="${bxc}" y="${top - 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.82">SIMPLE UI</text>
    <rect x="${bL}" y="${top}" width="${bw}" height="${H20}" rx="4"
          fill="${p.muted}" opacity="0.30"/>
    <text x="${bxc}" y="${top + H20 / 2 - 7}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.text}" opacity="0.70">USER</text>
    <text x="${bxc}" y="${top + H20 / 2 + 13}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          fill="${p.text}" opacity="0.70">20%</text>
    <rect x="${bL}" y="${top + H20}" width="${bw}" height="${H80}" rx="4"
          fill="${p.gold}" opacity="0.76"/>
    <text x="${bxc}" y="${top + H20 + H80 / 2 - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.bg}" opacity="0.90">SYSTEM</text>
    <text x="${bxc}" y="${top + H20 + H80 / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.bg}" opacity="0.85">80%</text>`;

    // ── Annotation between bars ───────────────────────────────────────────
    const annotation = `
    <text x="600" y="533" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.42">complexity doesn't disappear</text>
    <text x="600" y="551" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.42">it just moves</text>`;

    return refLine + barA + barB + annotation;
  },
};
