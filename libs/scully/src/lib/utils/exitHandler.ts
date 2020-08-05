import { browser } from '../renderPlugins/launchedBrowser';
/**
 * The following code is to make sure puppeteer will be closed properly.
 * Future additions on cleanup might to be handled here too.
 */
process.stdin.resume(); // so the program will not close instantly

function exitHandler(options, exitCode) {
  if (options.cleanup && browser) {
    browser.close();
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
