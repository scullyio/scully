// tslint:disable: no-string-literal
// const puppeteer = require('puppeteer');
import {readFileSync} from 'fs-extra';
import {join} from 'path';
import {Browser, Page} from 'puppeteer';
import {ssl} from '../utils/cli-options';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {scullyConfig} from '../utils/config';
import {logError, yellow} from '../utils/log';
import {launchedBrowser} from './launchedBrowser';

const errorredPages = new Set<string>();

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  const timeOutValueInSeconds = 25;
  let version = '0.0.0';
  try {
    const {version: pkgVersion} = JSON.parse(readFileSync(join('../package.json')).toString());
    version = pkgVersion || '0.0.0';
  } catch {}
  const path = scullyConfig.hostUrl
    ? `${scullyConfig.hostUrl}${route.route}`
    : `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}${route.route}`;
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

    windowSet(page, 'scullyVersion', version);

    /** Inject this into the running page, runs in browser*/
    await page.evaluateOnNewDocument(() => {
      /** set "running" mode */
      window['ScullyIO'] = 'running';
      window.addEventListener('AngularReady', () => {
        window['onCustomEvent']();
      });
    });

    // enter url in page
    await page.goto(path);

    /** wait for page-read, timeout @ 25 seconds. */
    await Promise.race([pageReady, waitForIt(timeOutValueInSeconds * 1000)]);
    // await Promise.race([ waitForIt(120 * 1000)]);

    /** when done, add in some scully content. */
    await page.evaluate(() => {
      /** add a small script tag to set "generated" mode */
      const d = document.createElement('script');
      d.innerHTML = `window['ScullyIO']='generated';`;
      document.head.appendChild(d);
      /** inject the scully version into the body attribute */
      document.body.setAttribute('scully-version', window['scullyVersion']);
    });

    /**
     * The stange notation is needed bcs typescript messes
     * with the `.toString` that evalutate uses
     */
    // pageHtml = await page.content();
    pageHtml = await page.evaluate(`(async () => {
      return new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML
    })()`);
    await page.close();
  } catch (err) {
    // tslint:disable-next-line: no-unused-expression
    page && typeof page.close === 'function' && (await page.close());
    logError(`Puppeteer error while rendering "${yellow(route.route)}"`, err);
    if (errorredPages.has(route.route)) {
      /** we tried this page before, something is really off. Exit stage left. */
      process.exit(15);
    } else {
      errorredPages.add(route.route);
      /** give it a couple of secs */
      await waitForIt(3 * 1000);
      /** retry! */
      return puppeteerRender(route);
    }
  }

  return pageHtml;
};

export function waitForIt(milliSeconds) {
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
