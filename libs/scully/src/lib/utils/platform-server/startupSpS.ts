import { exec } from 'child_process';
import { copyFileSync, existsSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { filter, merge, tap } from 'rxjs';
import { fileURLToPath } from 'url';
import { findPlugin } from '../../pluginManagement/pluginConfig.js';
import { registerPlugin } from '../../pluginManagement/pluginRepository.js';
import { loadConfig, routeRenderer, scullyConfig } from '../config.js';
import { renderPlugin } from '../handlers/renderPlugin.js';
import { log, logError, logOk, printProgress, yellow } from '../log.js';
import { handleJobs } from '../procesmanager/handleJobs.js';
import { Job } from '../procesmanager/job.js';
import { getPool, terminateAllPools } from '../procesmanager/taskPool.js';
import { readDotProperty } from '../scullydot.js';
import { getHandledRoutes } from '../services/routeStorage.js';
import { Deferred } from './deferred.js';
import { initSpSPool, SPSRenderer } from './serverPlatformRender.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'ps-worker.js');

const tsConfig = {
  extends: '../tsconfig.json',
  compilerOptions: {
    outDir: 'runtime',
    target: 'es2020',
    allowJs: true,
    allowSyntheticDefaultImports: true,
    skipDefaultLibCheck: true,
    skipLibCheck: true,
    lib: ['ES2020', 'DOM'],
    types: ['node'],
    moduleResolution: 'Node',
    module: 'ES2020',
  },
  files: [],
  angularCompilerOptions: {
    enableIvy: true,
    compilationMode: 'partial',
  },
};

const plugin = async () => {
  /** check if I'm a worker, and import the runner. */
  if (process.env.SCULLY_WORKER === 'true') {
    process.title = 'ScullyWorker';
    /** worker will pick up its in a worker and starts itself */
    const worker = await import('./ps-worker').catch((e) => {
      console.log('worker module load error', e);
      logError(e);
      process.exit(16);
    });
  } else {
    const { sourceRoot, homeFolder, spsModulePath } = scullyConfig;
    if (spsModulePath === undefined) {
      logError(`For the SPS renderer the option "spsModulePath" needs to be part of your projects scullyConfig. Aborting run`);
      process.exit(15);
    }
    const fullSps = join(homeFolder, spsModulePath);
    if (!existsSync(fullSps)) {
      logError(`file "${yellow(fullSps)}" doesn't seem to exists, this is mandatory for the SPS renderer`);
      process.exit(15);
    }
    const persistentFolder = readDotProperty('pluginFolder') || './scully';
    const scullyPath = join(homeFolder, persistentFolder);
    const outDir = join(scullyPath, 'runtime');
    const tsConfigPath = join(scullyPath, `tsconfig.${scullyConfig.projectName}.json`);
    const modulePath = fullSps.replace(homeFolder, '..');
    if (!existsSync(tsConfigPath)) {
      // tsConfig.compilerOptions.outDir = outDir;
      tsConfig.files.push(modulePath);
      writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      logOk(`created ${yellow(tsConfigPath)}`);
    }
    printProgress(true, 'compiling application');
    rmSync(outDir, { recursive: true, force: true });
    await runScript(`npx ngc -p "${tsConfigPath}"`).catch(() => {
      logError(`Couldn't compile ${yellow(modulePath)}. Please fix the above errors in the app, and run Scully again.`);
      process.exit(0);
    });
    logOk(`Angular application compiled successfully`);
    getFiles(outDir).forEach((file) => {
      copyFileSync(file, file.replace('.js', '.mjs'));
    });
    logOk(`Copied '.js' to '.mjs' files to aid ESM`);
    printProgress(false, 'starting workers');
    await startPSRunner();

    // process.exit(0);
  }
};

function getFiles(dir, ext = 'js') {
  const results = [] as string[];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = resolve(dir, entry.name) as string;
    if (entry.isDirectory()) {
      results.push(...getFiles(res, ext));
    } else {
      if (res.endsWith(ext)) {
        results.push(res);
      }
    }
  }
  return results;
}

/**
 * Set up the Scully Platform Server render
 */
export function enableSPS() {
  /** do the setup (compile angular app etc) */
  registerPlugin('beforeAll', 'compileAngularApp', plugin);
  /** replace the render plugin with the SPS specific render plugin */
  registerPlugin('scullySystem', renderPlugin, findPlugin(SPSRenderer), undefined, { replaceExistingPlugin: true });
  /** register dummy routeRenderer, to prevent loading PPT by default */
  registerPlugin('scullySystem', routeRenderer, async () => undefined);
  /** make sure tear-down of the workers happens */
  registerPlugin('allDone', 'exitAllWorkers', terminateAllPools);
}

async function runScript(cmd: string) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        log(stderr);
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  });
}

async function startPSRunner() {
  const cacheStats = {
    hits: 0,
    misses: 0,
  };
  await findPlugin(initSpSPool)(workerPath);
  const pool = getPool(workerPath);

  getHandledRoutes().then((routes) => {
    // every worker needs a copy od the HanderRoutes[]
    const sendRoutes = pool.map(() => new Job('setHandledRoutes', routes));
    return handleJobs(sendRoutes, pool);
  });
  const cache = new Map<string, Deferred<any>>();
  setupCacheListener();
  async function setupCacheListener() {
    try {
      await loadConfig();
      const listenAll$ = merge(...pool.map((w) => w.messages$));
      const listenCache$ = listenAll$.pipe(filter(({ msg }) => Array.isArray(msg) && msg[0].startsWith('cache')));

      const idChecks$ = listenCache$.pipe(
        filter(({ msg }) => msg[0] === 'cacheHas'),
        tap(({ worker, msg }) => {
          const id = msg[1] as string;
          if (!cache.has(id)) {
            cache.set(id, new Deferred());
            cacheStats.misses += 1;
            worker.send('cacheResult', false);
            return;
          }
          cache
            .get(id)
            .promise.then((cacheItem) => {
              cacheStats.hits += 1;
              worker.send('cacheResult', cacheItem);
            })
            .catch((e) => {
              logError(e);
            });
        })
      );

      const idSetCacheItems$ = listenCache$.pipe(
        filter(({ msg }) => msg[0] === 'cacheSet'),
        tap(({ worker, msg }) => {
          const { id, response }: { id: string; response: any } = msg[1];
          const deferred = cache.get(id);
          deferred.resolve(response);
        })
      );

      merge(idChecks$, idSetCacheItems$).subscribe({
        next({ worker, msg }) {
          // console.log('hm', msg, worker.id);
        },
      });
    } catch (e) {
      console.log('here', e);
    }
  }
}
