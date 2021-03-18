/* eslint-disable no-prototype-builtins */
import { log, red, registerPlugin } from '@scullyio/scully';
import { scullySystem } from '@scullyio/scully/src/lib/pluginManagement/pluginRepository';
import { localCacheDone } from './cacheDone';
import { cacheClear, list, noCache } from './cli-options';
import { updateConfig } from './config';
import { installInterceptor } from './installInterceptor';
import { initializeLevelDb, kill, levelDbReady } from './ldb';
import { LocalCacheConfig } from './local-cache.interface';

export const localCache = Symbol('localCache');

registerPlugin(scullySystem, localCache, async () => undefined);

export async function localCacheReady(configUpdate: LocalCacheConfig = {}) {
  updateConfig(configUpdate);

  /** handle CLI options */
  if (cacheClear) {
    /** --CacheClear option used */
    await initializeLevelDb();
    await kill().catch((e) => console.error(e));
    log(
      red(`
      ----------------------------
      cache is cleared
      ----------------------------`)
    );
    process.exit(0);
  }

  if (list) {
    /** --list option used, mostly debugging tool that does what I need to check at this moment. */
    await levelDbReady;
    // const data = await get({ customerId, projectId });
    process.exit(0);
  }

  // console.log({ noCache });

  /** only activate without the `--noCache` option */
  if (!noCache) {
    await initializeLevelDb();
    /** tap into the puppeteer stream and add in cache interception handling */
    installInterceptor();
    registerPlugin('allDone', 'localCacheDone', localCacheDone);
  }
}
