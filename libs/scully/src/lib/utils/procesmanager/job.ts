import { catchError, filter, lastValueFrom, map, take, throwError } from 'rxjs';
import { logError } from '../log';
import { TaskWorker } from './TaskWorker';


export class Job {
  pending = true;
  started = false;
  allowedTime = .5 * 60 * 1000;
  #done: (value: unknown) => void = undefined!;
  #fail: (reason?: any) => void = undefined!;
  worker: TaskWorker | undefined;
  /** default timeout time, job wil fail if not done in this time */
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
      lastValueFrom(worker.messages$
        .pipe(
          catchError((e) => (logError('', e), throwError(e))),
          filter((m) => (Array.isArray(m.msg) ? m.msg[0] === this.trigger : m.msg === this.trigger)),
          map(({ msg }) => msg),
          map(([trigger, payload]) => payload),
          take(1)
        )
      )
    ])
      .then((r) => this.#done(r))
      .catch((e) => this.#fail(e));
    this.worker = worker;
    worker.send(this.taskName, this.taskValue);
    this.done.finally(() => {
      this.pending = false;
      clearTimeout(cancelTimout);
    });
  }
}
