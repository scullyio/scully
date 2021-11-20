import { findPlugin, logOk, registerPlugin, routeRenderer } from '@scullyio/scully';
import { playwrightRender } from './lib/plugins-scully-plugin-playwright';
import { launchedBrowser, launchedBrowser$ } from './lib/plugins-scully-plugin-playwright-utils';
import { LaunchOptions } from 'playwright'

export function enablePW() {
  registerPlugin('scullySystem', routeRenderer, findPlugin(playwrightRender, undefined, false), undefined, { replaceExistingPlugin: true });

  registerPlugin('enterprise', 'getPWLaunchedBrowser', async () => launchedBrowser$)
  registerPlugin('beforeAll', 'startLaunching the browser', async () => {
    logOk('Playwright is being launched')
    launchedBrowser();
  })
}

export { playwrightRender } from './lib/plugins-scully-plugin-playwright';
export type BrowserLaunchOptions = LaunchOptions & { browser: string };