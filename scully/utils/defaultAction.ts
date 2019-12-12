import {launchedBrowser} from '../renderPlugins/launchedBrowser';
import {routeContentRenderer} from '../renderPlugins/routeContentRenderer';
import {addOptionalRoutes, HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {storeRoutes} from '../systemPlugins/storeRoutes';
import {writeToFs} from '../systemPlugins/writeToFs.plugin';
import {updateScullyConfig, loadConfig} from '../utils/config';
import {ScullyConfig} from './interfacesandenums';
import {log} from './log';
import {cpus} from 'os';
import {asyncPool} from './asyncPool';
import {chunk} from './chunk';

export const generateAll = async (config?: Partial<ScullyConfig>) => {
  if (config) {
    await updateScullyConfig(config);
  }
  await loadConfig;
  try {
    log('Finding all routes in application.');
    const appRouteArray = await traverseAppRoutes();
    log('Pull in data to create additional routes.');
    const dataroutes = await addOptionalRoutes(appRouteArray);
    /** launch the browser, its shared among renderers */
    const browser = await launchedBrowser();
    /** start handling each route, works in chunked parrallel mode  */
    // await doChunks(dataroutes);
    await renderParralell(dataroutes);
    /** save router to static json thingie */
    storeRoutes(dataroutes);
    return dataroutes;
  } catch (e) {
    // TODO: add better error handling
    log(e);
  }
  return [];
};

async function renderParralell(dataroutes) {
  const renderRoute = route =>
    routeContentRenderer(route).then((html: string) => writeToFs(route.route, html));
  return asyncPool(cpus().length, dataroutes, renderRoute);
}

async function doChunks(dataroutes) {
  const chunked = chunk(dataroutes, cpus().length);

  return chunked.reduce(async (acc, part) => {
    const x = await acc;
    const activeChunk = await Promise.all(
      part.map(async (handledRoute: HandledRoute) =>
        routeContentRenderer(handledRoute).then((html: string) =>
          writeToFs(handledRoute.route, html)
        )
      )
    );
    return x.concat(activeChunk);
  }, Promise.resolve([]));
}
