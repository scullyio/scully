 "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const launchedBrowser_1 = require("./launchedBrowser");
const config_1 = require("../utils/config");
const log_1 = require("../utils/log");
exports.puppeteerRender = async (route) => {
    const path = `http://localhost:${config_1.coulsonConfig.appPort}${route.route}`;
    let pageHtml;
    let browser;
    let page;
    try {
        // open the headless browser
        browser = await launchedBrowser_1.launchedBrowser();
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
        await pageReady;
        /**
         * The stange notation is needed bcs typescript messes
         * with the `.toString` that evalutate uses
         */
        pageHtml = await page.evaluate(`(async () => {
      return document.documentElement.outerHTML
    })()`);
        await page.close();
    }
    catch (err) {
        // tslint:disable-next-line: no-unused-expression
        page && typeof page.close === 'function' && (await page.close());
        log_1.logError(`Puppeteer error while rendering "${log_1.yellow(route.route)}"`);
    }
    return pageHtml;
};
//# sourceMappingURL=puppeteerRenderPlugin.js.map
