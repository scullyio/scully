// tslint:disable: no-string-literal
// const puppeteer = require('puppeteer');
import { readFileSync } from 'fs-extra';
import { jsonc } from 'jsonc';
import { join } from 'path';
import { Browser, Page, Serializable } from 'puppeteer';
import { interval, Subject } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { HandledRoute } from '../routerPlugins/addOptionalRoutesPlugin';
import { createFolderFor } from '../utils';
import { ssl, showBrowser } from '../utils/cli-options';
import { scullyConfig } from '../utils/config';
import { logError, yellow, logWarn } from '../utils/log';
import { launchedBrowser } from './launchedBrowser';
import { title404 } from '../utils/serverstuff/handleUnknownRoute';

const errorredPages = new Set<string>();

let version = '0.0.0';
try {
  const pkg = join(__dirname, '../../package.json');
  // console.log(pkg)
  version = jsonc.parse(readFileSync(pkg).toString()).version || '0.0.0';
} catch (e) {
  // this is only for internals builds
  // version = jsonc.parse(readFileSync(join(__dirname, '../../../package.json')).toString()).version || '0.0.0';
}

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  const timeOutValueInSeconds = 25;
  const pageLoaded = new Subject<void>();
  const path = scullyConfig.hostUrl
    ? `${scullyConfig.hostUrl}${route.route}`
    : `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${
        scullyConfig.appPort
      }${route.route}`;
  let pageHtml: string;
  let browser: Browser;
  let page: Page;
  try {
    // open the headless browser
    browser = await launchedBrowser();
    // open a new page
    page = await browser.newPage();

    let resolve;
    const pageReady = new Promise((r) => (resolve = r));

    if (scullyConfig.bareProject) {
      await page.setRequestInterception(true);
      page.on('request', registerRequest);
      page.on('requestfinished', unRegisterRequest);
      page.on('requestfailed', unRegisterRequest);

      const requests = new Set();

      // eslint-disable-next-line no-inner-declarations
      function registerRequest(request) {
        request.continue();
        requests.add(requests);
      }

      // eslint-disable-next-line no-inner-declarations
      function unRegisterRequest(request) {
        // request.continue();
        requests.delete(requests);
      }

      pageLoaded
        .pipe(
          switchMap(() => interval(50)),
          filter(() => requests.size === 0),
          filter(() => route.config && route.config.manualIdleCheck),
          take(1)
        )
        .subscribe({
          complete: () => {
            console.log('page should be idle');
            resolve();
          },
        });
    }

    if (
      scullyConfig.ignoreResourceTypes &&
      scullyConfig.ignoreResourceTypes.length > 0
    ) {
      await page.setRequestInterception(true);
      page.on('request', checkIfRequestShouldBeIgnored);

      // eslint-disable-next-line no-inner-declarations
      function checkIfRequestShouldBeIgnored(request) {
        if (scullyConfig.ignoreResourceTypes.includes(request.resourceType())) {
          request.abort();
        } else {
          request.continue();
        }
      }
    }

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
    pageLoaded.next();

    await Promise.race([pageReady, waitForIt(timeOutValueInSeconds * 1000)]);

    /** when done, add in some scully content. */
    await page.evaluate(() => {
      const head = document.head;
      /** add a small script tag to set "generated" mode */
      const d = document.createElement('script');
      d.innerHTML = `window['ScullyIO']='generated';`;
      if (window['ScullyIO-injected']) {
        /** and add the injected data there too. */
        d.innerHTML += `window['ScullyIO-injected']=${JSON.stringify(
          window['ScullyIO-injected']
        )};`;
      }
      const m = document.createElement('meta');
      m.name = 'generator';
      m.content = `Scully ${window['scullyVersion']}`;
      head.appendChild(d);
      head.insertBefore(m, head.firstChild);
      /** inject the scully version into the body attribute */
      document.body.setAttribute('scully-version', window['scullyVersion']);
    });

    pageHtml = await page.content();

    /** Check for undefined content and re-try */
    if ([undefined, null, '', 'undefined', 'null'].includes(pageHtml)) {
      throw new Error(`Route "${route.route}" render to ${path}`);
    }

    const firstTitle = await page.evaluate(
      () => document.querySelector('h1').innerText
    );
    if (firstTitle === title404) {
      logWarn(`Route "${yellow(route.route)}" not provided by angular app`);
    }

    /** save thumbnail to disk code */
    if (scullyConfig.thumbnails) {
      const file = join(scullyConfig.outDir, route.route, '/thumbnail.jpg');
      createFolderFor(file);
      await page.screenshot({ path: file });
    }
    // pageHtml = await page.evaluate(`(async () => {
    //   return new XMLSerializer().serializeToString(document.doctype) + document.documentElement.outerHTML
    // })()`);
    /**
     * when the browser is shown, use a 2 minute timeout, otherwise
     * wait for page-read || timeout @ 25 seconds.
     */
    if (showBrowser) {
      page.evaluate(
        "console.log('\\n\\n------------------------------\\nScully is done, page left open for 120 seconds for inspection\\n------------------------------\\n\\n')"
      );
      //* don't close the browser, but leave it open for inspection for 120 secs
      waitForIt(120 * 1000).then(() => page.close());
    } else {
      await page.close();
    }
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
  return new Promise((resolve) => setTimeout(() => resolve(), milliSeconds));
}

const windowSet = (page: Page, name: string, value: Serializable) =>
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        return JSON.parse('${JSON.stringify(value)}')
      }
    })
  `);
