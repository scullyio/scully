import { findPlugin, HandledRoute, registerPlugin, scullyConfig, startScully } from '@scullyio/scully';
import {
  baseFilter,
  determineConfigFilePath,
  generateAll,
  getJsName,
  handleAllDone,
  handleRouteDiscoveryDone,
  handleTravesal,
  loadConfig,
  log,
  moveDistAngular,
  printProgress,
  removeStaticDist,
  routeDiscovery,
  yellow,
} from '@scullyio/scully/src/lib/utils';
import { processRoutes } from '@scullyio/scully/src/lib/utils/handlers/processRoutes';
import { join } from 'path';
import { getPool, handleJobs, Job, TaskWorker } from './tasks';

const workerPath = join(__dirname, './scully-universal-worker.js');
const poolSize = 15;

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason['stack']);
  // application specific logging, throwing an error, or other logic here
});
async function run() {
  const config = await loadConfig();

  const configPath = getJsName(determineConfigFilePath());
  const folder = join(scullyConfig.homeFolder || '', configPath || '');
  /** start prepping the workers */
  const pool = getPool(workerPath, poolSize);
  const initJobs = pool.map(() => new Job('init', configPath));
  const initDone = handleJobs(initJobs, pool);

  /** copy in current build artifacts */
  await moveDistAngular(folder, scullyConfig.outDir, {
    removeStaticDist: removeStaticDist,
    reset: false,
  });

  try {
    /** wait until all workers are up and running */
    await initDone;
    // eslint-disable-next-line
    // const config = await loadConfig();
    // console.log(JSON.stringify(config,undefined,4))
     const result = await startScully();
    // const result = await findPlugin(generateAll)();
    // console.log('done', result);
    // process.exit(0);
  } catch (e) {
    // console.log(e);
  }
  /** clean up worker pool */
  pool.forEach((p) =>  p.kill())
}

/** replace the generate-all to be able to optimize building with universal */
registerPlugin('scullySystem', generateAll, plugin, undefined, { replaceExistingPlugin: true });

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
    // log(e);
  }
  return [];
}

async function renderParallel(routes: HandledRoute[]) {
  const jobs = routes
    .map((r) => {
      // log(`generating ${yellow(r.route)}`);/
      return new Job('render', r);
    })
    // .filter((_, i) => i < 2);
  await handleJobs(jobs, getPool(workerPath));
}

run();
