import { Serializable } from 'puppeteer';
import { plugins } from '../pluginManagement/pluginRepository';
import { scullyConfig } from '../utils/config';
import { RoutesTypes, RouteTypes } from '../utils/interfacesandenums';
import { logError, logWarn, yellow } from '../utils/log';

export const addOptionalRoutes = async (
  routeList = [] as string[]
): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(
    async (result: Promise<HandledRoute[]>, cur: string) => {
      const x = await result;
      const config = scullyConfig.routes[cur];
      if (config) {
        const postRenderers: string[] = Array.isArray(config.postRenderers)
          ? config.postRenderers
          : undefined;
        /** adding in the postrenderes. Note that the plugin might choose to overwrite the ones that come from the config */
        const r = (await routePluginHandler(cur)).map(row =>
          postRenderers ? { postRenderers, ...row, config } : { ...row, config }
        );
        x.push(...r);
      } else if (cur.includes('/:')) {
        logWarn(`No configuration for route "${yellow(cur)}" found. Skipping`);
      } else {
        x.push({ route: cur, type: RouteTypes.default });
      }
      return x;
    },
    Promise.resolve([] as HandledRoute[])
  );

  return routesToGenerate;
};

interface RouteConfig {
  /** this route does a manual Idle check */
  manualIdleCheck?: boolean;
  /** type of the route  */
  type?: string;
  /**
   * an optional function that will be executed on render.
   * Receives the route string, and the config of this route.
   */
  preRenderer?: (route: HandledRoute) => Promise<void | false>;
  /** Allow in every other setting possible, depends on plugins */
  [key: string]: any;
}

export interface HandledRoute {
  /** the _complete_ route */
  route: string;
  /** String, must be an existing plugin name. mandatory */
  type: string;
  /** the relevant part of the scully-config  */
  config?: RouteConfig;
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
  /** optional title, if data holds a title, that will be used instead */
  title?: string;
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
    return [{ route, type: RouteTypes.default }];
  }
  if (plugins.router[conf.type]) {
    const generatedRoutes = (await (plugins.router[conf.type](
      route,
      conf
    ) as unknown)) as HandledRoute[];
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
      if (handledRoute.route.includes('?')) {
        const updatedRoute = handledRoute.route.split('?')[0];
        logWarn(
          `The route "${yellow(
            handledRoute.route
          )}" contains a search param, this will be ignored during rendering. it will be truncated to:
  "${yellow(updatedRoute)}"`
        );
        handledRoute.route = updatedRoute;
      }
      if (handledRoute.route.includes('#')) {
        const updatedRoute = handledRoute.route.split('#')[0];
        logWarn(
          `The route "${yellow(
            handledRoute.route
          )}" contains a hash(#), this will be ignored during rendering. it will be truncated to:
            "${yellow(updatedRoute)}"`
        );
        handledRoute.route = updatedRoute;
      }
    });
    return generatedRoutes;
  }
  return [{ route, type: RouteTypes.default }];
}
