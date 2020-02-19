import express from 'express';
import {join} from 'path';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {ssl, tds} from '../utils/cli-options';
import {addSSL} from './addSSL';
import {scullyConfig} from './config';
import {startDataServer} from './dataServer';
import {log, logError, yellow, logWarn} from './log';
import {proxyAdd} from './proxyAdd';

let angularServerInstance: {close: () => void};
let scullyServerInstance: {close: () => void};
let dataServerInstance: {close: () => void};

export async function staticServer(port?: number) {
  try {
    port = port || scullyConfig.staticport;
    const hostName = scullyConfig.hostName;
    const routes = await traverseAppRoutes();
    const scullyServer = express();
    const distFolder = join(scullyConfig.homeFolder, scullyConfig.distFolder);

    if (tds) {
      dataServerInstance = await startDataServer(ssl);
    }
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

    proxyAdd(scullyServer);

    scullyServer.use(express.static(scullyConfig.outDir, options));
    scullyServer.use((req, res, next) => {
      console.log('Time: %d', Date.now());
      next();
    });
    scullyServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html')));

    scullyServerInstance = addSSL(scullyServer, hostName, port).listen(port, hostName, x => {
      log(`Scully static server started on "${yellow(`http${ssl ? 's' : ''}://${hostName}:${port}/`)}"`);
    });

    const angularDistServer = express();
    proxyAdd(angularDistServer);
    angularDistServer.get('/_pong', (req, res) => {
      res.json({res: true, homeFolder: scullyConfig.homeFolder});
    });
    angularDistServer.get('/killMe', async (req, res) => {
      logWarn('Received Kill command');
      await res.json({ok: true});
      await closeExpress();
      logWarn('Closed servers');
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
    angularServerInstance = addSSL(angularDistServer, hostName, scullyConfig.appPort).listen(
      scullyConfig.appPort,
      hostName,
      x => {
        log(
          `Angular distribution server started on "${yellow(
            `http${ssl ? 's' : ''}://${hostName}:${scullyConfig.appPort}/`
          )}" `
        );
      }
    );
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
  if (dataServerInstance && dataServerInstance.close) {
    dataServerInstance.close();
  }
}
