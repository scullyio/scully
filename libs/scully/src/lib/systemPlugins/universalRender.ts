import { existsSync } from 'fs';
import { performance } from 'perf_hooks';
import { findPlugin, registerPlugin } from '../pluginManagement';
import { HandledRoute } from '../routerPlugins';
import {
  baseFilter,
  determineConfigFilePath,
  generateAll,
  getJsName,
  getPool,
  handleAllDone,
  handleJobs,
  handleRouteDiscoveryDone,
  handleTravesal,
  Job,
  loadConfig,
  log,
  yellow,
  logError,
  moveDistAngular,
  orange,
  performanceIds,
  printProgress,
  removeStaticDist,
  routeDiscovery,
  scullyConfig,
  startScully
} from '../utils';
import { installExitHandler } from '../utils/exitHandler';
import { processRoutes } from '../utils/handlers/processRoutes';

let workerPath: string;
// const poolSize = 64;

installExitHandler();

export const universalRender = Symbol('universalRender');
registerPlugin('scullySystem', universalRender, universalPlugin);

async function universalPlugin(path) {
  performance.mark('startplugin-UniversalWarmUp');
  performanceIds.add('plugin-UniversalWarmUp');
  if (!existsSync(path)) {
    throw new Error(`
    ================================================================
       the worker for the Universal render is not found
       Please provide a fully qualified path to the plugin

      The file "${orange(path)}" is not found.
    ================================================================

    `);
  }
  workerPath = path;
  /** replace the generate-all to be able to optimize building with universal */
  registerPlugin('scullySystem', generateAll, generateWithUniversal, undefined, { replaceExistingPlugin: true });
  printProgress(undefined, 'Warming up.');
  /** compile the config, so the .js version is available for workers */
  await loadConfig();
  /** get the full path of the config.js file */
  const configPath = getJsName(determineConfigFilePath());

  /** start prepping the workers */
  const pool = getPool(workerPath, scullyConfig.maxRenderThreads);
  const initJobs = pool.map(() => new Job('init', configPath));
  const initDone = handleJobs(initJobs, pool);

  /** copy in current build artifacts */
  printProgress(undefined, 'Copying distribution files');
  await moveDistAngular(scullyConfig.distFolder, scullyConfig.outDir, {
    removeStaticDist: removeStaticDist,
    reset: false,
  });

  /** wait until all workers are up and running */
  await initDone;
  performance.mark('stopplugin-UniversalWarmUp');
  /** run full scully */
  await startScully();

  /** clean up worker pool */
  await Promise.all(pool.map((p) => p.kill()));
  // process.exit(0);
}

async function generateWithUniversal(localBaseFilter = baseFilter): Promise<HandledRoute[]> {
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

    /** update user on progress */
    printProgress(false, 'Start universal rendering');

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
    logError(e);
  }
  return [];
}

async function renderParallel(routes: HandledRoute[]) {
  const jobs = routes.map((r, i) => {
    // log(`generating ${yellow(r.route)}`);
    return new Job('render', r);
  });
  // .filter((_, i) => i < 2);
  await handleJobs(jobs, getPool(workerPath));
}
