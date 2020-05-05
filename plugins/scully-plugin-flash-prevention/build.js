const fx = require('fs-extra');
const {join} = require('path');
const args = require('yargs');

fx.copyFileSync(
  join(__dirname, 'package.json'),
  join(__dirname, '..', '..', 'dist', 'scullyio', 'scully-plugin-flash-prevention', 'package.json')
);
fx.copyFileSync(
  join(__dirname, 'README.md'),
  join(__dirname, '..', '..', 'dist', 'scullyio', 'scully-plugin-flash-prevention', 'README.md')
);

// if (args.argv.deploy === 'true') {
//   const fppSrc = fx.readFileSync(
//     join(__dirname, '..', '..', 'dist', 'scully-plugin-flash-prevention', 'src', 'flash-prevention.plugin.js')
//   );
//   const modSrc = fppSrc.toString('UTF-8').replace('../@scullyio/scully', '@scullyio/scully');

//   fx.writeFileSync(
//     join(
//       __dirname,
//       '..',
//       '..',
//       'dist',
//       'scully-plugin-flash-prevention',
//       'src',
//       'flash-prevention.plugin.js'
//     ),
//     modSrc,
//     'UTF-8'
//   );
// }
