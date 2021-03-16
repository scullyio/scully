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

import { findPlugin, registerPlugin, scullySystem } from '../../pluginManagement';
import { launchedBrowser } from '../../renderPlugins/launchedBrowser';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { baseFilter } from '../cli-options';
import { loadConfig } from '../config';
import { log, printProgress } from '../log';
import { handleAllDone } from './handleAllDone';
import { handleRouteDiscoveryDone } from './handleRouteDiscoveryDone';
import { handleTravesal } from './handleTravesal';
import { processRoutes } from './processRoutes';
import { renderParallel } from './renderParallel';
import { routeDiscovery } from './routeDiscovery';

export const generateAll = Symbol('generateAll');
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

    /** update progress to show what's going on  */
    printProgress(false, 'Starting puppeteer');

    /** launch the browser, its shared among renderers */
    await launchedBrowser();
    /** start handling each route, works in chunked parallel mode  */
    await renderParallel(processedRoutes);
    /** wait for routeDiscoveryDone plugins to be ready. they can still be running. */
    await discoveryDone;
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
