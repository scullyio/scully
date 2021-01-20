import { Browser, launch, LaunchOptions } from 'puppeteer';
import { BehaviorSubject, from, interval, merge, Observable, of, timer } from 'rxjs';
import { catchError, delayWhen, filter, shareReplay, switchMap, take, throttleTime } from 'rxjs/operators';
import { captureException } from '../utils/captureMessage';
import { showBrowser } from '../utils/cli-options';
import { loadConfig, scullyConfig } from '../utils/config';
import { log, logError } from '../utils/log';
import { waitForIt } from './puppeteerRenderPlugin';

const launches = new BehaviorSubject<void>(undefined);
/**
 * Returns an Observable with that will fire with the launched puppeteer in there.
 */
export const launchedBrowser$: Observable<Browser> = of('').pipe(
  /** load config only after a subscription is made */
  switchMap(loadConfig),
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
  return launchedBrowser$.pipe(take(1)).toPromise();
};
export let browser: Browser;

/** ICE relaunch puppeteer. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const reLaunch = (reason?: string): Promise<Browser> => {
  //   if (reason) {
  //     logWarn(
  //       white(`
  // ========================================
  //     Relaunch because of ${reason}
  // ========================================

  //     `)
  //     );
  //   }
  launches.next();
  return launchedBrowser();
};

/**
 * Function that creates an observable with the puppeteer browser inside
 * @param options
 */
function obsBrowser(options: LaunchOptions = scullyConfig.puppeteerLaunchOptions || {}): Observable<Browser> {
  if (showBrowser) {
    options.headless = false;
  }
  options.ignoreHTTPSErrors = true;
  options.args = options.args || [];
  // options.args = ['--no-sandbox', '--disable-setuid-sandbox'];

  const { SCULLY_PUPPETEER_EXECUTABLE_PATH } = process.env;
  if (SCULLY_PUPPETEER_EXECUTABLE_PATH) {
    log(`Launching puppeteer with executablePath ${SCULLY_PUPPETEER_EXECUTABLE_PATH}`);
    options.executablePath = SCULLY_PUPPETEER_EXECUTABLE_PATH;
    options.args = [...options.args, '--disable-dev-shm-usage'];
  }
  let isLaunching = false;
  let failedLaunces = 0;
  return new Observable((obs) => {
    const openBrowser = () => {
      if (!isLaunching) {
        isLaunching = true;
        launch(options)
          .then((b) => {
            browser = b;
            b.on('disconnected', () => reLaunch('disconnect'));
            // logWarn(green('Browser successfully launched'));
            obs.next(b);
            setTimeout(() => (isLaunching = false), 1000);
            /** reset fail counter on successful launch */
            failedLaunces = 0;
            return b;
          })
          .catch((e) => {
            if (e.message.includes('Could not find browser revision')) {
              logError(
                `Puppeteer cannot find chromium installation.  Try adding 'puppeteerLaunchOptions: {executablePath: CHROMIUM_PATH}' to your scully.*.config.ts file.`
              );
            } else if (++failedLaunces < 3) {
              return launches.next();
            }
            captureException(e);
            logError(`Puppeteer launch error.`, e);
            obs.error(e);
            process.exit(15);
          });
      }
    };
    launches
      .pipe(
        /** ignore request while the browser is already starting, we can only launch 1 */
        filter(() => !isLaunching),
        /** the long throttleTime is to cater for the concurrently running browsers to crash and burn. */
        throttleTime(15000),
        // provide enough time for the current async operations to finish before killing the current browser instance
        delayWhen(() =>
          merge(
            /** timout at 25 seconds */
            timer(25000),
            /** or then the number of pages hits <=1  */
            interval(500).pipe(
              /** if the browser is active get the pages promise */
              switchMap(() => (browser ? browser.pages() : of([]))),
              /** only go ahead when there is <=1 pages (the browser itself) */
              filter((p: unknown[]) => browser === undefined || p.length <= 1)
            )
          ).pipe(
            /** use take 1 to make sure we complete when one of the above fires */
            take(1),
            /** if something _really_ unwieldy happens with the browser, ignore and go ahead */
            catchError(() => of([]))
          )
        )
      )
      .subscribe({
        next: () => {
          try {
            if (browser && browser.process() != null) {
              browser.process().kill('SIGINT');
            }
          } catch {
            /** ignored */
          }
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
