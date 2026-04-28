module.exports = {
  id:          'loi-tesler',
  title:       'Loi de Tesler',
  category:    'Ingénierie & Technologie',
  tagline:     "La complexité est incompressible : elle se déplace, elle ne disparaît pas.",
  description: "Loi formulée par Larry Tesler (Xerox, Apple) : tout système possède une complexité irréductible qui ne peut être éliminée — seulement déplacée entre l'utilisateur et le développeur.",

  render(ctx) {
    const { palette: p } = ctx;

    const top = 250, base = 810;
    const H = base - top;              // 560 px total
    const H80 = Math.round(H * 0.80); // 448
    const H20 = H - H80;              // 112
    const bw = 180;
    const axc = 380, bxc = 820;

    // ── Conservation reference line ───────────────────────────────────────
    const refLine = `
    <line x1="${axc - bw / 2 - 20}" y1="${top}" x2="${bxc + bw / 2 + 20}" y2="${top}"
          stroke="${p.gold}" stroke-width="1" stroke-dasharray="6 5" opacity="0.35"/>
    <text x="600" y="${top - 14}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="13"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.55">COMPLEXITÉ TOTALE = CONSTANTE</text>`;

    // ── Bar A — UI complexe pour l'utilisateur ────────────────────────────
    const aL = axc - bw / 2;
    const barA = `
    <text x="${axc}" y="${top - 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.muted}" opacity="0.65">UI COMPLEXE</text>
    <rect x="${aL}" y="${top}" width="${bw}" height="${H80}" rx="4"
          fill="${p.muted}" opacity="0.52"/>
    <text x="${axc}" y="${top + H80 / 2 - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.text}" opacity="0.85">UTILISATEUR</text>
    <text x="${axc}" y="${top + H80 / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.text}" opacity="0.78">80%</text>
    <rect x="${aL}" y="${top + H80}" width="${bw}" height="${H20}" rx="4"
          fill="${p.gold}" opacity="0.52"/>
    <text x="${axc}" y="${top + H80 + H20 / 2 - 7}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          fill="${p.bg}" opacity="0.85">SYSTÈME</text>
    <text x="${axc}" y="${top + H80 + H20 / 2 + 13}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="18"
          fill="${p.bg}" opacity="0.85">20%</text>`;

    // ── Bar B — UI simple pour l'utilisateur ──────────────────────────────
    const bL = bxc - bw / 2;
    const barB = `
    <text x="${bxc}" y="${top - 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="15"
          letter-spacing="1.5" fill="${p.gold}" opacity="0.82">UI SIMPLE</text>
    <rect x="${bL}" y="${top}" width="${bw}" height="${H20}" rx="4"
          fill="${p.muted}" opacity="0.30"/>
    <text x="${bxc}" y="${top + H20 / 2 - 7}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="11"
          fill="${p.text}" opacity="0.70">UTILIS.</text>
    <text x="${bxc}" y="${top + H20 / 2 + 13}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="17"
          fill="${p.text}" opacity="0.70">20%</text>
    <rect x="${bL}" y="${top + H20}" width="${bw}" height="${H80}" rx="4"
          fill="${p.gold}" opacity="0.76"/>
    <text x="${bxc}" y="${top + H20 + H80 / 2 - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="14"
          letter-spacing="1" fill="${p.bg}" opacity="0.90">SYSTÈME</text>
    <text x="${bxc}" y="${top + H20 + H80 / 2 + 20}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="34"
          fill="${p.bg}" opacity="0.85">80%</text>`;

    // ── Annotation between bars ───────────────────────────────────────────
    const annotation = `
    <text x="600" y="533" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.42">la complexité ne disparaît pas</text>
    <text x="600" y="551" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="12"
          letter-spacing="1" fill="${p.muted}" opacity="0.42">elle se déplace</text>`;

    return refLine + barA + barB + annotation;
  },
};
