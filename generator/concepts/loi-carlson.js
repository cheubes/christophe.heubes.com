module.exports = {
  id:          'loi-carlson',
  title:       'Loi de Carlson',
  category:    'Management & Organisations',
  tagline:     'Un travail continu est toujours plus efficace qu\'un travail interrompu.',
  description: "Formulée par Sune Carlson en 1951 : chaque interruption réinitialise le coût de concentration. Travailler en blocs ininterrompus réduit la durée réelle d'une tâche d'un facteur 2 à 3.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Columns ───────────────────────────────────────────────────────────
    const lx = 300;   // left column centre  (fragmented)
    const rx = 900;   // right column centre (continuous)
    const hw = 56;    // bar half-width

    // ── Work blocks ───────────────────────────────────────────────────────
    const bh     = 60;   // work block height
    const gh     = 80;   // gap height (interruption)
    const n      = 4;    // number of fragmented sessions
    const startY = 215;

    // Left column: n blocks + (n-1) gaps
    // Span total = n*bh + (n-1)*gh = 240 + 240 = 480 px → ×2
    const leftEndY  = startY + n * bh + (n - 1) * gh;   // 695
    const workH     = n * bh;                            // 240 px, same actual work
    const rightEndY = startY + workH;                    // 455

    // ── Vertical separator ────────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── Headers ───────────────────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">TRAVAIL</text>
    <text x="${lx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.muted}">FRAGMENTÉ</text>
    <text x="${rx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">TRAVAIL</text>
    <text x="${rx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">CONTINU</text>`;

    // ── Left column: blocks + dotted lines in the gaps ────────────────────
    let leftSVG = '';
    for (let i = 0; i < n; i++) {
      const by = startY + i * (bh + gh);
      leftSVG += `
    <rect x="${lx - hw}" y="${by}" width="${hw * 2}" height="${bh}"
          rx="5" fill="${p.goldLight}" opacity="0.72"/>`;

      if (i < n - 1) {
        const gy = by + bh;
        // 3 fading dotted lines, suggesting lost time
        for (let d = 1; d <= 3; d++) {
          const dy  = gy + d * (gh / 4);
          const op  = (0.36 - d * 0.08).toFixed(2);
          leftSVG += `
    <line x1="${lx - hw + 12}" y1="${dy}" x2="${lx + hw - 12}" y2="${dy}"
          stroke="${p.muted}" stroke-width="1" stroke-dasharray="5,5" opacity="${op}"/>`;
        }
      }
    }

    // ── Right column: continuous block + saved-time zone ─────────────────
    const savedH  = leftEndY - rightEndY;         // 240 px
    const savedCY = rightEndY + savedH / 2;       // 575
    const rightSVG = `
    <rect x="${rx - hw}" y="${startY}" width="${hw * 2}" height="${workH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>
    <!-- Saved-time zone: dashed outline -->
    <rect x="${rx - hw}" y="${rightEndY + 5}" width="${hw * 2}" height="${savedH - 10}"
          rx="5" fill="none" stroke="${p.muted}" stroke-width="1"
          stroke-dasharray="6,4" opacity="0.22"/>`;

    // ── Label inside the saved zone ───────────────────────────────────────
    const savedLabel = `
    <text x="${rx}" y="${savedCY - 11}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">TEMPS</text>
    <text x="${rx}" y="${savedCY + 11}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">ÉCONOMISÉ</text>`;

    // ── Ratio labels (bottom of each column) ──────────────────────────────
    const ratioY = leftEndY + 48;
    const unitY  = leftEndY + 76;
    const ratioLabels = `
    <text x="${lx}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.muted}" opacity="0.72">×2</text>
    <text x="${lx}" y="${unitY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">plus long</text>
    <text x="${rx}" y="${ratioY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.gold}" opacity="0.88">×1</text>
    <text x="${rx}" y="${unitY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">référence</text>`;

    return sep + headers + leftSVG + rightSVG + savedLabel + ratioLabels;
  },
};
