import {existsSync, readFileSync} from 'fs';
import httpProxyMiddleware from 'http-proxy-middleware';
import {join} from 'path';
import {traverseAppRoutes} from '../routerPlugins/traverseAppRoutesPlugin';
import {ssl, sslCert, sslKey, tds} from '../utils/cli-options';
import {scullyConfig} from './config';
import {log, logError, yellow} from './log';
import {startDataServer} from './dataServer';

const express = require('express');
const https = require('https');
const selfsigned = require('selfsigned');

let angularServerInstance: {close: () => void};
let scullyServerInstance: {close: () => void};
let dataServerInstance: {close: () => void};
let httpsServer;

export async function staticServer(port?: number) {
  try {
    port = port || scullyConfig.staticport;
    const routes = await traverseAppRoutes();
    const scullyServer = express();
    const distFolder = join(scullyConfig.homeFolder, scullyConfig.distFolder);
    const proxyConfig = loadProxyConfig();
    const proxyAdd = () => {
      if (proxyConfig) {
      }
    };
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
      let pems = {
        private: '',
        cert: '',
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
            value: `${scullyConfig.hostName}:${scullyConfig.staticport}`,
            type: 'RSAPublicKey',
          },
        ];
        pems = selfsigned.generate(attrs, {days: 365});
        console.log(pems);
      }
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
  if (dataServerInstance && dataServerInstance.close) {
    dataServerInstance.close();
  }
}

function loadProxyConfig(): {[context: string]: any} | undefined {
  if (typeof scullyConfig.proxyConfig !== 'string') {
    return undefined;
  }
  const proxyPath = join(scullyConfig.homeFolder, scullyConfig.proxyConfig);
  if (existsSync(proxyPath)) {
    try {
      return JSON.parse(readFileSync(proxyPath, 'utf-8'));
    } catch {
      logError(`
Error while reading proxy config file "${yellow(proxyPath)}"
      `);
    }
  } else {
    logError(`
Proxy config file "${yellow(proxyPath)}" is not found
          `);
  }
  process.exit(15);
}

function setupProxyFeature() {
  /**
   * Assume a proxy configuration specified as:
   * proxy: {
   *   'context': { options }
   * }
   * OR
   * proxy: {
   *   'context': 'target'
   * }
   */
  if (!Array.isArray(this.options.proxy)) {
    if (Object.prototype.hasOwnProperty.call(this.options.proxy, 'target')) {
      this.options.proxy = [this.options.proxy];
    } else {
      this.options.proxy = Object.keys(this.options.proxy).map(context => {
        let proxyOptions;
        // For backwards compatibility reasons.
        const correctedContext = context.replace(/^\*$/, '**').replace(/\/\*$/, '');

        if (typeof this.options.proxy[context] === 'string') {
          proxyOptions = {
            context: correctedContext,
            target: this.options.proxy[context],
          };
        } else {
          proxyOptions = Object.assign({}, this.options.proxy[context]);
          proxyOptions.context = correctedContext;
        }

        proxyOptions.logLevel = proxyOptions.logLevel || 'warn';

        return proxyOptions;
      });
    }
  }

  const getProxyMiddleware = proxyConfig => {
    const context = proxyConfig.context || proxyConfig.path;

    // It is possible to use the `bypass` method without a `target`.
    // However, the proxy middleware has no use in this case, and will fail to instantiate.
    if (proxyConfig.target) {
      return httpProxyMiddleware(context, proxyConfig);
    }
  };

  function setUpProxy(configFileContents) {
    /**
     * Assume a proxy configuration specified as:
     * proxy: [
     *   {
     *     context: ...,
     *     ...options...
     *   },
     *   // or:
     *   function() {
     *     return {
     *       context: ...,
     *       ...options...
     *     };
     *   }
     * ]
     */
    configFileContents.forEach(proxyConfigOrCallback => {
      let proxyMiddleware;

      let proxyConfig =
        typeof proxyConfigOrCallback === 'function' ? proxyConfigOrCallback() : proxyConfigOrCallback;

      proxyMiddleware = getProxyMiddleware(proxyConfig);

      if (proxyConfig.ws) {
        this.websocketProxies.push(proxyMiddleware);
      }

      const handle = (req, res, next) => {
        if (typeof proxyConfigOrCallback === 'function') {
          const newProxyConfig = proxyConfigOrCallback();

          if (newProxyConfig !== proxyConfig) {
            proxyConfig = newProxyConfig;
            proxyMiddleware = getProxyMiddleware(proxyConfig);
          }
        }

        // - Check if we have a bypass function defined
        // - In case the bypass function is defined we'll retrieve the
        // bypassUrl from it otherwise bypassUrl would be null
        const isByPassFuncDefined = typeof proxyConfig.bypass === 'function';
        const bypassUrl = isByPassFuncDefined ? proxyConfig.bypass(req, res, proxyConfig) : null;

        if (typeof bypassUrl === 'boolean') {
          // skip the proxy
          req.url = null;
          next();
        } else if (typeof bypassUrl === 'string') {
          // byPass to that url
          req.url = bypassUrl;
          next();
        } else if (proxyMiddleware) {
          return proxyMiddleware(req, res, next);
        } else {
          next();
        }
      };

      this.app.use(handle);
      // Also forward error requests to the proxy so it can handle them.
      this.app.use((error, req, res, next) => handle(req, res, next));
    });
  }
}
