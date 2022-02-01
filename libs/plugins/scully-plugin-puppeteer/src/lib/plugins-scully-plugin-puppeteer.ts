// tslint:disable: no-string-literal

import { createFolderFor, HandledRoute, logError, logWarn, scullyConfig, title404, waitForIt, yellow } from '@scullyio/scully';
import { captureException } from '@scullyio/scully/src/lib/utils/captureMessage';
import { showBrowser, ssl } from '@scullyio/scully/src/lib/utils/cli-options';
import { readFileSync } from 'fs-extra';
import { jsonc } from 'jsonc';
import { join } from 'path';
import { Browser, Page, Serializable } from 'puppeteer';
import { filter, interval, Subject, switchMap, take } from 'rxjs';
import { launchedBrowser, reLaunch } from './launchedBrowser';

const errorredPages = new Map<string, number>();

let version = '0.0.0';
try {
  const pkg = join(__dirname, '../../../package.json');
  // console.log(pkg)
  version = jsonc.parse(readFileSync(pkg).toString()).version || '0.0.0';
} catch (e) {
  // this is only for internals builds
  // version = jsonc.parse(readFileSync(join(__dirname, '../../../package.json')).toString()).version || '0.0.0';
}

export const puppeteerRender = async (route: HandledRoute): Promise<string> => {
  const timeOutValueInSeconds = 25;
  const pageLoaded = new Subject<void>();
  const path = route.rawRoute
    ? route.rawRoute
    : scullyConfig.hostUrl
    ? `${scullyConfig.hostUrl}${route.route}`
    : `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}${route.route}`;

  let pageHtml: string;
  let browser: Browser;
  let page: Page;
  try {
    browser = await launchedBrowser().catch((e) => {
      logError('Pupeteer died?', e);
      captureException(e);
      return Promise.reject(e);
    });
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

    if (scullyConfig.ignoreResourceTypes && scullyConfig.ignoreResourceTypes.length > 0) {
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

    pageHtml = await page.content();

    /** Check for undefined content and re-try */
    if ([undefined, null, '', 'undefined', 'null'].includes(pageHtml)) {
      throw new Error(`Route "${route.route}" render to ${path}`);
    }

    const firstTitle = await page.evaluate(() => {
      const d = document.querySelector('h1');
      return (d && d.innerText) || '';
    });
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
      // if (false) {
      page.evaluate(
        "console.log('\\n\\n------------------------------\\nScully is done, page left open for 120 seconds for inspection\\n------------------------------\\n\\n')"
      );
      //* don't close the browser, but leave it open for inspection for 120 secs
      waitForIt(120 * 1000).then(() => page.close());
    } else {
      await page.close();
    }
  } catch (err) {
    const { message } = err;
    // tslint:disable-next-line: no-unused-expression
    page && typeof page.close === 'function' && (await page.close());
    logWarn(`Puppeteer error while rendering "${yellow(route.route)}"`, err, ' we will retry rendering this page up to 3 times.');
    if (message && message.includes('closed')) {
      /** signal the launched to relaunch puppeteer, as it has likely died here. */
      reLaunch('closed');
      // return puppeteerRender(route);
    }
    if (errorredPages.has(route.route) && errorredPages.get(route.route) > 2) {
      logError(`Puppeteer error while rendering "${yellow(route.route)}"`, err, ' we retried rendering this page 3 times.');
      /** we tried this page before, something is really off. Exit stage left. */
      captureException(err);
      process.exit(15);
    } else {
      const count = errorredPages.get(route.route) || 0;
      errorredPages.set(route.route, count + 1);
      /** give it a couple of secs */
      await waitForIt(3 * 1000);
      /** retry! */
      return puppeteerRender(route);
    }
  }

  return pageHtml;
};

const windowSet = (page: Page, name: string, value: Serializable) =>
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        return JSON.parse('${JSON.stringify(value)}')
      }
    })
  `);
