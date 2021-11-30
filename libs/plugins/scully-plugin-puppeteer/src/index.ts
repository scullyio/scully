import { logOk, routeRenderer, registerPlugin } from '@scullyio/scully';
import { launchedBrowser } from './lib/launchedBrowser.js';
import { puppeteerRender } from './lib/plugins-scully-plugin-puppeteer.js';
import { launchedBrowser$ } from './lib/launchedBrowser.js';

/** little hack to be able to share the browser instance */
registerPlugin('enterprise', 'getPPTLaunchedBrowser', async () => launchedBrowser$);
/** instead of always starting, now use the beforeAll plugin */
registerPlugin('beforeAll', 'startLaunching the browser', async () => {
  logOk('Puppeteer is being launched');
  launchedBrowser();
});
/** use ppt as 'default' renderer plugin */
registerPlugin('scullySystem', routeRenderer, puppeteerRender);
