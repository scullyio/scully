import { ssl, serverTimeout } from '../cli-options';
import { scullyConfig } from '../config';
import { httpGetJson } from '../httpGetJson';
import { logWarn } from '../log';
import { captureException } from '../captureMessage';

const maxTries = serverTimeout !== 0 ? Math.ceil(serverTimeout / 125) : 80;
/**
 * Wait until our server is up, and accepting requests
 */
export const waitForServerToBeAvailable = () =>
  new Promise((resolve, reject) => {
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
            if (res.homeFolder !== scullyConfig.homeFolder || res.projectName !== scullyConfig.projectName) {
              logWarn('`scully serve` is running in a different project. you can kill it by running `npx scully killServer`');
              process.exit(15);
            }
            resolve(true);
            return;
          }
          setTimeout(tryServer, 125);
        })
        .catch((e) => {
          // console.log(e);
          captureException(e);
          setTimeout(tryServer, 125);
        });
    };
    tryServer();
  });
