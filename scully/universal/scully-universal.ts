import { findPlugin, getPool, loadConfig, scullyConfig, universalRender } from '@scullyio/scully';
import { merge } from 'rxjs';
import { filter, tap } from 'rxjs';

if (process.send) {
  import('./scully-universal-worker').then(m => {
    // console.log('worker module loaded')
  }).catch(e => console.log(e));
} else {
  console.log('starting app')
  const cacheStats = {
    hits: 0,
    misses: 0,
  };
  setupCacheListener();
  findPlugin(universalRender)(__filename).then((r) => {
    console.log(cacheStats);
  });
  const cache = new Map<string, Deferred<any>>();
  async function setupCacheListener() {
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
          worker.send('cacheResult',cacheItem);
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
        // console.log('hm',msg, worker.id);
      },
    });
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
