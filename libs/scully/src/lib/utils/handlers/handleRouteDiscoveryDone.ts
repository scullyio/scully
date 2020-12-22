import { performance } from 'perf_hooks';
import { plugins } from '../../pluginManagement/pluginRepository';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { deepClone } from '../deepClone';
import { performanceIds } from '../performanceIds';

export async function handleRouteDiscoveryDone(handledRoutes: HandledRoute[]) {
  /** protect from unwanted behavior */
  performance.mark('startRouteDonePlugins');
  performanceIds.add('RouteDonePlugins');
  const clone = deepClone(handledRoutes);

  const plugins_routeDiscoveryDone = plugins.routeDiscoveryDone;

  const plugins_routeDiscoveryDone_values = Object.values(plugins_routeDiscoveryDone);

  const arrPlugins = plugins_routeDiscoveryDone_values.map((plugin) => {
    return plugin(clone);
  });

  await Promise.all(arrPlugins);

  performance.mark('stopRouteDonePlugins');
}
