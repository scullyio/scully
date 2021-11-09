import { askUser, bootServe, readDotProperty } from '..';
import { captureException } from '../captureMessage';
import { serverTimeout, ssl, killServer } from '../cli-options';
import { scullyConfig } from '../config';
import { httpGetJson } from '../httpGetJson';
import { logWarn, logOk } from '../log';
import { killScullyServer } from "../startup/scullyInit";

const retryIn = 125
const maxTries = serverTimeout !== 0 ? Math.ceil(serverTimeout / retryIn) : 80;
/**
 * Wait until our server is up, and accepting requests
 */
export const waitForServerToBeAvailable = async () => {
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
    const r = killServer ? 'y' : await askUser('Do you want to kill the other server and try again (Y/N)')
    if (r.toLowerCase() === 'y') {
      await killScullyServer(false);
      await bootServe()
      return await waitForServerToBeAvailable();
      // restartProcess();
    }
    process.exit(15);
  }
  logOk('Scully Development Server is up and running');
  return true
}
