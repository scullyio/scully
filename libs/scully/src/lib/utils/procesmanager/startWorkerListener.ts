import { Subject } from 'rxjs';
import { logError } from '../log';
import { Tasks } from './tasks.interface';

const masterTaskList: Tasks = {
  kill: () => process.exit(0),
};
const workerMessages = new Subject<{ type: string; msg: any }>();
export const workerMessages$ = workerMessages.asObservable();

export const addWorkerTask = (key: string, fn: (...msg: any[]) => any | Promise<any>) => {
  if (masterTaskList.hasOwnProperty(key)) {
    console.log(`Task ${key} already defined, skipped assignment`);
    return;
  }
  masterTaskList[key] = fn;
};

export function startWorkerListener(tasks: Tasks) {
  /** check if I'm running in an forked task, will be undefined otherwise */
  if (process.send) {
    /** add tasks to master task list. */
    Object.entries(tasks).forEach(([key, task]) => addWorkerTask(key, task));

    process.on('message', async ([type, msg]: [string, any]) => {
      if (masterTaskList.hasOwnProperty(type)) {
        try {
          const result = await masterTaskList[type](msg);
          process.send([`${type}Done`, result]);
        } catch (e) {
          console.error(e);
          process.exit(15);
        }
      } else {
        // logError(`No worker task found for ${type}`);
        workerMessages.next({ type, msg });
      }
    });

    process.send('ready');
    return;
  }
  logError('Trying to start a worker process as main');
  process.exit(15);
}
