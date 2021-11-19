// import { launchedBrowser$ } from '@scullyio/scully';
import { findPlugin } from '@scullyio/scully';
import { Browser, Page, Target } from 'puppeteer';
import { Observable } from 'rxjs';
import { config } from './config';
import { handlePuppeteerRequest } from './handlePuppeteerRequest';
import { handlePuppeteerResponse } from './handlePuppeteerResponse';

export async function installInterceptor() {
  const launchedBrowser$ = findPlugin('getPPTLaunchedBrowser')() as Observable<Browser>;
  if (!launchedBrowser$) {
    throw new Error('No launched browser found');
  }
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
