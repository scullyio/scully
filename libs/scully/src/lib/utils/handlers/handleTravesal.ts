import { performance } from 'perf_hooks';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { traverseAppRoutes } from '../../routerPlugins/traverseAppRoutesPlugin';
import { flushRawRoutesCache, rawRoutesCache } from '../cache';
import { green, log, logWarn } from '../log';
import { performanceIds } from '../performanceIds';
import { registerPlugin, scullySystem } from '../../pluginManagement';
import { logOk, printProgress } from '..';

export const handleTravesal = Symbol('handleTravesal');
registerPlugin(scullySystem, handleTravesal, plugin);

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
    logOk(`Successfully retrieved routes from cache`);
  }
  if (unhandledRoutes.length < 1) {
    logWarn('No routes found in application, are you sure you installed the router? Terminating.');
    process.exit(15);
  }
  return unhandledRoutes;
}
