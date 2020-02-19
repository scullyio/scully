import {cpus} from 'os';
import {performance} from 'perf_hooks';
import {launchedBrowser} from '../renderPlugins/launchedBrowser';
import {routeContentRenderer} from '../renderPlugins/routeContentRenderer';
import {addOptionalRoutes, HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {storeRoutes} from '../systemPlugins/storeRoutes';
import {writeToFs} from '../systemPlugins/writeToFs.plugin';
import {asyncPool} from './asyncPool';
import {rawRoutesCache} from './cache';
import {chunk} from './chunk';
import {baseFilter} from './cli-options';
import {loadConfig} from './config';
import {log, logWarn} from './log';
import {performanceIds} from './performanceIds';

export const generateAll = async (localBaseFilter = baseFilter) => {
  await loadConfig;
  try {
    let unhandledRoutes;
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

    performance.mark('startDiscovery');
    performanceIds.add('Discovery');
    log('Pull in data to create additional routes.');
    const handledRoutes = (
      await addOptionalRoutes(
        unhandledRoutes.filter((r: string) => typeof r === 'string' && r.startsWith(localBaseFilter))
      )
    ).filter(r => !r.route.endsWith('*'));
    performance.mark('stopDiscovery');
    /** save routerinfo, so its available during rendering */
    if (localBaseFilter === '') {
      /** only store when the routes are complete  */
      await storeRoutes(handledRoutes);
    }

    /** launch the browser, its shared among renderers */
    const browser = await launchedBrowser();
    /** start handling each route, works in chunked parallel mode  */
    // await doChunks(handledRoutes);
    performance.mark('startRender');
    performanceIds.add('Render');
    await renderParallel(handledRoutes);
    performance.mark('stopRender');
    return handledRoutes;
  } catch (e) {
    // TODO: add better error handling
    log(e);
  }
  return [];
};

async function renderParallel(dataRoutes) {
  const renderRoute = route =>
    routeContentRenderer(route).then((html: string) => writeToFs(route.route, html));
  return asyncPool(cpus().length, dataRoutes, renderRoute);
}

async function doChunks(dataRoutes) {
  const chunked = chunk(dataRoutes, cpus().length);

  return chunked.reduce(async (acc, part) => {
    const x = await acc;
    const activeChunk = await Promise.all(
      part.map(async (handledRoute: HandledRoute) =>
        routeContentRenderer(handledRoute).then((html: string) => writeToFs(handledRoute.route, html))
      )
    );
    return x.concat(activeChunk);
  }, Promise.resolve([]));
}
