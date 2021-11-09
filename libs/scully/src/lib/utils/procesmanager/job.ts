import { catchError, filter, lastValueFrom, map, take, throwError } from 'rxjs';
import { logError } from '../log';
import { Deferred } from "../platform-server/deferred";
import { TaskWorker } from './TaskWorker';


export class Job {
  pending = true;
  started = false;
  //TODO: decide if this timeout needs to be configurable.
  allowedTime = 1 * 60 * 1000;
  #deferred = new Deferred();
  #done= this.#deferred.resolve;
  #fail= this.#deferred.reject;
  worker: TaskWorker | undefined;
  /** default timeout time, job wil fail if not done in this time */
  done = this.#deferred.promise;
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
          filter(({msg}) => (Array.isArray(msg) ? msg[0] === this.trigger : msg === this.trigger)),
          map(({ msg }) => msg),
          map(([trigger, payload]) => payload),
          take(1)
        )
      )
    ])
      .then((r) => this.#done(r))
      .catch((e) => this.#fail(e))
      .finally(() => {
        clearTimeout(cancelTimout);
        this.pending = false;
      });
    this.worker = worker;
    worker.send(this.taskName, this.taskValue);
  }
}
