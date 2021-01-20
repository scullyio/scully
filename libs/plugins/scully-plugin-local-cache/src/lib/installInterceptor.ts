import { launchedBrowser$ } from '@scullyio/scully';
import { Browser, Page, Target } from 'puppeteer';
import { config } from './config';
import { handlePuppeteerRequest } from './handlePuppeteerRequest';
import { handlePuppeteerResponse } from './handlePuppeteerResponse';

export function installInterceptor() {
  launchedBrowser$.subscribe(async (browser: Browser) => {
    browser.on('targetcreated', async (ev: Target) => {
      const page: Page = await ev.page();
      await page.setRequestInterception(true);

      page.on('request', handlePuppeteerRequest);
      page.on('response', handlePuppeteerResponse);
    });
  });
}

export function determineTTL(url: string): number {
  const entries = Object.entries(config.ttlExceptions);
  for (const [urlToCheck, ttl] of entries) {
    if (url.startsWith(urlToCheck)) {
      return ttl;
    }
  }
  return config.defaultTTL;
}
