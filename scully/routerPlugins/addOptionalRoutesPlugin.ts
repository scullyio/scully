import {Serializable} from 'puppeteer';
import {plugins} from '../pluginManagement/pluginRepository';
import {scullyConfig} from '../utils/config';
import {RoutesTypes, RouteTypes} from '../utils/interfacesandenums';
import {logError, logWarn, yellow} from '../utils/log';

export const addOptionalRoutes = async (routeList = [] as string[]): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(async (result: Promise<HandledRoute[]>, cur: string) => {
    const x = await result;
    const config = scullyConfig.routes[cur];
    if (config) {
      const postRenderers: string[] = Array.isArray(config.postRenderers) ? config.postRenderers : undefined;
      /** adding in the postrenderes. Note that the plugin might choose to overwrite the ones that come from the config */
      const r = (await routePluginHandler(cur)).map(row =>
        postRenderers ? {postRenderers, ...row, config} : {...row, config}
      );
      x.push(...r);
    } else if (cur.includes('/:')) {
      logWarn(`No configuration for route "${yellow(cur)}" found. Skipping`);
    } else {
      x.push({route: cur, type: RouteTypes.default});
    }
    return x;
  }, Promise.resolve([] as HandledRoute[]));

  return routesToGenerate;
};

export interface HandledRoute {
  /** the _complete_ route */
  route: string;
  /** String, must be an existing plugin name */
  type: string;
  /** the relevant part of the scully-config  */
  config?: {
    manualIdleCheck?: boolean;
    type?: string;
    [key: string]: any;
  };
  /** variables exposed to angular _while rendering only!_ */
  exposeToPage?: {
    manualIdle?: boolean;
    transferState?: Serializable;
    [key: string]: Serializable;
  };
  /** data will be injected into the static page */
  injectToPage?: {
    [key: string]: Serializable;
  };
  /** an array with render plugin names that will be executed */
  postRenderers?: string[];
  /** the path to the file for a content file */
  templateFile?: string;
  /**
   * additional data that will end up in scully.routes.json
   * the frontMatter data will be added here too.
   */
  data?: RouteData;
}

export interface RouteData {
  title?: string;
  author?: string;
  [prop: string]: any;
}

async function routePluginHandler(route: string): Promise<HandledRoute[]> {
  const config = scullyConfig.routes;
  const conf = config[route] as RoutesTypes;
  if (!conf) {
    logError(`No configuration for route "${yellow(route)}" found. Skipping`);
    return [{route, type: RouteTypes.default}];
  }
  if (plugins.router[conf.type]) {
    const generatedRoutes = (await (plugins.router[conf.type](route, conf) as unknown)) as HandledRoute[];
    generatedRoutes.forEach(handledRoute => {
      if (!handledRoute.route.startsWith('/')) {
        logWarn(
          `The plugin '${
            conf.type
          }' needs to return handledRoutes with a route that starts with '/'. The route ${JSON.stringify(
            handledRoute
          )} is invalid.`
        );
      }
    });
    return generatedRoutes;
  }
  return [{route, type: RouteTypes.default}];
}
