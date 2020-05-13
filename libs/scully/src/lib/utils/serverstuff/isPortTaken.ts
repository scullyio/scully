import { createServer } from 'net';

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
