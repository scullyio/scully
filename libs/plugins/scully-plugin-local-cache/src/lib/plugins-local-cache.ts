/* eslint-disable no-prototype-builtins */
import { log, red, registerPlugin } from '@scullyio/scully';
import { scullySystem } from '@scullyio/scully/src/lib/pluginManagement/pluginRepository';
import { localCacheDone } from './cacheDone.js';
import { cacheClear, list, noCache } from './cli-options.js';
import { updateConfig } from './config.js';
import { installInterceptor } from './installInterceptor.js';
import { initializeLevelDb, kill, levelDbReady } from './ldb.js';
import { LocalCacheConfig } from './local-cache.interface.js';

export const localCache = 'localCache' as const;

registerPlugin(scullySystem, localCache, async () => undefined);

export async function localCacheReady(configUpdate: LocalCacheConfig = {}) {
  updateConfig(configUpdate);

  /** handle CLI options */
  if (cacheClear) {
    /** --CacheClear option used */
    await initializeLevelDb();
    await kill().catch(e => console.error(e));
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
  if (!noCache && process.env.SCULLY_WORKER !== 'true') {
    await initializeLevelDb();
    /** tap into the puppeteer stream and add in cache interception handling */
    installInterceptor();
    registerPlugin('allDone', 'localCacheDone', localCacheDone);
  }
}
