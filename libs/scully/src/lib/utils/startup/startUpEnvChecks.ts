import { execSync } from 'child_process';
import events from 'events';
import { existsSync } from 'fs';
import { release } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { disableProjectFolderCheck } from '../cli-options.js';
import { logError, logWarn, yellow } from '../log.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const environmentChecks = () => {
  /** the default of 10 is too shallow for generating pages. */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  events.defaultMaxListeners = 100;
  const NODE_VERSION = 14;

  if (!disableProjectFolderCheck && !__dirname.includes(process.cwd())) {
    /** started from outside project folder, _or_ powershell with uppercase pathname */
    if (existsSync('./node_modules/@scullyio/scully/scully.js')) {
      execSync('node ./node_modules/@scullyio/scully/scully.js', {
        cwd: './',
        stdio: 'inherit',
      });
    } else {
      logError(`
--------------------------------------------------------------------------
you started scully outside of a scully project-folder,
or didn't install packages in this folder.
We can't find your local copy to start.
This can also happen on windows with PowerShell and mixed case path-names
--------------------------------------------------------------------------`);
    }
    process.exit(0);
  }

  // tslint:disable-next-line:radix
  if (parseInt(process.version.match(/^v(\d+\.\d+)/)[1]) < NODE_VERSION) {
    logError(`
**********************************************************
**********************************************************
You are using Node "${process.version}", Scully support
Node version ${NODE_VERSION} or higher please check the Minimal setup required
https://scully.io/docs/learn/getting-started/requirements/
**********************************************************
**********************************************************
      `);
    process.exit(0);
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const clientOS = release().toLocaleLowerCase();
  if (clientOS.includes('microsoft') && process.platform === 'linux') {
    logWarn(`
**********************************************************
**********************************************************
You are using "${yellow(`WSL`)}" as a terminal, if you get an
error please read the pre-requisites for Microsoft WSL.
https://scully.io/docs/learn/getting-started/installation/
**********************************************************
**********************************************************
      `);
  }
};
