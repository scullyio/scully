import { performance } from 'perf_hooks';
import {
  accessPluginDirectly,
  findPlugin,
  plugins,
  registerPlugin,
  RouteProcess,
  routeProcessPriority,
  scullySystem,
} from '../../pluginManagement';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { storeRoutes } from '../../systemPlugins/storeRoutes';
import { routeFilter, baseFilter } from '../cli-options';
import { logError } from '../log';
import { performanceIds } from '../performanceIds';

export const processRoutes = Symbol('processRoutes');

async function processRoutesPlugin(routes: HandledRoute[]): Promise<HandledRoute[]> {
  performance.mark('startRouteProcess');
  performanceIds.add('RouteProcess');
  let result: HandledRoute[];
  try {
    result = await Object.values(plugins.routeProcess)
      .sort((a, b) => (a[accessPluginDirectly][routeProcessPriority] < b[accessPluginDirectly][routeProcessPriority] ? -1 : 1))
      .reduce(async (previousRoutes: Promise<HandledRoute[]>, routeProcessor: RouteProcess) => {
        return await routeProcessor(await previousRoutes);
      }, Promise.resolve(routes));
  } catch (e) {
    logError(`Problem during route processing, see below for details. Skipped changing routes`);
    console.error(e);
    result = routes;
  }
  /** save routerinfo, so its available during rendering */
  if (baseFilter === '' && routeFilter === '') {
    /** only store when the routes are complete  */
    await findPlugin(storeRoutes)(result);
  }
  performance.mark('stopRouteProcess');
  return result;
}

registerPlugin(scullySystem, processRoutes, processRoutesPlugin);
