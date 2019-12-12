import {plugins} from '../pluginManagement/pluginRepository';
import {scullyConfig} from '../utils/config';
import {RoutesTypes, RouteTypes} from '../utils/interfacesandenums';
import {logError, yellow} from '../utils/log';

export const addOptionalRoutes = async (routeList = [] as string[]): Promise<HandledRoute[]> => {
  const routesToGenerate = await routeList.reduce(
    async (result: Promise<HandledRoute[]>, cur: string) => {
      const x = await result;
      if (scullyConfig.routes[cur]) {
        const r = await routePluginHandler(cur);
        x.push(...r);
      } else if (cur.includes('/:')) {
        logError(`No configuration for route "${yellow(cur)}" found. Skipping`);
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
    return (plugins.router[conf.type](route, conf) as unknown) as HandledRoute[];
  }
  return [{route, type: RouteTypes.default}];
}
