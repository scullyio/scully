const exec = require('child_process').exec;
export const scullyInstall = () => {
  // tslint:disable-next-line:no-console
  console.info('Installing Scully');
  exec('npm install @scullyio/scully', (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('Error: ' + error);
      return;
    }
  });
  /*
  exec('npm install @scullyio/create',
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log('Error: ' + error);
        return;
      }
    });
*/
};
