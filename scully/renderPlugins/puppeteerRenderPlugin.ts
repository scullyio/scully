// tslint:disable: no-string-literal
// const puppeteer = require('puppeteer');
import {readFileSync} from 'fs-extra';
import {jsonc} from 'jsonc';
import {join} from 'path';
import {Browser, Page, Serializable} from 'puppeteer';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {ssl} from '../utils/cli-options';
import {scullyConfig} from '../utils/config';
import {logError, yellow} from '../utils/log';
import {launchedBrowser} from './launchedBrowser';
import {createFolderFor} from '../utils';

const errorredPages = new Set<string>();

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  const timeOutValueInSeconds = 25;
  let version = '0.0.0';
  try {
    const {version: pkgVersion} = jsonc.parse(readFileSync(join(__dirname, '../package.json')).toString());
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

    if (route.config && route.config.manualIdleCheck) {
      // windowSet(page, 'ScullyIO-ManualIdle', true);
      route.exposeToPage = route.exposeToPage || {};
      route.exposeToPage.manualIdle = true;
    }

    if (scullyConfig.inlineStateOnly) {
      route.injectToPage = route.injectToPage || {};
      route.injectToPage.inlineStateOnly = true;
    }

    if (route.exposeToPage !== undefined) {
      windowSet(page, 'ScullyIO-exposed', route.exposeToPage);
    }
    if (route.injectToPage !== undefined) {
      windowSet(page, 'ScullyIO-injected', route.injectToPage);
    }

    /** Inject this into the running page, runs in browser */
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
      const head = document.head;
      /** add a small script tag to set "generated" mode */
      const d = document.createElement('script');
      d.innerHTML = `window['ScullyIO']='generated';`;
      if (window['ScullyIO-injected']) {
        /** and add the injected data there too. */
        d.innerHTML += `window['ScullyIO-injected']=${JSON.stringify(window['ScullyIO-injected'])};`;
      }
      const m = document.createElement('meta');
      m.name = 'generator';
      m.content = `Scully ${window['scullyVersion']}`;
      head.appendChild(d);
      head.insertBefore(m, head.firstChild);
      /** inject the scully version into the body attribute */
      document.body.setAttribute('scully-version', window['scullyVersion']);
    });

    /**
     * The stange notation is needed bcs typescript messes
     * with the `.toString` that evalutate uses
     */
    pageHtml = await page.content();
    /** save thumbnail to disk code */
    if (scullyConfig.thumbnails) {
      const file = join(scullyConfig.outDir, route.route, '/thumbnail.jpg');
      createFolderFor(file);
      await page.screenshot({path: file});
    }
    // pageHtml = await page.evaluate(`(async () => {
    //   return new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML
    // })()`);
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

export function waitForIt(milliSeconds: number) {
  return new Promise(resolve => setTimeout(() => resolve(), milliSeconds));
}

const windowSet = (page: Page, name: string, value: Serializable) =>
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        return JSON.parse('${JSON.stringify(value)}')
      }
    })
  `);
