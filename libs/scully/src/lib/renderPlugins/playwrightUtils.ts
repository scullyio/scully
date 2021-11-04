import * as playwright from "playwright";
import { Browser } from "playwright";
import { BehaviorSubject, from, merge, Observable, of } from 'rxjs';
import { filter, shareReplay, switchMap, take } from "rxjs/operators";
import { logWarn, white } from "../utils";
import { scullyConfig } from '../utils/config';
const launches = new BehaviorSubject<void>(undefined);

export let browser: Browser;
export function waitForIt(milliSeconds: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), milliSeconds));
}

let usageCounter = 0;
export const launchedBrowser: () => Promise<Browser> = async () => {
  console.error('launchedBrowser' + usageCounter);
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
  console.error(pluginConfig.browser);
  const browserType = pluginConfig.browser
  const playrightBrowser = playwright[browserType];
  const browser = await playrightBrowser.launch({ headless: pluginConfig.headless, channel: pluginConfig.channel });
  return browser.newContext();
}
export const launchedBrowser$: Observable<Browser> = of('').pipe(
  switchMap(() => from(waitForIt(500))),
  switchMap(() => merge(obsBrowser(), launches)),
  shareReplay({ refCount: false, bufferSize: 1 }),
  filter<Browser>((e) => e !== undefined)
);


function obsBrowser(options: any = scullyConfig.puppeteerLaunchOptions || {}): Observable<Browser> {
  let isLaunching = false;
  return new Observable((obs) => {
    const startPlaywright = () => {
      if (!isLaunching) {
        isLaunching = true;
        launch(options).then((b) => {
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
