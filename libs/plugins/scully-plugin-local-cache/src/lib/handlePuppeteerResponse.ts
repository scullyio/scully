import { createHash } from 'crypto';
import { scullyConfig } from '@scullyio/scully';
import { HTTPResponse } from 'puppeteer';
import { config } from './config';
import { generateId } from './generateId';
import { determineTTL } from './installInterceptor';
import { get, set } from './ldb';
import { CacheItem } from './local-cache.interface';
import { usageStatistics } from './usageStatistics';

export async function handlePuppeteerResponse(resp: HTTPResponse) {
  try {
    const responseHeaders = resp.headers();
    const id = generateId();
    if (responseHeaders['from-scully-cache']) {
      /** no need to reprocess */
      return;
    }
    const status = await resp.status();
    // as redirects don't have a "body" replace it with an empty string
    const body = status >= 300 && status <= 399 ? '' : await resp.text();
    const request = await resp.request();
    const url = request.url();
    const { referer, ...headers } = request.headers();
    if (config.includeReferer) {
      headers.referer = referer;
    }
    const hash = createHash('md5').update(id).update(url).update(body).digest('hex');
    const TTL = determineTTL(url);
    usageStatistics.traffic += body.length;
    const cache: CacheItem = {
      hash,
      url,
      environment: config.environment,
      project: scullyConfig.projectName,
      inserted: Date.now(),
      requestHeaders: headers,
      TTL,
      response: {
        headers: { ...responseHeaders, 'from-scully-cache': 'true' },
        contentType: resp.headers()['content-type'] || headers['content-type'] || 'umh',
        status: resp.status(),
        body,
      },
    };

    await set({ url, headers, id }, hash);
    if (referer) {
      await set({ referer, url, id }, hash);
    }
    const previous: CacheItem = await get<CacheItem>({ hash }).catch(() => undefined);
    if (previous === undefined) {
      await set({ hash }, cache);
    }
  } catch (e) {
    console.error(e);
  }
}
