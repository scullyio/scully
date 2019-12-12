import {httpGetJson} from './httpGetJson';
/**
 * Wait until our server is up, and accepting requests
 */
export const waitForServerToBeAvailable = () =>
  new Promise((resolve, reject) => {
    let tries = 0;
    const tryServer = () => {
      ++tries;
      if (tries > 150) {
        reject(`server didn't respond`);
      }
      httpGetJson('http://localhost:1864/_pong', {suppressErrors: true})
        .then((res: any) => {
          if (res.res) {
            resolve(true);
            return;
          }
          setTimeout(tryServer, 100);
        })
        .catch(e => {
          // console.log(e)
          setTimeout(tryServer, 100);
        });
    };
    tryServer();
  });
