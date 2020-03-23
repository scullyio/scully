const fx = require('fs-extra');
const {join} = require('path');

fx.copyFileSync(
  join(__dirname, 'package.json'),
  join(__dirname, '..', '..', 'dist', 'scully-plugin-flash-prevention', 'package.json')
);
fx.copyFileSync(
  join(__dirname, 'README.md'),
  join(__dirname, '..', '..', 'dist', 'scully-plugin-flash-prevention', 'README.md')
);

const fppSrc = fx.readFileSync(
  join(__dirname, '..', '..', 'dist', 'scully-plugin-flash-prevention', 'src', 'flash-prevention.plugin.js')
);
const modSrc = fppSrc.toString('UTF-8').replace('../../../dist/scully', '@scullyio/scully');

fx.writeFileSync(
  join(__dirname, '..', '..', 'dist', 'scully-plugin-flash-prevention', 'src', 'flash-prevention.plugin.js'),
  modSrc,
  'UTF-8'
);
