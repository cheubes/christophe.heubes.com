const path = require('path');

module.exports = {
  palette: {
    bg:        '#0D1B2A',
    gold:      '#C9A84C',
    goldLight: '#E8D5A3',
    text:      '#F0EDE4',
    muted:     '#8A9BB0',
  },
  size: {
    w: 1200,
    h: 1200,
  },
  fonts: {
    family:  'Ubuntu',
    regular: 400,
    medium:  500,
    bold:    700,
    dir: path.join(__dirname, 'fonts'),
  },
  outputDir: path.join(__dirname, '..', 'assets', 'illustrations'),
};
