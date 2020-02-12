import {join} from 'path';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {scullyConfig} from './config';
import {log, logError, yellow} from './log';
import {ssl} from '../utils/cli-options';

const express = require('express');
const https = require('https');
const selfsigned = require('selfsigned');

let angularServerInstance: {close: () => void};
let scullyServerInstance: {close: () => void};
let httpsServer;

export async function staticServer(port?: number) {
  try {
    port = port || scullyConfig.staticport;
    const routes = await traverseAppRoutes();
    const scullyServer = express();
    const distFolder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
    const options = {
      dotfiles: 'ignore',
      etag: false,
      extensions: ['htm', 'html'],
      index: ['index.html'],
      /** use a sensible setting for dev time. */
      maxAge: '30s',
      redirect: true,
      setHeaders(res, path, stat) {
        res.set('x-timestamp', Date.now());
      },
    };

    scullyServer.use(express.static(scullyConfig.outDir, options));
    scullyServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html')));

    if (!ssl) {
      scullyServerInstance = scullyServer.listen(port, scullyConfig.hostName, x => {
        log(
          `Scully static server started on "${yellow(
            `http://${scullyConfig.hostName}:${scullyConfig.staticport}/`
          )}"`
        );
      });
    } else {
      const attrs = [
        {name: 'scully', value: `${scullyConfig.hostName}:${scullyConfig.staticport}`, type: 'RSAPublicKey'},
      ];
      const pems = selfsigned.generate(attrs, {days: 365});
      // serve the API with signed certificate on 443 (SSL/HTTPS) port
      httpsServer = https.createServer(
        {
          key: pems.private,
          cert: pems.cert,
        },
        scullyServer
      );

      httpsServer.listen(port, () => {
        log(
          `Scully static server started on "${yellow(
            `https://${scullyConfig.hostName}:${scullyConfig.staticport}/`
          )}"`
        );
      });
    }

    const angularDistServer = express();
    angularDistServer.get('/_pong', (req, res) => {
      res.json({res: true, homeFolder: scullyConfig.homeFolder});
    });
    angularDistServer.get('/killMe', async (req, res) => {
      await res.json({ok: true});
      await closeExpress();
      process.exit(0);
    });
    /** use express to serve all static assets in dist folder. */
    angularDistServer.use(express.static(distFolder, options));
    /** provide for every route */
    routes.forEach(route => {
      angularDistServer.get(route, (req, res) => res.sendFile(join(distFolder, '/index.html')));
    });
    /** don't forget te top route. */
    angularDistServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html')));

    /**
     * DO NOT ADD THIS:
     * // angularDistServer.get('/*', (req, res) => res.sendFile(join(scullyConfig.outDir, '/index.html')));
     * we are already serving all known routes an index.html. at this point a 404 is indeed just a 404, don't substitute.
     */
    angularServerInstance = angularDistServer.listen(scullyConfig.appPort, scullyConfig.hostName, x => {
      log(
        `Angular distribution server started on "${yellow(
          `http://${scullyConfig.hostName}:${scullyConfig.appPort}/`
        )}" `
      );
    });
  } catch (e) {
    logError(`Could not start Scully serve`, e);
  }
}

export function closeExpress() {
  if (scullyServerInstance && scullyServerInstance.close) {
    scullyServerInstance.close();
  }
  if (angularServerInstance && angularServerInstance.close) {
    angularServerInstance.close();
  }
  if (httpsServer) {
    httpsServer.close();
  }
}
