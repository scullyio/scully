import { launchedBrowser } from '../../renderPlugins/launchedBrowser';
import { HandledRoute } from '../../routerPlugins/addOptionalRoutesPlugin';
import { baseFilter } from '../cli-options';
import { loadConfig } from '../config';
import { log } from '../log';
import { handleAllDone } from './handleAllDone';
import { handleRouteDiscoveryDone } from './handleRouteDiscoveryDone';
import { handleTravesal } from './handleTravesal';
import { renderParallel } from './renderParallel';
import { routeDiscovery } from './routeDiscovery';

export const generateAll = async (
  localBaseFilter = baseFilter
): Promise<HandledRoute[]> => {
  await loadConfig;
  try {
    const unhandledRoutes = await handleTravesal();

    const handledRoutes = await routeDiscovery(
      unhandledRoutes,
      localBaseFilter
    );

    const discoveryDone = handleRouteDiscoveryDone(handledRoutes);

    /** launch the browser, its shared among renderers */
    const browser = await launchedBrowser();
    /** start handling each route, works in chunked parallel mode  */
    await renderParallel(handledRoutes);
    /** wait for routeDiscoveryDone plugins to be ready. they can still be running. */
    await discoveryDone;
    /** fire off the allDone plugins */
    await handleAllDone(handledRoutes);
    return handledRoutes;
  } catch (e) {
    // TODO: add better error handling
    log(e);
  }
  return [];
};
