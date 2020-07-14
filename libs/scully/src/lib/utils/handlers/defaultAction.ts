import { findPlugin, registerPlugin, scullySystem } from '../../pluginManagement';
import { launchedBrowser } from '../../renderPlugins/launchedBrowser';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { baseFilter } from '../cli-options';
import { loadConfig } from '../config';
import { log } from '../log';
import { handleAllDone } from './handleAllDone';
import { handleRouteDiscoveryDone } from './handleRouteDiscoveryDone';
import { handleTravesal } from './handleTravesal';
import { processRoutes } from './processRoutes';
import { renderParallel } from './renderParallel';
import { routeDiscovery } from './routeDiscovery';

export const generateAll = Symbol('generateAll');
registerPlugin(scullySystem, generateAll, plugin);

async function plugin(localBaseFilter = baseFilter): Promise<HandledRoute[]> {
  await loadConfig;
  try {
    const unhandledRoutes = await findPlugin(handleTravesal)();

    const handledRoutes = await routeDiscovery(unhandledRoutes, localBaseFilter);

    /** handle routeProcess plugins */
    const processedRoutes = await findPlugin(processRoutes)(handledRoutes);

    const discoveryDone = handleRouteDiscoveryDone(processedRoutes);

    /** launch the browser, its shared among renderers */
    await launchedBrowser();
    /** start handling each route, works in chunked parallel mode  */
    await renderParallel(processedRoutes);
    /** wait for routeDiscoveryDone plugins to be ready. they can still be running. */
    await discoveryDone;
    /** fire off the allDone plugins */
    await handleAllDone(processedRoutes);
    return processedRoutes;
  } catch (e) {
    // TODO: add better error handling
    log(e);
  }
  return [];
}
