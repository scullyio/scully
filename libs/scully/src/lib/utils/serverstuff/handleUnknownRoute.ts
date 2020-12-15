/* eslint-disable no-case-declarations */
import { RequestHandler } from 'express';
import { readFileSync, statSync } from 'fs-extra';
import { join } from 'path';
import { handleTravesal, scullyConfig } from '..';
import { findPlugin } from '../../pluginManagement';
import { routesFileName } from '../../systemPlugins/storeRoutes';
import { handle404 } from '../cli-options';
import { logError, logWarn, yellow } from '../log';
import { pathToRegexp } from 'path-to-regexp';
import { title404 } from './title404';
import { loadConfig } from '../config';
import { HandledRoute } from '../../routerPlugins/';

export const handleUnknownRoute: RequestHandler = async (req, res, next) => {
  if (req.accepts('html')) {
    /** only handle 404 on html requests specially  */
    await loadConfig();
    const distFolder = scullyConfig.outDir;
    const distIndex = join(distFolder, '/index.html');
    const dist404 = join(distFolder, '/404.html');
    // cmd-line takes precedence over config
    const h404 = (handle404.trim() === '' ? scullyConfig.handle404 : handle404).trim().toLowerCase();

    switch (h404) {
      case '':
        /** checks if the path is in the scully.routes */
        const myHandledRoutes = loadHandledRoutes();
        if (myHandledRoutes.includes(req.url)) {
          return res.sendFile(distIndex);
        }
        break;
      case 'onlybase':
      case 'baseonly':
        /** checks if the path has a unhandled route that fits */
        const unhandledRoutes = await findPlugin(handleTravesal)();
        if (unhandledRoutes.find(matchRoute(req))) {
          /** this is a base route known by Scully, just return the index */
          return res.sendFile(distIndex);
        }
        /** use fallthrough as all of those are served by the above route-machers, and only here if the route is 404 */
        break;
      case 'index':
        /** don't care, always send the index.html */
        return res.sendFile(distIndex);
      case '404':
        /** don't care, always send the 404.html */
        return res.sendFile(dist404);
      case 'none':
        /** let express do its default thing, don't alter behavior */
        return next();
      default:
        logError(`the option "${yellow(h404)}" is not a valid 404 option`);
        process.exit(15);
    }
    res.status(404);
    return res.send(`
        <h1>${title404}</h1>
        <p>The url "${req.url}" is not provided in the scully.routes.json, so it can't be generated</p>
        <p>If you have routes that are not known before  you might want to serve index.html instead of this response. <br> That can be done by adding the '--404=index' option to the Scully command
        <script>
          /** triggering page ready, as there is no need to wait for a timeout */
          setTimeout(() => window.dispatchEvent(new Event('AngularReady', {
            bubbles: true,
            cancelable: false
          })),10)
        </script>
    `);
  } else {
    logWarn(`Resource not found:"${yellow(req.url)}"`);
  }
  next();
};
/** helper function to match paths to their unhandled that might include vars and stars */
function matchRoute(req): (value: string, index: number, obj: string[]) => boolean {
  return (route) => {
    try {
      const path = req.url;
      if (route.endsWith('**') && route.length > 3) {
        /** handle angular wildcard route but exclude the `/**`  */
        const base = route.slice(0, route.length - 3);
        return path.startsWith(base);
      } else {
        /** use the routematcher express is using */
        const regex = pathToRegexp(route);
        const match = regex.test(path);
        return match;
      }
    } catch (e) {
      /** something blew up with unexpected paths/routes means -no match anyway */
      // console.log(req.url, r);
    }
    return false;
  };
}

let lastTime = 0;
const handledRoutes = new Set<string>();
function loadHandledRoutes(): string[] {
  const path = join(scullyConfig.outDir, routesFileName);
  const tdLastModified = statSync(path).mtimeMs;
  if (lastTime < tdLastModified) {
    try {
      const routes = JSON.parse(readFileSync(path, 'utf-8').toString()) as HandledRoute[];
      handledRoutes.clear();
      routes.forEach((r) => handledRoutes.add(r.route));
      lastTime = tdLastModified;
    } catch (e) {
      logWarn('Error parsing route file', e);
    }
  }

  return Array.from(handledRoutes.values());
}
