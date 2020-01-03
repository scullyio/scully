import {plugins} from '../pluginManagement/pluginRepository';
import {scullyConfig} from '../utils/config';
import {RoutesTypes, RouteTypes} from '../utils/interfacesandenums';
import {logError, yellow, logWarn} from '../utils/log';

export const addOptionalRoutes = async (routeList = [] as string[]): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(
    async (result: Promise<HandledRoute[]>, cur: string) => {
      const x = await result;
      if (scullyConfig.routes[cur]) {
        const r = await routePluginHandler(cur);
        x.push(...r);
      } else if (cur.includes('/:')) {
        logWarn(`No configuration for route "${yellow(cur)}" found. Skipping`);
      } else {
        x.push({route: cur, type: RouteTypes.default});
      }
      return x;
    },
    Promise.resolve([] as HandledRoute[])
  );

  return routesToGenerate;
};

export interface HandledRoute {
  route: string;
  type: RouteTypes;
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
    const generatedRoutes = await (plugins.router[conf.type](route, conf) as unknown) as HandledRoute[];
    generatedRoutes.forEach( handledRoute => {
      if (!handledRoute.route.startsWith('/')) {
        // tslint:disable-next-line:max-line-length
        logWarn(`The plugin '${conf.type}' needs to return handledRoutes with a route that starts with '/'. The route ${JSON.stringify(handledRoute)} is invalid.`);
      }
    });
    return generatedRoutes;
  }
  return [{route, type: RouteTypes.default}];
}
