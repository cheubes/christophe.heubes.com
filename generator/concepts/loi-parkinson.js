module.exports = {
  id:          'loi-parkinson',
  title:       'Loi de Parkinson',
  category:    'Management & Organisations',
  tagline:     'Le travail se dilate pour remplir tout le temps disponible.',
  description: "Formulée par C. Northcote Parkinson en 1955 : quelle que soit sa complexité réelle, une tâche occupe toujours la totalité du temps qu'on lui alloue.",

  render(ctx) {
    const { palette: p } = ctx;

    // ── Colonnes ──────────────────────────────────────────────────────────
    const lx = 300, rx = 900, hw = 58;

    // ── Blocs ─────────────────────────────────────────────────────────────
    const startY  = 215;
    const coreH   = 200;   // travail réel — identique dans les deux cas
    const expH    = 300;   // expansion Parkinson (×1.5 de travail supplémentaire)
    const coreEnd = startY + coreH;   // 415 — niveau "résultat"
    const rightEnd = coreEnd + expH;  // 715 — fin du délai long

    // ── Séparateur vertical ───────────────────────────────────────────────
    const sep = `
    <line x1="600" y1="115" x2="600" y2="876"
          stroke="${p.muted}" stroke-width="1" opacity="0.18"/>`;

    // ── En-têtes de colonnes ──────────────────────────────────────────────
    const headers = `
    <text x="${lx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">DÉLAI</text>
    <text x="${lx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.gold}">COURT</text>
    <text x="${rx}" y="155" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="2" fill="${p.muted}">DÉLAI</text>
    <text x="${rx}" y="182" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="22"
          letter-spacing="2.5" fill="${p.muted}">LONG</text>`;

    // ── Bloc gauche : travail concentré dans le délai court ───────────────
    const leftBlock = `
    <rect x="${lx - hw}" y="${startY}" width="${hw * 2}" height="${coreH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>`;

    // ── Bloc droit : même travail réel + zone d'expansion ─────────────────
    const rightBlock = `
    <!-- Même noyau de travail qu'à gauche -->
    <rect x="${rx - hw}" y="${startY}" width="${hw * 2}" height="${coreH}"
          rx="5" fill="${p.gold}" opacity="0.88"/>
    <!-- Zone d'expansion — le travail se dilate -->
    <rect x="${rx - hw}" y="${coreEnd + 3}" width="${hw * 2}" height="${expH - 6}"
          rx="5" fill="${p.goldLight}" opacity="0.12"/>
    <rect x="${rx - hw}" y="${coreEnd + 3}" width="${hw * 2}" height="${expH - 6}"
          rx="5" fill="none" stroke="${p.muted}" stroke-width="1"
          stroke-dasharray="6,4" opacity="0.28"/>`;

    // ── Marqueur "RÉSULTAT IDENTIQUE" au niveau coreEnd ───────────────────
    //   Deux petits traits horizontaux dans chaque colonne, label centré
    const connector = `
    <line x1="${lx - hw - 10}" y1="${coreEnd}" x2="${lx + hw + 10}" y2="${coreEnd}"
          stroke="${p.goldLight}" stroke-width="2" opacity="0.55"/>
    <line x1="${rx - hw - 10}" y1="${coreEnd}" x2="${rx + hw + 10}" y2="${coreEnd}"
          stroke="${p.goldLight}" stroke-width="2" opacity="0.55"/>
    <text x="600" y="${coreEnd - 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="500" font-size="15"
          letter-spacing="1.5" fill="${p.goldLight}" opacity="0.68">RÉSULTAT IDENTIQUE</text>`;

    // ── Label dans la zone d'expansion ───────────────────────────────────
    const expMidY = coreEnd + expH / 2;
    const expLabel = `
    <text x="${rx}" y="${expMidY - 10}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">TRAVAIL</text>
    <text x="${rx}" y="${expMidY + 12}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="15"
          letter-spacing="1.8" fill="${p.muted}" opacity="0.50">DILATÉ</text>`;

    // ── Ratios en bas de chaque colonne ──────────────────────────────────
    const ratioLabels = `
    <text x="${lx}" y="${coreEnd + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.gold}" opacity="0.88">×1</text>
    <text x="${lx}" y="${coreEnd + 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">référence</text>
    <text x="${rx}" y="${rightEnd + 44}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="48"
          fill="${p.muted}" opacity="0.72">×2.5</text>
    <text x="${rx}" y="${rightEnd + 72}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="17"
          letter-spacing="1" fill="${p.muted}" opacity="0.55">plus long</text>`;

    return sep + headers + leftBlock + rightBlock + connector + expLabel + ratioLabels;
  },
};
