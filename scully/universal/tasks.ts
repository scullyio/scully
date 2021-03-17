import { logError } from '@scullyio/scully';
import { ChildProcess, fork } from 'child_process';
import { existsSync } from 'fs';
import { nextTick } from 'process';
import { join } from 'path';
import { Subject, throwError } from 'rxjs';
import { catchError, filter, first, map, take, tap } from 'rxjs/operators/index.js';

/** helpers for inside the actual worker */
export interface Tasks {
  [x: string]: (...msg: any[]) => any | Promise<any>;
}
export function startWorkerListener(tasks: Tasks) {
  /** check if I'm running in an forked task, will be undefined otherwise */
  if (process.send) {
    /** add kill task if not there. */
    if (tasks['kill'] === undefined) {
      tasks.kill = () => {
        process.exit(0);
      };
    }
    process.on('message', async <T extends keyof Tasks>([type, msg]: [T, any]) => {
      if (tasks.hasOwnProperty(type)) {
        try {
          const result = await tasks[type](msg);
          process.send([`${type}Done`, result]);
        } catch (e) {
          console.error(e);
          process.exit(15);
        }
      } else {
        logError(`No worker task found for ${type}`);
      }
    });

    process.send('ready');
    return;
  }
  logError('Trying to start a worker process as main');
  process.exit(15);
}

/** helpers for inside the runner */

/**
 *
 */
export class TaskWorker {
  #messages = new Subject<any>();
  active = true;
  ready: Promise<unknown> | unknown;
  #errCount = 0;
  #lastTask: string;
  messages$ = this.#messages.pipe(
    /** filter out "system" messages, for now its only ready */
    filter((msg) => !(typeof msg === 'string' && ['ready'].includes(msg))),
    map((msg) => ({ worker: this, msg }))
  );
  #lastSend: { type: string | undefined; msg: any } = { type: undefined, msg: undefined };
  #worker: ChildProcess = undefined!;
  constructor(task: string) {
    if (typeof task !== 'string' || !existsSync(task)) {
      throw new Error(`Worker task needs to be a string path to an existing JS file, not: ${task}`);
    }
    this.#init(task);
  }
  get id() {
    return this.#worker !== undefined && this.#worker.pid;
  }

  async send(type: string, msg?: any) {
    if (!this.active) {
      throw new Error(`Trying to send to an inactive job`);
    }
    await this.ready;
    this.#worker.send([type, msg]);
    if (this.#lastSend.type !== type || this.#lastSend.msg !== msg) {
      this.#lastSend = { type, msg };
      this.#errCount = 0;
    }
  }

  #init = (task = this.#lastTask) => {
    this.#lastTask = task;
    const handleFault = (source: string) => (msg: any) => this.#clean({ source, msg });
    this.active = true;
    this.#errCount = 0;
    this.#worker = fork(join(task));
    this.ready = this.#messages.pipe(take(1)).toPromise();
    this.#worker.on('message', (msg) => this.#messages.next(msg));
    this.#worker.on('error', handleFault('error'));
    this.#worker.on('close', handleFault('close'));
    this.#worker.on('disconnect', handleFault('disconnect'));
    this.#worker.on('exit', handleFault('exit'));
  };

  async kill() {
    if (this.active) {
      this.#messages.error(new Error('Task killed by calling TaskWorker.kill()'));
      await this.send('kill');
      this.active = false;
      this.#worker = undefined!;
    }
  }

  #debounceClean: NodeJS.Timeout | undefined;
  #clean = ({ source, msg }: { source: string; msg: any }) => {
    // console.log({ source, msg });
    /** when something happens, it usually doesn't come alone */
    if (this.#debounceClean) {
      clearTimeout(this.#debounceClean);
    }
    /** that why we debounce for 25ms. */
    this.#debounceClean = setTimeout(async () => {
      this.#errCount += 1;
      try {
        /** clean up possible dangling task */
        this.#worker.kill();
      } catch {}
      if (this.#errCount > 3) {
        console.error(`Can't recover worker, failed 3 times in a row. worker is inactive now`);
        this.active = false;
        this.#worker = undefined!;
      } else if (this.active) {
        /** restart and resend last msg */
        this.#init();
        if (this.#lastSend && this.#lastSend.type) {
          this.send(this.#lastSend.type, this.#lastSend.msg);
        }
      }
      this.#debounceClean = undefined;
    }, 25);
  };
}

export class Job {
  pending = true;
  started = false;
  allowedTime = 2 * 60 * 1000;
  #done: (value: unknown) => void = undefined!;
  #fail: (reason?: any) => void = undefined!;
  worker: TaskWorker | undefined;
  /** default timeout time, job wil fail if not done whitin this time */
  done = new Promise((resolve, reject) => ((this.#done = resolve), (this.#fail = reject)));
  constructor(public taskName: string, public taskValue?: any, public trigger?: String) {
    this.trigger = this.trigger ?? `${this.taskName}Done`;
  }

  startWithWorker(worker: TaskWorker) {
    this.started = true;
    let cancelTimout;
    Promise.race([
      new Promise((_, reject) => {
        cancelTimout = setTimeout(() => reject(), this.allowedTime);
      }),
      worker.messages$
        .pipe(
          catchError((e) => (console.log('Error', e), throwError(e))),
          filter((m) => (Array.isArray(m.msg) ? m.msg[0] === this.trigger : m.msg === this.trigger)),
          map(({ msg }) => msg),
          map(([trigger, payload]) => payload),
          take(1)
        )
        .toPromise()
        .catch((e) => console.error(e)),
    ])
      .then((r) => this.#done(r))
      .catch((e) => this.#fail(e));
    this.worker = worker;
    worker.send(this.taskName, this.taskValue);
    this.done.finally(() => {
      this.pending = false;
      clearTimeout(cancelTimout)
    });
  }
}

const taskPools = {} as {
  [taskPath: string]: TaskWorker[];
};
export function getPool(taskPath: string, poolSize?: number) {
  if (!taskPools[taskPath]) {
    taskPools[taskPath] = [] as TaskWorker[];
  }
  const _pool = taskPools[taskPath];
  poolSize = typeof poolSize === 'number' ? poolSize : _pool.length;
  while (poolSize > _pool.length) {
    _pool.push(new TaskWorker(taskPath));
  }
  return _pool;
}

export async function handleJobs(jobs: Job[], pool: TaskWorker[]) {
  // const pool = getPool(scriptFile, poolSize);
  let tasks = [];

  /** start max amount of initial jobs */
  const x = Math.min(pool.length, jobs.length);
  for (let i = 0; i < x; i += 1) {
    jobs[i].startWithWorker(pool[i]);
    tasks.push(jobs[i].done.then(() => jobs[i]));
  }

  let limit = tasks.length;
  while (jobs.some((j) => j.pending)) {
    const jobDone = await Promise.race(tasks);
    // console.log({jobDone});
    const nextJob = jobs.find((row) => row.pending && !row.started);
    if (nextJob) {
      // console.log('jobs scheduled:',++limit)
      nextJob.startWithWorker(jobDone.worker!);
      jobDone.worker = undefined;
    }
    // console.log('left', jobs.filter(row => row.pending && !row.started).length);
    tasks = jobs.filter((row) => row.pending && row.started).map((task) => task.done.then(() => task));
  }

  await Promise.all(tasks);
  return Promise.all(jobs.map((j) => j.done));
}
