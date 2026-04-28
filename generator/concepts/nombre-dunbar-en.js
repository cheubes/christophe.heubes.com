module.exports = {
  id:          'nombre-dunbar-en',
  title:       "Dunbar's Number",
  category:    'Management & Organisations',
  tagline:     'We can only maintain ~150 stable relationships.',
  description: "Robin Dunbar identified a cognitive limit to the number of stable social relationships an individual can maintain, organised in concentric circles.",

  render(ctx) {
    const { palette: p } = ctx;

    const cx = 600;
    const cy = 540;

    // Rings drawn outer → inner
    // cy=540 → ring tops: r=385→y=155, r=285→y=255, r=185→y=355, r=90→y=450
    // Band top spans:
    //   150 Acquaintances : [155, 255]
    //   50  Friends       : [255, 355]
    //   15  Close Friends : [355, 450]
    //   5   Inner Circle  : [450, 630]

    const rings = [
      { r: 385, stroke: '#3a5068',   sw: 1.5 },
      { r: 285, stroke: p.muted,     sw: 2.0 },
      { r: 185, stroke: p.goldLight, sw: 2.0 },
      { r: 90,  stroke: p.gold,      sw: 3.0 },
    ];

    const bands = [
      { num: '150', grp: 'Acquaintances', numY: 205, numC: p.muted,     grpC: p.muted  },
      { num: '50',  grp: 'Friends',       numY: 305, numC: p.text,      grpC: p.muted  },
      { num: '15',  grp: 'Close Friends', numY: 403, numC: p.goldLight, grpC: p.text   },
      { num: '5',   grp: 'Inner Circle',  numY: 486, numC: p.gold,      grpC: p.text   },
    ];

    let svg = '';

    for (const ring of rings) {
      svg += `\n    <circle cx="${cx}" cy="${cy}" r="${ring.r}"
            fill="${p.bg}" stroke="${ring.stroke}" stroke-width="${ring.sw}"/>`;
    }

    svg += `\n    <circle cx="${cx}" cy="${cy}" r="7" fill="${p.gold}"/>`;

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
