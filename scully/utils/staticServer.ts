import express from 'express';
import {readFileSync} from 'fs-extra';
import {join} from 'path';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {proxyConfigFile, ssl, tds, noWatch} from '../utils/cli-options';
import {createScript} from '../watchMode';
import {addSSL} from './addSSL';
import {scullyConfig} from './config';
import {startDataServer} from './dataServer';
import {existFolder} from './fsFolder';
import {log, logError, logWarn, yellow} from './log';
import {proxyAdd} from './proxyAdd';
import compression from 'compression';

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

    scullyServer.use(compression());

    proxyAdd(scullyServer);

    scullyServer.use(injectReloadMiddleware);
    scullyServer.use(express.static(scullyConfig.outDir, options));
    scullyServer.get('/scullySettings', (req, res) => {
      res.set('Content-Type', 'text/html');
      return res.send(`
      <h1> Scully settings</h1>
      ssl: ${ssl},<br>
      tds: ${tds},<br>
      no-watch: ${noWatch},<br>
      proxy: ${proxyConfigFile}
      `);
    });
    // scullyServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html'))); // marked out, as there will now always be an index.html in outfolder.

    scullyServerInstance = addSSL(scullyServer, hostName, port).listen(port, hostName, x => {
      log(`Scully static server started on "${yellow(`http${ssl ? 's' : ''}://${hostName}:${port}/`)}"`);
    });

    const angularDistServer = express();
    angularDistServer.use(compression());
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

function injectReloadMiddleware(req, res, next) {
  const url = req.url;
  let path: string;
  if (noWatch) {
    return next();
  }
  if (url.endsWith('/') || url.endsWith('index.html')) {
    if (url.endsWith('/')) {
      path = join(scullyConfig.outDir, url, 'index.html');
    } else {
      path = join(scullyConfig.outDir, url);
    }
    // console.log(path);
    if (existFolder(path)) {
      const content = readFileSync(path, 'utf8').toString();
      try {
        const [start, endPart] = content.split('</body>');
        const injected = start + createScript() + '</body>' + endPart;
        res.set('Content-Type', 'text/html');
        // console.log('injected', req.url);
        return res.send(injected);
      } catch (e) {
        console.error(e);
      }
      //       console.log(`
      // --------------------------------------------
      // Time:, ${new Date().toISOString().split('T')[1]};
      // url: ${req.url}
      // --------------------------------------------`);
    }
  }
  next();
}
