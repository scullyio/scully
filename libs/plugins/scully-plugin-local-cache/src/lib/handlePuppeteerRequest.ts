/* eslint-disable no-prototype-builtins */
import { HTTPRequest as Request } from 'puppeteer';
import { config } from './config';
import { generateId } from './generateId';
import { del, get } from './ldb';
import { CacheItem } from './local-cache.interface';
import { usageStatistics } from './usageStatistics';

export async function handlePuppeteerRequest(request: Request) {
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
