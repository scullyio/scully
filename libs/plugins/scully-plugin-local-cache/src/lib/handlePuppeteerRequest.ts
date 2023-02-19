/* eslint-disable no-prototype-builtins */
import { HTTPRequest } from 'puppeteer';
import { config } from './config.js';
import { generateId } from './generateId.js';
import { del, get } from './ldb.js';
import { CacheItem } from './local-cache.interface.js';
import { usageStatistics } from './usageStatistics.js';

export async function handlePuppeteerRequest(request: HTTPRequest) {
  const url = request.url();
  const id = generateId();
  const { referer, ...headers } = request.headers();
  if (config.includeReferer) {
    headers.referer = referer;
  }
  usageStatistics.requests += 1;
  const hash: string = await get<string>({ url, headers, id }).catch(() => '');

  if (hash) {
    const cache: CacheItem = await get<CacheItem>({ hash }).catch(() => undefined);
    if (isValid(cache)) {
      usageStatistics.hit += 1;
      return request.respond(cache.response);
    }
  }
  usageStatistics.mis += 1;
  request.continue();
  return;
}

export function isValid(cache: CacheItem): boolean {
  try {
    if (!cache.hasOwnProperty('TTL')) {
      return false;
    }
    const now = Date.now();
    if (cache.inserted + cache.TTL > now) {
      return true;
    } else {
      /** this isn't a valid cache item anymore, remove */
      del({ hash: cache.hash });
    }
  } catch {
    /** placeholder */
  }

  return false;
}
