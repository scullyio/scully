import { plugins } from '../pluginManagement/pluginRepository';
import { scullyConfig } from '../utils/config';
import { RoutesTypes, RouteTypes } from '../utils/interfacesandenums';
import { logError, logWarn, yellow } from '../utils/log';
import { HandledRoute } from './handledRoute.interface';

export const addOptionalRoutes = async (routeList = [] as string[]): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(async (result: Promise<HandledRoute[]>, cur: string) => {
    const x = await result;
    const config = scullyConfig.routes[cur];
    if (config) {
      const postRenderers: string[] = Array.isArray(config.postRenderers) ? config.postRenderers : undefined;
      /** adding in the postrenderes. Note that the plugin might choose to overwrite the ones that come from the config */
      const r = (await routePluginHandler(cur)).map((row) =>
        postRenderers ? { postRenderers, ...row, config } : { ...row, config }
      );
      x.push(...r);
    } else if (cur.includes('/:')) {
      logWarn(`No configuration for route "${yellow(cur)}" found. Skipping`);
    } else {
      x.push({ route: cur, type: RouteTypes.default });
    }
    return x;
  }, Promise.resolve([] as HandledRoute[]));

  return routesToGenerate;
};

async function routePluginHandler(route: string): Promise<HandledRoute[]> {
  const config = scullyConfig.routes;
  const conf = config[route] as RoutesTypes;
  if (!conf) {
    logError(`No configuration for route "${yellow(route)}" found. Skipping`);
    return [{ route, type: RouteTypes.default }];
  }
  if (plugins.router[conf.type]) {
    const generatedRoutes = (await (plugins.router[conf.type](route, conf) as unknown)) as HandledRoute[];
    generatedRoutes.forEach((handledRoute) => {
      if (!handledRoute.route.startsWith('/')) {
        logWarn(
          `The plugin '${conf.type}' needs to return handledRoutes with a route that starts with '/'. The route ${JSON.stringify(
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
