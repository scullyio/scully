// const puppeteer = require('puppeteer');
import {Browser, Page} from 'puppeteer';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {launchedBrowser} from './launchedBrowser';
import {scullyConfig} from '../utils/config';
import {logError, yellow} from '../utils/log';

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  const path = `http://localhost:${scullyConfig.appPort}${route.route}`;
  let pageHtml: string;
  let browser: Browser;
  let page: Page;
  try {
    // open the headless browser
    browser = await launchedBrowser();
    // open a new page
    page = await browser.newPage();

    let resolve;
    const pageReady = new Promise(r => (resolve = r));

    /** this will be called from the browser, but runs in node */
    await page.exposeFunction('onCustomEvent', () => {
      resolve();
    });

    /** Inject this into the running page, runs in browser*/
    await page.evaluateOnNewDocument(() => {
      window.addEventListener('AngularReady', () => {
        // setTimeout(() => window['onCustomEvent'](),10000);
        window['onCustomEvent']();
      });
    });

    // enter url in page
    await page.goto(path);

    await Promise.race([pageReady, waitForIt(25 * 1000)] );

    /**
     * The stange notation is needed bcs typescript messes
     * with the `.toString` that evalutate uses
     */
    pageHtml = await page.evaluate(`(async () => {
      return document.documentElement.outerHTML
    })()`);
    await page.close();
  } catch (err) {
    // tslint:disable-next-line: no-unused-expression
    page && typeof page.close === 'function' && (await page.close());
    logError(`Puppeteer error while rendering "${yellow(route.route)}"`);
  }

  return pageHtml;
};

function waitForIt(milliSeconds) {
  return new Promise(resolve => setTimeout(() => resolve(), milliSeconds));
}
