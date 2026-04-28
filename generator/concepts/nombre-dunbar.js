module.exports = {
  id:          'nombre-dunbar',
  title:       'Nombre de Dunbar',
  category:    'Management & Organisations',
  tagline:     'Nous ne pouvons maintenir que ~150 relations stables.',
  description: "Robin Dunbar a identifié une limite cognitive au nombre de relations sociales stables qu'un individu peut entretenir, organisées en cercles concentriques.",

  render(ctx) {
    const { palette: p } = ctx;

    // Centre légèrement au-dessus du milieu de la zone principale
    const cx = 600;
    const cy = 540;

    // Cercles dessinés du plus grand au plus petit :
    // chaque cercle intérieur "couvre" le remplissage du précédent.
    //
    // cy = 540  →  sommets des cercles :
    //   r=385 → y_top = 155
    //   r=285 → y_top = 255
    //   r=185 → y_top = 355
    //   r=90  → y_top = 450
    //
    // Bandes (zone "top") :
    //   150 Relations    : y ∈ [155, 255]
    //   50  Amis         : y ∈ [255, 355]
    //   15  Amis proches : y ∈ [355, 450]
    //   5   Intimes      : y ∈ [450, 630]

    const rings = [
      { r: 385, stroke: '#3a5068',   sw: 1.5 },
      { r: 285, stroke: p.muted,     sw: 2.0 },
      { r: 185, stroke: p.goldLight, sw: 2.0 },
      { r: 90,  stroke: p.gold,      sw: 3.0 },
    ];

    // numY = baseline du numéro, centré dans la portion haute de chaque bande
    const bands = [
      { num: '150', grp: 'Relations',    numY: 205, numC: p.muted,     grpC: p.muted  },
      { num: '50',  grp: 'Amis',         numY: 305, numC: p.text,      grpC: p.muted  },
      { num: '15',  grp: 'Amis proches', numY: 403, numC: p.goldLight, grpC: p.text   },
      { num: '5',   grp: 'Intimes',      numY: 486, numC: p.gold,      grpC: p.text   },
    ];

    let svg = '';

    // Cercles (extérieur → intérieur)
    for (const ring of rings) {
      svg += `\n    <circle cx="${cx}" cy="${cy}" r="${ring.r}"
            fill="${p.bg}" stroke="${ring.stroke}" stroke-width="${ring.sw}"/>`;
    }

    // Point central
    svg += `\n    <circle cx="${cx}" cy="${cy}" r="7" fill="${p.gold}"/>`;

    // Labels dans la portion haute de chaque bande
    for (const b of bands) {
      svg += `
    <text x="${cx}" y="${b.numY}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="700" font-size="46"
          fill="${b.numC}">${b.num}</text>
    <text x="${cx}" y="${b.numY + 38}" text-anchor="middle"
          font-family="Ubuntu, sans-serif" font-weight="400" font-size="22"
          fill="${b.grpC}">${b.grp}</text>`;
    }

    return svg;
  },
};
