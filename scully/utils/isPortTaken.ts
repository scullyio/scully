import {createServer} from 'net';
import {logWarn} from './log';
// const net = require('net');

export const isPortTaken = (usedPort: number): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const tester = createServer()
      .once('error', err => {
        // tslint:disable-next-line: no-string-literal
        if (err['code'] !== 'EADDRINUSE') {
          reject(err);
          return;
        }
        resolve(true);
        return;
      })
      .once('listening', () => {
        tester
          .once('close', () => {
            resolve(false);
          })
          .close();
      })
      .listen(usedPort);
  });
// .then((r: boolean) => {
//   logWarn(`port ${usedPort} is ${r ? 'taken' : 'free'}`);
//   return r;
// });
