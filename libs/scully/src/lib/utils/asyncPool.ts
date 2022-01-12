import { performance } from 'perf_hooks';
import { logWarn, printProgress } from './log';
import { waitForIt } from './waitForIt';

const progressTime = 100;
/**
 * takes an array, and runs **MaxParalellTasks** in paralell until all tasks are node
 * @param MaxParalellTasks
 * @param array
 * @param taskFn
 */
export async function asyncPool<T>(MaxParalellTasks: number, array: T[], taskFn: (x: T) => Promise<T>): Promise<T[]> {
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
  return Promise.all(ret);
}

function logit(x: Promise<any>[]) {
  x.forEach((p) => logWarn(p['item'].route));
}
