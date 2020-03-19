import {performance} from 'perf_hooks';
import {traverseAppRoutes} from '../../routerPlugins/traverseAppRoutesPlugin';
import {rawRoutesCache} from '../cache';
import {log, logWarn} from '../log';
import {performanceIds} from '../performanceIds';

export async function handleTravesal(): Promise<string[]> {
  let unhandledRoutes: string[];
  if (rawRoutesCache.size === 0) {
    log('Finding all routes in application.');
    performance.mark('startTraverse');
    unhandledRoutes = await traverseAppRoutes();
    performance.mark('stopTraverse');
    performanceIds.add('Traverse');
    unhandledRoutes.forEach(r => rawRoutesCache.add(r));
  } else {
    unhandledRoutes = [...rawRoutesCache.keys()];
  }
  if (unhandledRoutes.length < 1) {
    logWarn('No routes found in application, are you sure you installed the router? Terminating.');
    process.exit(15);
  }
  return unhandledRoutes;
}
