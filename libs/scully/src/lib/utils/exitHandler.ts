import { browser } from '../renderPlugins/launchedBrowser';

export function installExitHandler() {
  /**
   * The following code is to make sure puppeteer will be closed properly.
   * Future additions on cleanup might to be handled here too.
   */

  /**
   * We need this because we want to handle the exception codes.
   * However, If this is in place, node will _not_ exit anymore when the event cue runs to its end.
   * so this is inside a function, we must call when we need this. We can _not_ do it when we are in 'library' mode.
   * without it, we have no proper way to wind down the browser or puppeteer.
   */
  process.stdin.resume(); // so the program will not close.

  function exitHandler(options, exitCode) {
    if (exitCode || exitCode === 0) {
      if (typeof exitCode !== 'number') {
        /** not a 'clean' exit log to console */
        console.log(exitCode);
      }
    }
    // TODO: kill the server here. (but only if started from scully, not when started from another process)
    if (options.exit) {
      if (browser) {
        browser.close().then(() => process.exit(exitCode));
      } else {
        process.exit(exitCode);
      }
    }
  }
  // do something when app is closing
  process.on('exit', exitHandler.bind(null, { exit: true }));
  // catches ctrl+c event
  process.on('SIGINT', exitHandler.bind(null, { exit: true }));
  process.on('SIGTERM', exitHandler.bind(null, { exit: true }));
  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
  process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));
  // catches uncaught exceptions
  process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
}
