import { green, yellow } from 'chalk';
import { exec } from 'child_process';
import { join } from 'path';
import { folder, ReleaseData } from './utils';

export async function publishPackage(tag: string, toRelease: ReleaseData, dryRun = true) {
  const cmd = `npm publish --access-public --ignore-scripts --tag ${tag}` + (dryRun ? ' --dry-run' : '');
  const { nodeError, stdOut, stdErr } = await new Promise((resolve, reject) => {
    // resolve({
    //   nodeError: undefined,
    //   stdOut: '',
    //   stdErr: '',
    // });
    exec(cmd, { cwd: join(folder, toRelease.dist) }, (nodeError, stdOut, stdErr) => {
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
