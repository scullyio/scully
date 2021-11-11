import { performance } from 'perf_hooks';
import { registerPlugin, scullySystem } from '../../pluginManagement';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { traverseAppRoutes } from '../../routerPlugins/traverseAppRoutesPlugin';
import { flushRawRoutesCache, rawRoutesCache } from '../cache';
import { logOk, logWarn, printProgress } from '../log';
import { performanceIds } from '../performanceIds';

export const handleTravesal = 'handleTravesal' as const;
registerPlugin(scullySystem, handleTravesal, plugin);
let once = true

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
    unhandledRoutes.forEach((r) => rawRoutesCache.add(r));
    // logOk(`Successfully scanned Angular app for routes`);

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
