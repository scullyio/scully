import { existsSync } from 'fs';
import { performance } from 'perf_hooks';
import { performanceIds } from '../performanceIds';
import { registerPlugin } from '../../pluginManagement/pluginRepository';
import { logError, logOk, orange, printProgress } from '../log';
import { scullyConfig } from '../config';
import { determineConfigFilePath, getJsName } from '../compileConfig';
import { getPool } from '../procesmanager/taskPool';
import { Job } from '../procesmanager/job';
import { handleJobs } from '../procesmanager/handleJobs';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';

let workerPath: string;
// const poolSize = 64;

// installExitHandler();

export const initSpSPool = 'initSpSPool' as const;
registerPlugin('scullySystem', initSpSPool, spsPoolInitPlugin);

async function spsPoolInitPlugin(path) {
  performance.mark('startplugin-serverPlatformWarmUp');
  performanceIds.add('plugin-serverPlatformWarmUp');
  try {
    if (!existsSync(path)) {
      throw new Error(`
    ================================================================
    the worker for the server platform render is not found
    Please provide a fully qualified path to the plugin

    The file "${orange(path)}" is not found.
    ================================================================

    `);
    }
    workerPath = path;
    /** replace the generate-all to be able to optimize building with sps */
    printProgress(undefined, `Warming ${scullyConfig.maxRenderThreads} workers up.`);
    /** get the full path of the config.js file */
    const configPath = getJsName(determineConfigFilePath());

    /** start prepping the workers */
    const pool = getPool(workerPath, scullyConfig.maxRenderThreads);
    const initJobs = pool.map(() => new Job('init', configPath));
    const initDone = handleJobs(initJobs, pool);

    /** wait until all workers are up and running */
    await initDone;
    logOk(`${pool.length} workers are ready to go`);
  } catch (e) {
    logError(e);
  }
  performance.mark('stopplugin-serverPlatformWarmUp');
}

export const SPSRouteRenderer = 'SPSRouteRenderer' as const;
export const SPSRenderer = 'SPSRenderer' as const;
registerPlugin('scullySystem', SPSRenderer, renderWithSpSPlugin);
async function renderWithSpSPlugin(routes: HandledRoute[]) {
  printProgress(undefined, 'Rendering using Scully Platform Server');
  const jobs = routes.map((r, i) => {
    return new Job('render', r);
  });
  await handleJobs(jobs, getPool(workerPath));
}
