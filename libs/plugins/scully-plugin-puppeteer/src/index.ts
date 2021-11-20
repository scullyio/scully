import { logOk, routeRenderer, registerPlugin } from '@scullyio/scully';
import { launchedBrowser } from './lib/launchedBrowser';
import { puppeteerRender } from './lib/plugins-scully-plugin-puppeteer';
import { launchedBrowser$ } from './lib/launchedBrowser';

registerPlugin('enterprise','getPPTLaunchedBrowser',async () => launchedBrowser$)
registerPlugin('beforeAll', 'startLaunching the browser', async () => {
  logOk('Puppeteer is being launched')
  launchedBrowser();
})
registerPlugin('scullySystem', routeRenderer, puppeteerRender);
