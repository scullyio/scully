// tslint:disable: no-string-literal
// const puppeteer = require('puppeteer');
import {readFileSync} from 'fs-extra';
import {join} from 'path';
import {Browser, Page} from 'puppeteer';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {scullyConfig} from '../utils/config';
import {logError, yellow} from '../utils/log';
import {launchedBrowser} from './launchedBrowser';

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  // const {version} = JSON.parse(readFileSync(join('../package.json')).toString()) || '0.0.0';
  const path = scullyConfig.hostUrl === null ?
    `http://localhost:${scullyConfig.appPort}${route.route}`
    : `${scullyConfig.hostUrl}${route.route}`;
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

    // windowSet(page, 'scullyVersion', version);

    /** Inject this into the running page, runs in browser*/
    await page.evaluateOnNewDocument(() => {
      /** set "running" mode */
      window['ScullyIO'] = 'running';
      window.addEventListener('AngularReady', () => {
        /** add a small script tag to set "generated" mode */
        const d = document.createElement('script');
        d.innerHTML = `window['ScullyIO']='generated';`;
        document.head.appendChild(d);
        document.body.setAttribute('scully-version', window['scullyVersion']);
        window['onCustomEvent']();
      });
    });

    // enter url in page
    await page.goto(path);

    await Promise.race([pageReady, waitForIt(25 * 1000)]);

    /**
     * The stange notation is needed bcs typescript messes
     * with the `.toString` that evalutate uses
     */
    pageHtml = await page.evaluate(`(async () => {
      return new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML
    })()`);
    await page.close();
  } catch (err) {
    // tslint:disable-next-line: no-unused-expression
    page && typeof page.close === 'function' && (await page.close());
    logError(`Puppeteer error while rendering "${yellow(route.route)}"`, err);
  }

  return pageHtml;
};

function waitForIt(milliSeconds) {
  return new Promise(resolve => setTimeout(() => resolve(), milliSeconds));
}

const windowSet = (page, name, value) =>
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        return '${value}'
      }
    })
  `);
