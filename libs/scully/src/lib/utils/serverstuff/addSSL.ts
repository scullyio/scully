import { readFileSync } from 'fs';
import https from 'https';
import selfsigned from 'selfsigned';
import { ssl, sslCert, sslKey } from '../cli-options.js';
import { logWarnOnce } from '../httpGetJson.js';
import { log, logError, yellow } from '../log.js';

export function addSSL(server, host, port) {
  if (!ssl) {
    return server;
  } else {
    logWarnOnce(`

****************************************************************************************
This is a development server for Scully applications.

It hasn't been reviewed for security issues.
DON'T USE IT FOR SERVING IN PRODUCTION!
****************************************************************************************

`);
    let pems = {
      private: '',
      cert: ''
    };
    if (sslCert && sslKey) {
      try {
        pems.private = readFileSync(sslKey).toString();
        pems.cert = readFileSync(sslCert).toString();
      } catch (e) {
        logError(`Could not read the file: ${e.path}`);
        log(`${yellow(`Please check the path for the certificate.`)}`);
        process.exit(0);
      }
    } else {
      const attrs = [
        {
          name: 'scully',
          value: `${host}:${port}`,
          type: 'RSAPublicKey'
        }
      ];
      pems = selfsigned.generate(attrs, { days: 365 });
    }
    // serve the API with signed certificate on 443 (SSL/HTTPS) port
    return https.createServer(
      {
        key: pems.private,
        cert: pems.cert
      },
      server
    );
  }
}
