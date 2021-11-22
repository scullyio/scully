import { logOk, routeRenderer, registerPlugin } from '@scullyio/scully';
import { launchedBrowser } from './lib/launchedBrowser';
import { puppeteerRender } from './lib/plugins-scully-plugin-puppeteer';
import { launchedBrowser$ } from './lib/launchedBrowser';

/** little hack to be able to share the browser instance */
registerPlugin('enterprise','getPPTLaunchedBrowser',async () => launchedBrowser$)
/** instead of always starting, now use the beforeAll plugin */
registerPlugin('beforeAll', 'startLaunching the browser', async () => {
  logOk('Puppeteer is being launched')
  launchedBrowser();
})
/** use ppt as 'default' renderer plugin */
registerPlugin('scullySystem', routeRenderer, puppeteerRender);
