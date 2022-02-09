import { performance } from 'perf_hooks';
import { RouteProcess } from '../../pluginManagement/Plugin.interfaces.js';
import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import {
  accessPluginDirectly,
  plugins,
  registerPlugin,
  routeProcessPriority,
  scullySystem
} from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { storeRoutes } from '../../systemPlugins/storeRoutes.js';
import { baseFilter, routeFilter } from '../cli-options.js';
import { logError } from '../log.js';
import { performanceIds } from '../performanceIds.js';

export const processRoutes = 'processRoutes' as const;

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
