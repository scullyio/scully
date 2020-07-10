import { performance } from 'perf_hooks';
import { findPlugin } from '../../pluginManagement/pluginConfig';
import { traverseAppRoutes } from '../../routerPlugins/traverseAppRoutesPlugin';
import { flushRawRoutesCache, rawRoutesCache } from '../cache';
import { log, logWarn } from '../log';
import { performanceIds } from '../performanceIds';
import { registerPlugin, scullySystem } from '../../pluginManagement';

export const handleTravesal = Symbol('handleTravesal');
registerPlugin(scullySystem, handleTravesal, plugin);

async function plugin({ forceScan } = { forceScan: false }): Promise<string[]> {
  let unhandledRoutes: string[];
  if (forceScan) {
    flushRawRoutesCache();
  }
  if (rawRoutesCache.size === 0) {
    log('Finding all routes in application.');
    performance.mark('startTraverse');
    unhandledRoutes = await findPlugin(traverseAppRoutes)();
    performance.mark('stopTraverse');
    performanceIds.add('Traverse');
    unhandledRoutes.forEach((r) => rawRoutesCache.add(r));
  } else {
    unhandledRoutes = [...rawRoutesCache.keys()];
  }
  if (unhandledRoutes.length < 1) {
    logWarn(
      'No routes found in application, are you sure you installed the router? Terminating.'
    );
    process.exit(15);
  }
  return unhandledRoutes;
}
