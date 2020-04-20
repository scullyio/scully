const exec = require('child_process').exec;
export const scullyInstall = () => {
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
