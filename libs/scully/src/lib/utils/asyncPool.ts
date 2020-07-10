import { waitForIt } from '../renderPlugins/puppeteerRenderPlugin';
import { logWarn, printProgress } from './log';
import { performance } from 'perf_hooks';

const progressTime = 100;
/**
 * takes an array, and runs **MaxParralellTasks** in parralell until all tasks are node
 * @param MaxParralellTasks
 * @param array
 * @param taskFn
 */
export async function asyncPool<T>(
  MaxParralellTasks: number,
  array: T[],
  taskFn: (x: T) => Promise<T>
): Promise<T[]> {
  const ret = [];
  const executing = [];
  let logTime = performance.now();
  for (const item of array) {
    const p = taskFn(item);
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    e['item'] = item;
    executing.push(e);
    const now = performance.now();
    if (now - logTime > progressTime) {
      printProgress(Math.max(array.length - ret.length, executing.length));
      logTime = now;
    }
    if (executing.length >= MaxParralellTasks) {
      await Promise.race(executing);
    }
  }
  while (executing.length > 0) {
    /** inform used tasks are still running. */
    printProgress(executing.length);
    await Promise.race([...executing, waitForIt(progressTime)]);
  }
  return Promise.all(ret);
}

function logit(x: Promise<any>[]) {
  x.forEach((p) => logWarn(p['item'].route));
}
