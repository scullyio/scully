import { exec } from 'child_process';
import { join } from 'path';
import { yellow, green } from './cmdLineOptions.js';
import { folder, ReleaseData } from './utils.js';



export async function publishPackage(tag: string, toRelease: ReleaseData, dryRun = true, local = true) {
  let cmd = `npm publish --access public --ignore-scripts --tag ${tag}`
  if (dryRun) {
    cmd = `${cmd} --dry-run`
  }
  if (local) {
    cmd = `${cmd} --registry http://localhost:4873/`
  }

  const { nodeError, stdOut, stdErr } = await new Promise((resolve, reject) => {
    // resolve({
    //   nodeError: undefined,
    //   stdOut: '',
    //   stdErr: '',
    // });
    exec(cmd, { cwd: join(folder, toRelease.dist) }, (nodeError, stdOut, stdErr) => {
      // console.log({nodeError, stdOut, stdErr})
      resolve({ nodeError, stdOut, stdErr });
    });
  });
  const hasErrror = stdErr?.includes('npm ERR! code');
  if (hasErrror) {
    console.log(`
=========================================
  Error during npm publish of ${yellow(toRelease.name)}:
    ${stdErr}
  This library is not published
=========================================
    `);
    /** fail the process if we cant publish somehow. */
    // process.exit(15);
  } else {
    console.log(`npm released ${green(toRelease.name)} with version ${yellow(toRelease.version)} under the ${yellow(tag)} tag`);
  }
}
