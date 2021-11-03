import { exec } from 'child_process';
import { existsSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';
import { filter, merge, tap } from 'rxjs';
import { getPool, green, HandledRoute, loadConfig, log, logError, printProgress, registerPlugin, scullyConfig, yellow } from '../../..';
import { findPlugin } from '../../pluginManagement';
import { renderPlugin } from '../handlers/renderPlugin';
import { terminateAllPools } from '../procesmanager/taskPool';
import { readDotProperty } from '../scullydot';
import { initSpSPool, renderWithSpS } from './serverPlatformRender';



const tsConfig = {
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "./runtime",
    "target": "es2020",
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "skipDefaultLibCheck": true,
    "skipLibCheck": true,
    "lib": ["ES2020", "DOM"],
    "types": ["node"],
    "moduleResolution": "Node",
    "module": "CommonJS"
  },
  "files": [],
  "angularCompilerOptions": {
    "enableIvy": true,
    "compilationMode": "partial"
  }
}


const plugin = async () => {
  /** check if I'm a worker, and import the runner. */
  if (process.env.SCULLY_WORKER === 'true') {
    process.title = 'ScullyWorker';
    const worker = await import('./ps-worker')
      // .then(m => {
      //   // console.log('worker module loaded')
      // })
      .catch(e => {
        console.log('worker module load error', e)
        logError(e)
        process.exit(16);
      });
      /** start the worker */
    worker.start();
  } else {
    const { sourceRoot, homeFolder, spsModulePath } = scullyConfig
    const fullSps = join(homeFolder, spsModulePath);
    const persistentFolder = readDotProperty('pluginFolder') || './scully';
    const scullyPath = join(homeFolder, persistentFolder);
    const outDir = join(scullyPath, 'runtime');
    const tsConfigPath = join(scullyPath, `tsconfig.${scullyConfig.projectName}.json`);
    const modulePath = fullSps.replace(homeFolder, '..')
    if (!existsSync(tsConfigPath)) {
      tsConfig.compilerOptions.outDir = outDir;
      tsConfig.files.push(modulePath);
      writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
      log(`  ${green('✔')} created ${yellow(tsConfigPath)}`);
    }
    printProgress(true, 'compiling application')
    rmSync(outDir, { recursive: true, force: true });
    await runScript(`npx ngc -p "${tsConfigPath}"`).catch(() => {
      logError(`Couldn't compile ${yellow(modulePath)}. Please fix the above errors in the app, and run Scully again.`);
      process.exit(0);
    });
    log(`  ${green('✔')} Angular application compiled successfully`);
    printProgress(false, 'starting workers')
    await startPSRunner();

    // process.exit(0);
  }
};

export function enableSpS() {
  registerPlugin('beforeAll', 'compileAngularApp', plugin);
  registerPlugin('scullySystem', renderPlugin, findPlugin(renderWithSpS), undefined, { replaceExistingPlugin: true });
  registerPlugin('allDone', 'compileAngularApp', terminateAllPools);
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
  setupCacheListener();
  await findPlugin(initSpSPool)(join(__dirname,'ps-worker.js'))
  const cache = new Map<string, Deferred<any>>();
  async function setupCacheListener() {
    try {
      await loadConfig();
      const pool = getPool(__filename, scullyConfig.maxRenderThreads);
      const listen$ = merge(...pool.map((w) => w.messages$)).pipe(
        filter(({ msg }) => Array.isArray(msg) && msg[0].startsWith('cache'))
      );

      const idChecks$ = listen$.pipe(
        filter(({ msg }) => msg[0] === 'cacheHas'),
        tap(({ worker, msg }) => {
          const id = msg[1] as string;
          if (!cache.has(id)) {
            cache.set(id, new Deferred());
            cacheStats.misses += 1;
            worker.send('cacheResult', false);
            return;
          }
          cache.get(id).promise.then((cacheItem) => {
            cacheStats.hits += 1;
            worker.send('cacheResult', cacheItem);
          }).catch((e) => {
            logError(e);
          });
        })
      );

      const idSetCacheItems$ = listen$.pipe(
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
export class Deferred<T> {
  resolve!: (result?: any) => void;
  reject!: (error?: any) => void;
  promise = new Promise<T>((rs, rj) => {
    this.resolve = rs;
    this.reject = rj;
  });
}
