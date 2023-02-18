/**
 * DefaultActions is the place where Scully run the steps.
 * Here scully:
 * create the list of unhandler routes
 * create the list for handler routes
 * update the handle route list with the plugins
 * run the routeProcess plugins to modify the handle routes array
 * start routeProcessDonePlugin and run all the processDonePlugins (developer/users can get the handle route list, and do a sitemap or things like this)
 * RenderParrarel activate the plugins (executePlugin) for every route (like run puppeteer)
 * Start allDonePlugins and run the all Done plugins
 */

import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import { registerPlugin, scullySystem } from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface.js';
import { baseFilter } from '../cli-options.js';
import { loadConfig } from '../config.js';
import { log } from '../log.js';
import { handleAllDone } from './handleAllDone.js';
import { handleRouteDiscoveryDone } from './handleRouteDiscoveryDone.js';
import { handleTravesal } from './handleTravesal.js';
import { processRoutes } from './processRoutes.js';
import { renderPlugin } from './renderPlugin.js';
import { routeDiscovery } from './routeDiscovery.js';

export const generateAll = 'generateAll' as const;

registerPlugin(scullySystem, generateAll, plugin);

async function plugin(localBaseFilter = baseFilter): Promise<HandledRoute[]> {
  await loadConfig();
  try {
    // maintain progress ui
    /** handleTravesal execute the guessParser and create a list of route.routes */
    const unhandledRoutes = await findPlugin(handleTravesal)();

    /** RouteDiscovery is the place for create the list of handler routes & add the plugins to the route */
    const handledRoutes = await routeDiscovery(unhandledRoutes, localBaseFilter);

    /** handle routeProcess plugins (this is the place to change handle routes) */
    const processedRoutes = await findPlugin(processRoutes)(handledRoutes);

    /** handleRouteDiscoveryDone run the discoverydone plugins */
    const discoveryDone = handleRouteDiscoveryDone(processedRoutes);

    /** wait for routeDiscoveryDone plugins to be ready. they can still be running. */
    await discoveryDone;

    /** start the render process */
    await findPlugin(renderPlugin)(processedRoutes);

    /** fire off the allDone plugins */
    await handleAllDone(processedRoutes);

    // stop progress ui
    return processedRoutes;
  } catch (e) {
    // TODO: add better error handling
    log(e);
  }
  return [];
}
