#!/usr/bin/env node
'use strict';

const fs     = require('fs');
const path   = require('path');
const config = require('./config');
const { buildSVG } = require('./templates/base.svg');

// Charger tous les concepts (FR + EN)
const concepts = [
  require('./concepts/paradoxe-jevons'),
  require('./concepts/nombre-dunbar'),
  require('./concepts/lotus-culture-apprenante'),
  require('./concepts/effet-projecteur'),
  require('./concepts/effet-placebo'),
  require('./concepts/effet-pygmalion'),
  require('./concepts/loi-pareto'),
  require('./concepts/ikigai'),
  require('./concepts/loi-carlson'),
  require('./concepts/loi-parkinson'),
  require('./concepts/loi-conway'),
  require('./concepts/marteau-maslow'),
  require('./concepts/loi-goodhart'),
  require('./concepts/effet-dunning-kruger'),
  require('./concepts/loi-hofstadter'),
  require('./concepts/effet-lindy'),
  require('./concepts/loi-hick'),
  require('./concepts/loi-miller'),
  require('./concepts/loi-tesler'),
  require('./concepts/cloture-chesterton'),
  require('./concepts/principe-shirky'),
  require('./concepts/biais-survivant'),
  require('./concepts/ancrage-cognitif'),
  require('./concepts/effet-cadrage'),
  require('./concepts/aversion-pertes'),
  require('./concepts/biais-confirmation'),
  require('./concepts/rasoir-ockham'),
  require('./concepts/principe-hanlon'),
  require('./concepts/loi-brandolini'),
  require('./concepts/carte-territoire'),
  require('./concepts/paradoxe-jevons-en'),
  require('./concepts/nombre-dunbar-en'),
  require('./concepts/lotus-culture-apprenante-en'),
  require('./concepts/effet-projecteur-en'),
  require('./concepts/effet-placebo-en'),
  require('./concepts/effet-pygmalion-en'),
  require('./concepts/loi-pareto-en'),
  require('./concepts/ikigai-en'),
  require('./concepts/loi-carlson-en'),
  require('./concepts/loi-parkinson-en'),
  require('./concepts/loi-conway-en'),
  require('./concepts/marteau-maslow-en'),
  require('./concepts/loi-goodhart-en'),
  require('./concepts/effet-dunning-kruger-en'),
  require('./concepts/loi-hofstadter-en'),
  require('./concepts/effet-lindy-en'),
  require('./concepts/loi-hick-en'),
  require('./concepts/loi-miller-en'),
  require('./concepts/loi-tesler-en'),
  require('./concepts/cloture-chesterton-en'),
  require('./concepts/principe-shirky-en'),
  require('./concepts/biais-survivant-en'),
  require('./concepts/ancrage-cognitif-en'),
  require('./concepts/effet-cadrage-en'),
  require('./concepts/aversion-pertes-en'),
  require('./concepts/biais-confirmation-en'),
  require('./concepts/rasoir-ockham-en'),
  require('./concepts/principe-hanlon-en'),
  require('./concepts/loi-brandolini-en'),
  require('./concepts/carte-territoire-en'),
  require('./concepts/fenetre-overton'),
  require('./concepts/effet-cobra'),
  require('./concepts/loi-kerr'),
  require('./concepts/loi-brooks'),
  require('./concepts/loi-gall'),
  require('./concepts/principe-peter'),
  require('./concepts/loi-metcalfe'),
  require('./concepts/fenetre-overton-en'),
  require('./concepts/effet-cobra-en'),
  require('./concepts/loi-kerr-en'),
  require('./concepts/loi-brooks-en'),
  require('./concepts/loi-gall-en'),
  require('./concepts/principe-peter-en'),
  require('./concepts/loi-metcalfe-en'),
  require('./concepts/effet-halo'),
  require('./concepts/biais-retrospection'),
  require('./concepts/biais-disponibilite'),
  require('./concepts/effet-ringelmann'),
  require('./concepts/paradoxe-abilene'),
  require('./concepts/loi-hyrum'),
  require('./concepts/principe-postel'),
  require('./concepts/effet-halo-en'),
  require('./concepts/biais-retrospection-en'),
  require('./concepts/biais-disponibilite-en'),
  require('./concepts/effet-ringelmann-en'),
  require('./concepts/paradoxe-abilene-en'),
  require('./concepts/loi-hyrum-en'),
  require('./concepts/principe-postel-en'),
];

// Parser les arguments CLI
const args    = process.argv.slice(2);
const slug    = args.find(a => a.startsWith('--concept='))?.split('=')[1];
const targets = slug ? concepts.filter(c => c.id === slug) : concepts;

if (targets.length === 0) {
  console.error(`Concept introuvable : "${slug}"`);
  console.error(`Concepts disponibles : ${concepts.map(c => c.id).join(', ')}`);
  process.exit(1);
}

// Créer le dossier de sortie
fs.mkdirSync(config.outputDir, { recursive: true });

function generate(concept) {
  const { w, h } = config.size;
  const slug = concept.id;

  console.log(`\n→ ${concept.title}`);

  const svgFull = buildSVG(concept, { w, h });
  const svgPath = path.join(config.outputDir, `${slug}.svg`);
  fs.writeFileSync(svgPath, svgFull, 'utf8');
  console.log(`  ✓ SVG : ${svgPath}`);
}

console.log(`\nGénération de ${targets.length} illustration(s)…`);
for (const concept of targets) {
  generate(concept);
}
console.log(`\n✅ Terminé. Fichiers dans : ${config.outputDir}\n`);
