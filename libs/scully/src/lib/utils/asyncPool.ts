import { waitForIt } from '../renderPlugins/puppeteerRenderPlugin';
import { printProgress } from './log';
import { performance } from 'perf_hooks';
import { BlobWorker, spawn, Pool, Thread } from 'threads';
import { QueuedTask } from 'threads/dist/master/pool-types';

const progressTime = 100;
/**
 * takes an array, and runs **MaxParalellTasks** in paralell until all tasks are dode
 * @param MaxParalellTasks
 * @param array
 * @param taskFn
 */
export async function asyncPool<T>(MaxParalellTasks: number, array: T[], taskFn: (x: T) => Promise<T>): Promise<T[]> {
  const ret: QueuedTask<Thread, T>[] = [];
  const executing = [];
  let logTime = performance.now();
  const workerFn = BlobWorker.fromText(`"import { expose } from "threads"; expose(${taskFn.toString()});`);
  const pool = Pool(() => spawn(workerFn), MaxParalellTasks);
  for (const item of array) {
    const p = pool.queue(async (fn) => await fn(item));
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    e['item'] = item;
    executing.push(e);
    const now = performance.now();
    if (now - logTime > progressTime) {
      const tasksLeft = Math.max(array.length - ret.length, executing.length);
      printProgress(array.length + 1 - tasksLeft, 'Rendering Routes:', array.length);
      logTime = now;
    }
    if (executing.length >= MaxParalellTasks) {
      await Promise.race(executing);
    }
  }
  while (executing.length > 0) {
    /** inform used tasks are still running. */
    await Promise.race([...executing, waitForIt(progressTime)]);
  }
  printProgress(array.length, 'Rendering Routes:', array.length);
  return Promise.all(ret).then((ret) => {
    pool.terminate();
    return ret;
  });
}
