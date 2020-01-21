import {plugins} from '../pluginManagement/pluginRepository';
import {scullyConfig} from '../utils/config';
import {RoutesTypes, RouteTypes} from '../utils/interfacesandenums';
import {logError, yellow, logWarn} from '../utils/log';

export const addOptionalRoutes = async (routeList = [] as string[]): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(async (result: Promise<HandledRoute[]>, cur: string) => {
    const x = await result;
    if (scullyConfig.routes[cur]) {
      const postRenderers: string[] = Array.isArray(scullyConfig.routes[cur].postRenderers)
        ? scullyConfig.routes[cur].postRenderers
        : [];
      /** adding in the postrenderes. Note that the plugin might choose to overwrite the ones that come from the config */
      const r = (await routePluginHandler(cur)).map(r => ({postRenderers, ...r}));
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
  route: string;
  type: RouteTypes;
  postRenderers?: string[];
  templateFile?: string;
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
