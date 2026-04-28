const fs = require('fs');
const path = require('path');
const config = require('./config');

/**
 * Charge les fonts Ubuntu TTF depuis generator/fonts/
 * et retourne un bloc <style> SVG avec @font-face base64.
 */
function buildFontStyle() {
  const fontsDir = config.fonts.dir;
  const files = {
    regular: 'Ubuntu-Regular.ttf',
    medium:  'Ubuntu-Medium.ttf',
    bold:    'Ubuntu-Bold.ttf',
  };

  const faces = Object.entries(files).map(([variant, filename]) => {
    const weight = config.fonts[variant];
    const filepath = path.join(fontsDir, filename);
    if (!fs.existsSync(filepath)) {
      throw new Error(`Font manquante : ${filepath}\nTéléchargez les fonts Ubuntu TTF dans generator/fonts/ (voir README).`);
    }
    const b64 = fs.readFileSync(filepath).toString('base64');
    return `  @font-face {
    font-family: 'Ubuntu';
    font-weight: ${weight};
    font-style: normal;
    src: url('data:font/truetype;base64,${b64}') format('truetype');
  }`;
  }).join('\n');

  return `<style>\n${faces}\n</style>`;
}

/**
 * Retourne les chemins des fichiers TTF pour resvg-js.
 */
function getFontPaths() {
  const fontsDir = config.fonts.dir;
  return [
    path.join(fontsDir, 'Ubuntu-Regular.ttf'),
    path.join(fontsDir, 'Ubuntu-Medium.ttf'),
    path.join(fontsDir, 'Ubuntu-Bold.ttf'),
  ].filter(p => fs.existsSync(p));
}

module.exports = { buildFontStyle, getFontPaths };
