import { registerPlugin, routeRenderer, Deferred, scullyConfig } from '@scullyio/scully';
import { chromium, Browser } from 'playwright';
const browser = new Deferred<Browser>();
(async () => {
  const br = await chromium.launch({ headless: false });
  browser.resolve(br);
  // const page = await browser.newPage();
  // await page.goto('https://example.com');
  // await browser.close();
})();
registerPlugin('scullySystem', routeRenderer, async route => {
  const path = route.rawRoute
    ? route.rawRoute
    : scullyConfig.hostUrl
    ? `${scullyConfig.hostUrl}${route.route}`
    : `http://${scullyConfig.hostName}:${scullyConfig.appPort}${route.route}`;
  console.log('test render', route.route);
  const br = await browser.promise;
  const page = await br.newPage();
  console.log('test render', path);
  await page.goto(path);
  await new Promise(resolve => setTimeout(resolve, 1000));
  const html = await page.content();
  await page.close();
  return html;
});
//# sourceMappingURL=testRender.js.map
