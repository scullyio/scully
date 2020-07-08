import { logError, logWarn, orange, yellow, printProgress } from './log';
import { waitForIt } from '../renderPlugins/puppeteerRenderPlugin';

/**
 * takes an array, and runs **MaxParralellTasks** in parralell until all tasks are node
 * @param MaxParralellTasks
 * @param array
 * @param taskFn
 */
const timeoutVal = 2 * 60 * 1000;
export async function asyncPool<T>(
  MaxParralellTasks: number,
  array: T[],
  taskFn: (x: T) => Promise<T>
): Promise<T[]> {
  const ret = [];
  const executing = [];
  for (const item of array) {
    const p = taskFn(item);
    ret.push(p);
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    e['item'] = item;
    executing.push(e);
    if (executing.length >= MaxParralellTasks) {
      await Promise.race(executing);
    }
  }
  while (executing.length > 0) {
    /** inform used tasks are still running. */
    printProgress(executing.length);
    await Promise.race([...executing, waitForIt(100)]);
  }
  return Promise.all(ret);
}

function logit(x: Promise<any>[]) {
  x.forEach((p) => logWarn(p['item'].route));
}
