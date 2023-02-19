import { performance } from 'perf_hooks';
import { registerPlugin, scullySystem } from '../../pluginManagement/pluginRepository.js';
import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import { traverseAppRoutes } from '../../routerPlugins/traverseAppRoutesPlugin.js';
import { flushRawRoutesCache, rawRoutesCache } from '../cache.js';
import { logOk, logWarn, printProgress } from '../log.js';
import { performanceIds } from '../performanceIds.js';

export const handleTravesal = 'handleTravesal' as const;
registerPlugin(scullySystem, handleTravesal, plugin);
let once = true;

async function plugin({ forceScan } = { forceScan: false }): Promise<string[]> {
  let unhandledRoutes: string[];
  if (forceScan) {
    flushRawRoutesCache();
  }
  if (rawRoutesCache.size === 0) {
    printProgress(undefined, 'Finding routes in app');
    const start = performance.now();
    performance.mark('startTraverse');
    unhandledRoutes = await findPlugin(traverseAppRoutes)();
    performance.mark('stopTraverse');
    performanceIds.add('Traverse');
    unhandledRoutes.forEach(r => rawRoutesCache.add(r));
  } else {
    unhandledRoutes = [...rawRoutesCache.keys()];
    if (once) {
      once = false;
      logOk(`Successfully retrieved routes from cache`);
    }
  }
  if (unhandledRoutes.length < 1) {
    logWarn('No routes found in application, are you sure you installed the router? Terminating.');
    process.exit(15);
  }
  return unhandledRoutes;
}
