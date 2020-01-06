import {launchedBrowser} from '../renderPlugins/launchedBrowser';
import {routeContentRenderer} from '../renderPlugins/routeContentRenderer';
import {addOptionalRoutes, HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {storeRoutes} from '../systemPlugins/storeRoutes';
import {writeToFs} from '../systemPlugins/writeToFs.plugin';
import {updateScullyConfig, loadConfig} from './config';
import {ScullyConfig} from './interfacesandenums';
import {log, logWarn} from './log';
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
    const appUnhandledRoutes = await traverseAppRoutes();
    const extraUnhandledRoutes = await addExtraRoutes(config);
    const unhandledRoutes = [...appUnhandledRoutes, ...extraUnhandledRoutes];

    if (unhandledRoutes.length < 1) {
      logWarn('No routes found in application, are you sure you installed the router? Terminating.');
      process.exit(15);
    }

    log('Pull in data to create additional routes.');
    const handledRoutes = await addOptionalRoutes(unhandledRoutes);
    await storeRoutes(handledRoutes);
    /** launch the browser, its shared among renderers */
    const browser = await launchedBrowser();
    /** start handling each route, works in chunked parallel mode  */
    // await doChunks(handledRoutes);
    await renderParallel(handledRoutes);
    /** save router to static json thingie */
    await storeRoutes(handledRoutes);
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

async function addExtraRoutes(config): Promise<string[]> {
  let extraRoutes = config.extraRoutes;
  if (!extraRoutes) {
    return Promise.resolve([]);
  }

  if (!Array.isArray(extraRoutes)) {
    logWarn(`ExtraRoutes must be provided as an array. Current type: ${typeof extraRoutes}`);
    return Promise.resolve([]);
  } else {
    log(`Adding all extra routes (${config.extraRoutes.length})`);
    const extraRoutePromises = extraRoutes.map(extraRoute => {
      if (!extraRoute) {
        return Promise.resolve();
      }
      // It is a promise already
      if (extraRoute.then && {}.toString.call(extraRoute.then) === '[object Function]') {
        return extraRoute;
      }

      // Turn into promise<string>
      if (typeof extraRoute === 'string') {
        return Promise.resolve(extraRoute);
      }

      logWarn(
        `The extraRoute ${JSON.stringify(
          extraRoute
        )} needs to be either a string or a Promise<string|string[]>. Excluding for now. `
      );
      // Turn into promise<undefined>
      return Promise.resolve();
    });
    const extraRouteValues = await Promise.all(extraRoutePromises);
    extraRouteValues.reduce((acc, val) => {
      // Remove empties and just return acc
      if (!val) {
        return acc;
      }

      // Spread acc and arrays together
      if (Array.isArray(val)) {
        return [...acc, ...val];
      }

      // Append values into acc
      return [...acc, val];
    }, []);
    return extraRouteValues;
  }
}
