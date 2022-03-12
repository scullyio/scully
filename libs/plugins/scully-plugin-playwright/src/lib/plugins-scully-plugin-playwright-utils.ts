import { loadConfig, logError, logWarn, white, yellow } from '@scullyio/scully';
import { showBrowser } from '@scullyio/scully/src/lib/utils/cli-options';
import * as playwright from 'playwright';
import { Browser, LaunchOptions } from 'playwright';
import {
  BehaviorSubject,
  catchError,
  delayWhen,
  filter,
  from,
  merge,
  Observable,
  of,
  shareReplay,
  switchMap,
  take,
  throttleTime,
  timer,
} from 'rxjs';

const defaultConfig: LaunchOptions = {
  headless: true,
  channel: 'chrome',
  browser: 'chromium',
} as any;
const options = { ...defaultConfig };

const launches = new BehaviorSubject<void>(undefined);

export let browser: Browser;
export function waitForIt(milliSeconds: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), milliSeconds));
}

let usageCounter = 0;
export const launchedBrowser: () => Promise<Browser> = async () => {
  if (++usageCounter > 500) {
    launches.next();
    usageCounter = 0;
  }
  return launchedBrowser$.pipe(take(1)).toPromise();
};

export const reLaunch = (reason?: string): Promise<Browser> => {
  if (reason) {
    logWarn(
      white(`
  ========================================
      Relaunch because of ${reason}
  ========================================

      `)
    );
  }
  launches.next();
  return launchedBrowser();
};

const launch = async (pluginConfig: any): Promise<Browser> => {
  const browserType = pluginConfig.browser;
  const playrightBrowser = playwright[browserType];
  const browser = await playrightBrowser.launch({ headless: pluginConfig.headless, channel: pluginConfig.channel });
  return browser;
};
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

function obsBrowser(): Observable<Browser> {
  let isLaunching = false;
  if (showBrowser) {
    options.headless = false;
  }
  options.args = options.args || [];
  return new Observable((obs) => {
    const startPlaywright = () => {
      if (!isLaunching) {
        isLaunching = true;
        launchPlayWrightWithRetry(options).then((b) => {
          /** I will only come here when playwright is actually launched */
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
            timer(25000)
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
            if (browser && browser.contexts() != null) {
              browser.close();
            }
          } catch {
            /** ignored */
          }
          startPlaywright();
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
function launchPlayWrightWithRetry(options, failedLaunches = 0): Promise<Browser> {
  const timeout = (millisecs: number) => new Promise((_, reject) => setTimeout(() => reject('timeout'), millisecs));
  return Promise.race([
    /** use a 1 minute timeout to detect a stalled launch of playwright */
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
        return launchPlayWrightWithRetry(options, failedLaunches);
      }
      throw new Error('failed 3 times to launch');
    })
    .catch((b) => {
      /** second stage catch, houston, we have a problem, and will abort */
      logError(`
=================================================================================================
Playwright cannot find or launch the browser. (by default chrome)
This might happen because the default timeout (60 seconds) is to short on this system
this can be fixed by adding the ${yellow('--serverTimeout=x')} cmd line option.
   (where x = the new timeout in milliseconds)
When this happens in CI/CD you can find some additional information here:
https://playwright.dev/docs/troubleshooting
=================================================================================================
      `);
      process.exit(15);
    }) as unknown as Promise<Browser>;
}
