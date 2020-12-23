import { performance } from 'perf_hooks';
import { plugins } from '../../pluginManagement/pluginRepository';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { deepClone } from '../deepClone';
import { performanceIds } from '../performanceIds';

export async function handleRouteDiscoveryDone(handledRoutes: HandledRoute[]) {
  /** protect from unwanted behavior */
  performance.mark('startRouteDonePlugins');
  performanceIds.add('RouteDonePlugins');
  await Promise.all(Object.values(plugins.routeDiscoveryDone).map((plugin) => plugin(clone)));
  performance.mark('stopRouteDonePlugins');
}
