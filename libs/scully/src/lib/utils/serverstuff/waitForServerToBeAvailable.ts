import { captureException } from '../captureMessage.js';
import { killServer, serverTimeout, ssl } from '../cli-options.js';
import { scullyConfig } from '../config.js';
import { httpGetJson } from '../httpGetJson.js';
import { logOk, logWarn, printProgress } from '../log.js';
import { askUser, readDotProperty } from '../scullydot.js';
import { killScullyServer } from '../startup/scullyInit.js';
import { bootServe } from '../startup/watchMode.js';

const retryIn = 125;
const maxTries = serverTimeout !== 0 ? Math.ceil(serverTimeout / retryIn) : 80;
/**
 * Wait until our server is up, and accepting requests
 */
export const waitForServerToBeAvailable = async () => {
  printProgress(undefined, 'Waiting for server to be available');
  const result = await new Promise((resolve, reject) => {
    let tries = 0;
    const tryServer = () => {
      ++tries;
      /** 80 tries should be ~10 seconds, that should be more as enough to start the server (mostly for GA) */
      if (tries > maxTries) {
        reject(`server didn't respond`);
      }
      httpGetJson(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}/_pong`, {
        suppressErrors: true,
      })
        .then((res: any) => {
          if (res && res.res) {
            if (res.identifier !== readDotProperty('identifier')) {
              return resolve(`Scully development Server is already started running in a different folder`);
            }
            if (res.projectName !== scullyConfig.projectName) {
              return resolve(`Scully development Server is already started for project "${res.projectName}"`);
            }
            return resolve('');
          }
          setTimeout(tryServer, retryIn);
        })
        .catch((e) => {
          // console.log(e);
          captureException(e);
          setTimeout(tryServer, retryIn);
        });
    };
    tryServer();
  });
  // logError('result', result)
  if (result) {
    logWarn(result);
    const r = killServer ? 'y' : await askUser('Do you want to kill the other server and try again (Y/N)');
    if (r.toLowerCase() === 'y') {
      await killScullyServer(false);
      /** wait a seconds for the ports to become free */
      await new Promise<void>((res) => setTimeout(() => res(), 1000));
      await bootServe();
      /** wait 2 seconds so the ports are up for business */
      await new Promise<void>((res) => setTimeout(() => res(), 5000));
      return await waitForServerToBeAvailable();
      // restartProcess();
    }
    process.exit(15);
  }
  logOk('Scully Development Server is up and running');
  return true;
};
