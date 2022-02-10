import { Subject } from 'rxjs';
import { logError } from '../log.js';
import { Tasks } from './tasks.interface.js';

const masterTaskList: Tasks = {
  kill: () => {
    process.exit(0);
  }
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
  if (process.env.SCULLY_WORKER === 'true') {
    let watchDog: NodeJS.Timeout;
    /** add tasks to master task list. */
    Object.entries(tasks).forEach(([key, task]) => addWorkerTask(key, task));

    process.on('message', async ([type, msg]: [string, any]) => {
      watchDog && clearTimeout(watchDog);
      //TODO: do we need to make the 5 minute timeout configurable?
      watchDog = setTimeout(() => {
        /** terminate worker after 5 minutes of inactivity */
        process.exit(0);
      }, 5 * 60 * 1000);
      // console.log('got msg',type,msg)s
      if (masterTaskList.hasOwnProperty(type)) {
        try {
          const result = await masterTaskList[type](msg);
          process.send([`${type}Done`, result]);
        } catch (e) {
          console.error(e);
          process.exit(15);
        }
      } else {
        logError(`No worker task found for ${type}`);
        workerMessages.next({ type, msg });
      }
    });

    process.on('exit', () => {
      process.exit(0);
    });

    process.on('uncaughtException', (err: Error) => {
      logError(`Uncaught exception in worker thread ${err}`);
      process.exit(15);
    });

    process.send('ready');
    return;
  }
  logError('Trying to start a worker process as main');
  process.exit(15);
}
