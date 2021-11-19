import { logOk, puppeteerRender, registerPlugin } from '@scullyio/scully';
import { launchedBrowser } from './lib/launchedBrowser';
import { plugin } from './lib/plugins-scully-plugin-puppeteer';


registerPlugin('beforeAll','startLaunching the browser', async() => {
  logOk('Puppeteer is being launced')
  launchedBrowser();
})
registerPlugin('scullySystem', puppeteerRender, plugin);
