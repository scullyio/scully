import { green, log, logError, logOk, registerPlugin, routeRenderer } from '@scullyio/scully';
import { exec } from 'child_process';
import { LaunchOptions } from 'playwright';
import { playwrightRender, playwrightRenderer } from './lib/plugins-scully-plugin-playwright';
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
  await runScript(`npx playwright install`).catch(() => {
    logError(`Playwright install failed. Please fix the above errors in the app, and run Scully again.`);
    process.exit(0);
  });
  log(`  ${green('✔')} Playwright installation successfully`);
}

registerPlugin('beforeAll', 'installPWDeps', plugin);
/** enable as default routeRenderer */
registerPlugin('scullySystem', routeRenderer, playwrightRenderer, undefined, { replaceExistingPlugin: true });
/** also add as its own thing, perhaps we want to combine later, or use it differently */
registerPlugin('enterprise', playwrightRender, playwrightRenderer);
registerPlugin('enterprise', 'getPWLaunchedBrowser', async () => launchedBrowser$)
registerPlugin('beforeAll', 'startLaunching the browser', async () => {
  logOk('Playwright is being launched')
  launchedBrowser();
})


export { playwrightRender } from './lib/plugins-scully-plugin-playwright';
export type BrowserLaunchOptions = LaunchOptions & { browser: string };
