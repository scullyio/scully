import {ssl} from './cli-options';
import {scullyConfig} from './config';
import {httpGetJson} from './httpGetJson';
import {logWarn} from './log';
/**
 * Wait until our server is up, and accepting requests
 */
export const waitForServerToBeAvailable = () =>
  new Promise((resolve, reject) => {
    let tries = 0;
    const tryServer = () => {
      ++tries;
      if (tries > 500) {
        reject(`server didn't respond`);
      }
      httpGetJson(`http${ssl ? 's' : ''}://${scullyConfig.hostName}:${scullyConfig.appPort}/_pong`, {
        suppressErrors: true,
      })
        .then((res: any) => {
          if (res && res.res) {
            if (res.homeFolder !== scullyConfig.homeFolder) {
              logWarn(
                '`scully serve` is running in a different project. you can kill it by running `npx scully killServer`'
              );
              process.exit(15);
            }
            resolve(true);
            return;
          }
          setTimeout(tryServer, 125);
        })
        .catch(e => {
          console.log(e);
          setTimeout(tryServer, 125);
        });
    };
    tryServer();
  });
