import { join } from 'path';
import { Browser, Page } from 'playwright';
import { registerPlugin, scullySystem } from '../pluginManagement';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { createFolderFor } from '../utils';
import { showBrowser, ssl } from '../utils/cli-options';
import { scullyConfig } from '../utils/config';
import { logError, logWarn, yellow } from '../utils/log';
import { launchedBrowser, reLaunch, waitForIt } from './playwrightUtils';

// export const playwrightRender = Symbol('playwrightRender');
let version = '0.0.0';
export const title404 = '404 - URL not provided in the app Scully is serving';
const errorredPages = new Map<string, number>();
export const playwrightRender = 'playwrightRender' as const;

export const plugin = async (route: HandledRoute): Promise<string> => {
  const path = route.rawRoute
    ? route.rawRoute
    : scullyConfig.hostUrl
      ? `${scullyConfig.hostUrl}${route.route}`
      : `http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}${route.route}`;
      logWarn(`rendering ${path}`);
  let pageHtml: string;
  let browser: Browser;
  let page: Page;
  try {
    browser = await launchedBrowser().catch((e) => {
      logError('Playwright died?', e);
      return Promise.reject(e);
    });
    // open a new page
    page = await browser.newPage();

    let resolve;
    const pageReady = new Promise((r) => (resolve = r));

    if (scullyConfig.ignoreResourceTypes && scullyConfig.ignoreResourceTypes.length > 0) {
      await page.route('**/*', route => checkIfRequestShouldBeIgnored.bind(route.request));

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
    // logWarn(`scully version for ${path}`);

    if (route.config && route.config.manualIdleCheck) {
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
    await page.addInitScript(() => {
      /** set "running" mode */
      window['ScullyIO'] = 'running';
      window.addEventListener('AngularReady', () => {
        window['onCustomEvent']();
      });
    });

    // enter url in page
    await page.goto(path);

    await Promise.race([pageReady, waitForIt(25 * 1000)]);

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

    /**
     * when the browser is shown, use a 2 minute timeout, otherwise
     * wait for page-read || timeout @ 25 seconds.
     */
    if (showBrowser) {
      page.evaluate(
        "console.log('\\n\\n------------------------------\\nScully is done, page left open for 120 seconds for inspection\\n------------------------------\\n\\n')"
      );
      //* don't close the browser, but leave it open for inspection for 120 secs
      waitForIt(1200 * 1000).then(() => page.close());
    } else {
      // await page.close();
      page.close();

    }
  } catch (err) {
    const { message } = err;
    // tslint:disable-next-line: no-unused-expression
    page && typeof page.close === 'function' && (await page.close());
    logWarn(`Playwright error while rendering "${yellow(route.route)}"`, err, ' we will retry rendering this page up to 3 times.');
    if (message && message.includes('closed')) {
      /** signal the launched to relaunch playwright, as it has likely died here. */
      //TODO:c
      reLaunch('closed');
      // return playwrightRender(route);
    }
    if (errorredPages.has(route.route) && errorredPages.get(route.route) > 2) {
      logError(`Playwright error while rendering "${yellow(route.route)}"`, err, ' we retried rendering this page 3 times.');
      /** we tried this page before, something is really off. Exit stage left. */
      //TODO:
      // captureException(err);
      process.exit(15);
    } else {
      const count = errorredPages.get(route.route) || 0;
      errorredPages.set(route.route, count + 1);
      /** give it a couple of secs */
      await waitForIt(3 * 1000);
      /** retry! */
      return plugin(route);
    }
  }
  // logWarn(`done with page ${path}`);
  return pageHtml;
};

const windowSet = (page: Page, name: string, value: any) =>
  page.addInitScript(`
    Object.defineProperty(window, '${name}', {
      get() {
        return JSON.parse('${JSON.stringify(value)}')
      }
    })
  `);

registerPlugin(scullySystem, playwrightRender, plugin);
