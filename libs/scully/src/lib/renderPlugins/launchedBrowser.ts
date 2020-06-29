import { Browser, launch, LaunchOptions } from 'puppeteer';
import { from, Observable, BehaviorSubject, merge } from 'rxjs';
import {
  shareReplay,
  switchMap,
  take,
  throttleTime,
  tap,
  filter,
} from 'rxjs/operators';
import { showBrowser } from '../utils/cli-options';
import { loadConfig, scullyConfig } from '../utils/config';
import { log, logWarn, logError, green } from '../utils/log';
import { waitForIt } from './puppeteerRenderPlugin';

const launches = new BehaviorSubject<void>(undefined);
/**
 * Returns an Observable with that will fire with the launched puppeteer in there.
 */
const launched: Observable<Browser> = from(loadConfig).pipe(
  /** give the system a bit of breathing room, and prevent race */
  switchMap(() => from(waitForIt(50))),
  switchMap(() => merge(obsBrowser(), launches)),
  /** use shareReplay so the browser will stay in memory during the lifetime of the program */
  shareReplay({ refCount: false, bufferSize: 1 }),
  filter<Browser>((e) => e !== undefined)
);

let useageCounter = 0;
export const launchedBrowser: () => Promise<Browser> = async () => {
  if (++useageCounter > 500) {
    launches.next();
    useageCounter = 0;
  }
  return launched.pipe(take(1)).toPromise();
};
let browser: Browser;

/** ICE relaunch puppeteer. */
export const reLaunch = (): Promise<Browser> => {
  launches.next();
  return launchedBrowser();
};

/**
 * Function that creates an observable with the puppeteer browser inside
 * @param options
 */
function obsBrowser(
  options: LaunchOptions = scullyConfig.puppeteerLaunchOptions || {}
): Observable<Browser> {
  if (showBrowser) {
    options.headless = false;
  }
  options.ignoreHTTPSErrors = true;
  options.args = options.args || [];
  // options.args = ['--no-sandbox', '--disable-setuid-sandbox'];

  const { SCULLY_PUPPETEER_EXECUTABLE_PATH } = process.env;
  if (SCULLY_PUPPETEER_EXECUTABLE_PATH) {
    log(
      `Launching puppeteer with executablePath ${SCULLY_PUPPETEER_EXECUTABLE_PATH}`
    );
    options.executablePath = SCULLY_PUPPETEER_EXECUTABLE_PATH;
    options.args = [...options.args, '--disable-dev-shm-usage'];
  }
  return new Observable((obs) => {
    let tries = 0;
    let lastTry: number;
    const openBrowser = () =>
      launch(options)
        .then((b) => {
          browser = b;
          b.on('disconnected', reLaunch);
          logWarn(green('Browser successfully launched'));
          obs.next(b);
          return b;
        })
        .catch((e) => {
          /** reset tries when its over a second ago that the last browser was opened. */
          // if (performance.now() - lastTry > 1000) {
          //   tries = 0;
          // }
          // if (++tries < 5) {
          //   logWarn(`Reopening puppeteer.`);
          //   lastTry = performance.now();
          //   return setTimeout(() => openBrowser(), 50);
          // }
          logWarn(`Puppeteer launch error.`);
          obs.error(e);
          process.exit(15);
        });
    launches
      .pipe(
        tap(() => log(green('relaunch cmd received'))),
        /** the long trottletime is to cater for the concurrently running browsers to crash and burn. */
        throttleTime(5000)
      )
      .subscribe({
        next: () => {
          try {
            if (browser && browser.process() != null) {
              browser.process().kill('SIGINT');
            }
          } catch {}
          openBrowser();
        },
      });
    return () => {
      if (browser) {
        browser.close();
        browser = undefined;
      }
    };
  });
}

/**
 * The following code is to make sure puppeteer will be closed properly.
 * Future additions on cleanup might to be handled here too.
 */
process.stdin.resume(); // so the program will not close instantly

function exitHandler(options, exitCode) {
  if (options.cleanup && browser) {
    browser.close();
    browser = undefined;
  }
  if (exitCode || exitCode === 0) {
    if (typeof exitCode !== 'number') {
      /** not a 'clean' exit log to console */
      console.log(exitCode);
    }
  }
  // TODO: kill the server here. (but only if started from scully, not when started from another process)
  if (options.exit) {
    process.exit();
  }
}

// do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
