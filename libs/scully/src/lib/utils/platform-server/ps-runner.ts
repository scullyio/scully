import { findPlugin, getPool, loadConfig, logError, scullyConfig } from '../../..';
import { filter, merge, tap } from 'rxjs';
import { serverPlatformRender } from '../../systemPlugins/serverPlatformRender';

/** check if I'm a worker, and import the runner. */
if (process.env.SCULLY_WORKER === 'true') {
  process.title = 'ScullyWorker';
  import('./ps-worker')
  // .then(m => {
  //   // console.log('worker module loaded')
  // })
  .catch(e => {
    console.log('worker module load error', e)
    logError(e)
    process.exit(16);
  });
}

// import {createProgram} from "@angular/compiler-cli"

export async function startPSRunner() {
  console.log('starting PS runner');

  const cacheStats = {
    hits: 0,
    misses: 0,
  };
  setupCacheListener();
  findPlugin(serverPlatformRender)(__filename).then((r) => {
    // console.log(cacheStats);
  });
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
