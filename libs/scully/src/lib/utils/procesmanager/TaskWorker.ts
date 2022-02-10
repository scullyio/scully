import { ChildProcess, fork } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';
import { filter, lastValueFrom, map, mapTo, Observable, Subject, take } from 'rxjs';
import { logError } from '../log.js';

/**
 * taksWorker, starts a script in its own process
 */
export class TaskWorker {
  #messages = new Subject<any>();
  /**
   * if a worker dies due to error on anything else unexpected 3 times in a row
   *  it becomes false and can't start a new task anymore. the sub-process is killed
   */
  active = true;
  ready: Promise<unknown> | unknown;
  #errCount = 0;
  #lastTask: string;
  /** messages from the sub-process */
  messages$: Observable<{ worker: TaskWorker; msg: any }> = this.#messages.pipe(
    /** filter out "system" messages, for now its only ready */
    filter(msg => !(typeof msg === 'string' && ['ready'].includes(msg))),
    map(msg => ({ worker: this, msg }))
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
    const handleFault = (source: string) => (msg: any) => {
      return this.#clean({ source, msg });
    };
    const args = ['ScullyWorker', ...process.argv.slice(1)];
    this.active = true;
    this.#errCount = 0;
    this.#worker = fork(join(task), args, {
      env: { ...process.env, SCULLY_WORKER: 'true' }
    });
    this.#worker['title'] = 'ScullyWorker';
    this.ready = lastValueFrom(this.#messages.pipe(take(1), mapTo(true)));
    this.#worker.on('message', msg => this.#messages.next(msg));
    this.#worker.on('error', handleFault('error'));
    this.#worker.on('close', handleFault('close'));
    this.#worker.on('disconnect', handleFault('disconnect'));
    this.#worker.on('exit', handleFault('exit'));
  };

  async kill() {
    if (this.active) {
      this.#messages.error(new Error('Task killed by calling TaskWorker.kill()'));
      await this.terminate();
    }
  }

  async terminate() {
    if (this.active) {
      try {
        this.#worker.kill();
      } catch {
        /** ipc might already be down, don't worry */
      }
      this.active = false;
      this.#worker = undefined!;
    }
  }

  #debounceClean: NodeJS.Timeout | undefined;
  #clean = ({ source, msg }: { source: string; msg: any }) => {
    if (!!!msg) {
      /** no message means a clean exit from the worker, don't restart */
      return;
    }
    /** when something happens, it usually doesn't come alone */
    if (this.#debounceClean) {
      clearTimeout(this.#debounceClean);
    }
    if (source === 'exit' && +msg === 16) {
      console.log('Probably syntax error loading worker, aborting');
      process.exit(15);
    }
    logError(`${source} error:`, msg);
    /** that why we debounce for 25ms. */
    this.#debounceClean = setTimeout(async () => {
      this.#errCount += 1;
      try {
        /** clean up possible dangling task */
        this.#worker.kill('SIGKILL');
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
