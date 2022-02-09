import { performance } from 'perf_hooks';
import { plugins } from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface.js';
import { deepClone } from '../deepClone.js';
import { performanceIds } from '../performanceIds.js';

export async function handleRouteDiscoveryDone(handledRoutes: HandledRoute[]) {
  /** protect from unwanted behavior */
  performance.mark('startRouteDonePlugins');
  performanceIds.add('RouteDonePlugins');
  const clone = deepClone(handledRoutes);
  await Promise.all(Object.values(plugins.routeDiscoveryDone).map(plugin => plugin(clone)));
  performance.mark('stopRouteDonePlugins');
}
