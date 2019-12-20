import {join} from 'path';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {scullyConfig} from './config';
import {log, logError, yellow} from './log';
const express = require('express');

let angularServerInstance: {close: () => void};
let scullyServerInstance: {close: () => void};

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
      maxAge: '30s',
      redirect: true,
      setHeaders(res, path, stat) {
        res.set('x-timestamp', Date.now());
      },
    };
    // log(scullyConfig.outFolder);
    // log(distFolder)
    scullyServer.use(express.static(scullyConfig.outFolder, options));
    scullyServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html')));

    scullyServerInstance = scullyServer.listen(port, x => {
      log(`Scully static server started on "${yellow(`http://localhost:${port}/`)}" `);
    });

    const angularDistServer = express();
    angularDistServer.get('/_pong', (req, res) => {
      res.json({res: true});
    });
    angularDistServer.get('/killMe', (req, res) => {
      closeExpress();
      process.exit(0);
    });
    angularDistServer.use(express.static(distFolder, options));
    routes.forEach(route => {
      angularDistServer.get(route, (req, res) => res.sendFile(join(distFolder, '/index.html')));
    });
    angularDistServer.get('/', (req, res) => res.sendFile(join(distFolder, '/index.html')));

    // send the indexHTML on 404
    // angularDistServer.get('/*', (req, res) => res.sendFile(join(scullyConfig.outFolder, '/index.html')));
    angularServerInstance = angularDistServer.listen(scullyConfig.appPort, x => {
      log(`Angular distribution server started on "${yellow(`http://localhost:${scullyConfig.appPort}/`)}" `);
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
}
