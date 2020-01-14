import {Browser, launch, LaunchOptions} from 'puppeteer';
import {Observable} from 'rxjs';
import {shareReplay, take} from 'rxjs/operators';
import {log} from '../utils/log';
import * as yargs from 'yargs';
import {scullyConfig} from '../utils/config';

const {showBrowser} = yargs
  .boolean('sb')
  .alias('sb', 'showBrowser')
  .describe('sb', 'Shows the puppeteer controlled browser').argv;

/** use shareReplay so the browser will stay in memory during the lifetime of the program */
const launched = obsBrowser().pipe(shareReplay({refCount: false, bufferSize: 1}));
export const launchedBrowser: () => Promise<Browser> = () => launched.pipe(take(1)).toPromise();
let browser: Browser;

function obsBrowser(options: LaunchOptions = scullyConfig.puppeteerLaunchOptions || {}): Observable<Browser> {
  if (showBrowser) {
    options.headless = false;
  }
  // option.args= ['--no-sandbox', '--disable-setuid-sandbox'],

  const {SCULLY_PUPPETEER_EXECUTABLE_PATH} = process.env;
  if (SCULLY_PUPPETEER_EXECUTABLE_PATH) {
    log(`Launching puppeteer with executablePath ${SCULLY_PUPPETEER_EXECUTABLE_PATH}`);
    options.executablePath = SCULLY_PUPPETEER_EXECUTABLE_PATH;
    options.args = [...options.args, '--disable-dev-shm-usage'];
  }
  return new Observable(obs => {
    const promisedBrowser = launch(options);
    promisedBrowser
      .then(b => {
        browser = b;
        obs.next(b);
      })
      .catch(e => obs.error(e));
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
    // console.log(exitCode)
  }
  if (options.exit) {
    process.exit();
  }
}

// do something when app is closing
process.on('exit', exitHandler.bind(null, {cleanup: true}));

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit: true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit: true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit: true}));

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit: true}));
