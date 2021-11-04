import { Browser, launch } from 'puppeteer';
import { BehaviorSubject, from, interval, merge, Observable, of, timer } from 'rxjs';
import { catchError, delayWhen, filter, shareReplay, switchMap, take, throttleTime } from 'rxjs';
import { showBrowser, serverTimeout } from '../utils/cli-options';
import { loadConfig, scullyConfig } from '../utils/config';
import { log, logError, yellow } from '../utils/log';
import { waitForIt } from './puppeteerRenderPlugin';

const launches = new BehaviorSubject<void>(undefined);
/**
 * Returns an Observable with that will fire with the launched puppeteer in there.
 */
export const launchedBrowser$: Observable<Browser> = of('').pipe(
  /** load config only after a subscription is made */
  switchMap(() => loadConfig()),
  /** give the system a bit of breathing room, and prevent race */
  switchMap(() => from(waitForIt(50))),
  switchMap(() => merge(obsBrowser(), launches)),
  /** use shareReplay so the browser will stay in memory during the lifetime of the program */
  shareReplay({ refCount: false, bufferSize: 1 }),
  filter<Browser>((e) => e !== undefined)
);

let usageCounter = 0;
export const launchedBrowser: () => Promise<Browser> = async () => {
  if (++usageCounter > 500) {
    launches.next();
    usageCounter = 0;
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
function obsBrowser(options: any = scullyConfig.puppeteerLaunchOptions || {}): Observable<Browser> {
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
  return new Observable((obs) => {
    const startPupetteer = () => {
      if (!isLaunching) {
        isLaunching = true;
        launchPuppeteerWithRetry(options).then((b) => {
          /** I will only come here when puppeteer is actually launched */
          browser = b;
          b.on('disconnected', () => reLaunch('disconnect'));
          obs.next(b);
          /** only allow a relaunch in a next cycle */
          setTimeout(() => (isLaunching = false), 1000);
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
          startPupetteer();
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
 * Helper to try launching pupteer, tries 3 times, and then exits on failure.
 * it also features an timeout, for when puppeteer silently fails
 * @param options Puppeteer launch options
 * @param failedLaunches number of retries.
 * @returns promise<Browser>
 */
function launchPuppeteerWithRetry(options, failedLaunches = 0): Promise<Browser> {
  const timeout = (millisecs: number) => new Promise((_, reject) => setTimeout(() => reject('timeout'), millisecs));
  return Promise.race([
    /** use a 1 minute timeout to detect a stalled launch of puppeteer */
    timeout(Math.max(/** serverTimeout,*/ 60 * 1000)),
    launch(options).then((b) => {
      return b as unknown as Browser;
    }),
  ])
    .catch((e) => {
      /** first stage catch check for retry */
      if (e.message.includes('Could not find browser revision')) {
        throw new Error('Failed launch');
      }
      if (++failedLaunches < 3) {
        return launchPuppeteerWithRetry(options, failedLaunches);
      }
      throw new Error('failed 3 times to launch');
    })
    .catch((b) => {
      /** second stage catch, houston, we have a problem, and will abort */
      logError(`
=================================================================================================
Puppeteer cannot find or launch the browser. (by default chrome)
 Try adding 'puppeteerLaunchOptions: {executablePath: CHROMIUM_PATH}'
 to your scully.*.config.ts file.
Also, this might happen because the default timeout (60 seconds) is to short on this system
this can be fixed by adding the ${yellow('--serverTimeout=x')} cmd line option.
   (where x = the new timeout in milliseconds)
When this happens in CI/CD you can find some additional information here:
https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
=================================================================================================
      `);
      process.exit(15);
    }) as unknown as Promise<Browser>;
}
