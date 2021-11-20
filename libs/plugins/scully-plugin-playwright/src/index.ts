import { findPlugin, log, logError, logOk, registerPlugin, routeRenderer, yellow } from '@scullyio/scully';
import { exec } from 'child_process';
import { LaunchOptions } from 'playwright';
import { playwrightRender } from './lib/plugins-scully-plugin-playwright';
import { launchedBrowser, launchedBrowser$ } from './lib/plugins-scully-plugin-playwright-utils';

async function runScript(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        log(stderr);
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  });
}
const plugin = async () => {

  await runScript(`npx playwright install"`).catch(() => {
    logError(`Couldn't install ${yellow('playwright')} dependencys. Please fix the above errors in the app, and run Scully again.`);
    process.exit(0);
  });
}
export function enablePW() {
  registerPlugin('beforeAll', 'installPWDeps', plugin);

  registerPlugin('scullySystem', routeRenderer, findPlugin(playwrightRender, undefined, false), undefined, { replaceExistingPlugin: true });

  registerPlugin('enterprise', 'getPWLaunchedBrowser', async () => launchedBrowser$)
  registerPlugin('beforeAll', 'startLaunching the browser', async () => {
    logOk('Playwright is being launched')
    launchedBrowser();
  })
}

export { playwrightRender } from './lib/plugins-scully-plugin-playwright';
export type BrowserLaunchOptions = LaunchOptions & { browser: string };