/* eslint-disable @typescript-eslint/no-var-requires */
import { existsSync } from 'fs';
import createProxyMiddleware from 'http-proxy-middleware';
import { join } from 'path';
import { proxyConfigFile } from '../cli-options';
import { scullyConfig } from '../config';
import { logError, yellow } from '../log';

export const proxyAdd = (server) => {
  const proxyConfig = loadProxyConfig();
  if (proxyConfig) {
    setupProxy(proxyConfig, server);
  }
};

function loadProxyConfig():
  | {
      [context: string]: any;
    }
  | undefined {
  if (
    typeof scullyConfig.proxyConfig !== 'string' &&
    proxyConfigFile === undefined
  ) {
    return undefined;
  }
  /** cmdLine has priority */
  const configFile = proxyConfigFile || scullyConfig.proxyConfig;
  const proxyPath = join(scullyConfig.homeFolder, configFile);
  if (existsSync(proxyPath)) {
    try {
      return setupProxyFeature(require(proxyPath));
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

function setupProxyFeature(rawOptions) {
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
  if (!Array.isArray(rawOptions)) {
    if (Object.prototype.hasOwnProperty.call(rawOptions, 'target')) {
      return [rawOptions];
    } else {
      return Object.keys(rawOptions).map((context) => {
        let proxyOptions;
        // For backwards compatibility reasons.
        const correctedContext = context
          .replace(/^\*$/, '**')
          .replace(/\/\*$/, '');
        if (typeof rawOptions[context] === 'string') {
          proxyOptions = {
            context: correctedContext,
            target: rawOptions[context],
          };
        } else {
          proxyOptions = Object.assign({}, rawOptions[context]);
          proxyOptions.context = correctedContext;
        }
        proxyOptions.logLevel = proxyOptions.logLevel || 'warn';
        return proxyOptions;
      });
    }
  }
}
const getProxyMiddleware = (proxyConfig) => {
  const context = proxyConfig.context || proxyConfig.path;
  // It is possible to use the `bypass` method without a `target`.
  // However, the proxy middleware has no use in this case, and will fail to instantiate.
  if (proxyConfig.target) {
    return createProxyMiddleware(context, proxyConfig);
  }
};
function setupProxy(configArray, server) {
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
  configArray.forEach((proxyConfigOrCallback) => {
    let proxyMiddleware;
    let proxyConfig =
      typeof proxyConfigOrCallback === 'function'
        ? proxyConfigOrCallback()
        : proxyConfigOrCallback;
    proxyMiddleware = getProxyMiddleware(proxyConfig);
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
      const bypassUrl = isByPassFuncDefined
        ? proxyConfig.bypass(req, res, proxyConfig)
        : null;
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
    server.use(handle);
    // Also forward error requests to the proxy so it can handle them.
    server.use((error, req, res, next) => handle(req, res, next));
  });
}
