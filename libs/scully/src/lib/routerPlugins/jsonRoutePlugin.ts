import { registerPlugin } from '../pluginManagement/pluginRepository';
import { deepGet } from '../utils/deepGet';
import { httpGetJson } from '../utils/httpGetJson';
import { RouteTypeJson } from '../utils/interfacesandenums';
import { logError, printProgress, yellow } from '../utils/log';
import { routeSplit } from '../utils/routeSplit';
import { HandledRoute } from './handledRoute.interface';
import { renderTemplate } from './renderTemplate';

export const jsonRoutePlugin = async (route: string, conf: RouteTypeJson): Promise<HandledRoute[]> => {
  try {
    const { params, createPath } = routeSplit(route);
    // const params = parts.filter(p => p.startsWith(':')).map(id => id.slice(1));
    const missingParams = params.filter((param) => !conf.hasOwnProperty(param.part));
    if (missingParams.length > 0) {
      console.error(`missing config for parameters (${missingParams.join(',')}) in route: ${route}. Skipping`);
      return [{ route, type: conf.type }];
    }
    printProgress(undefined, `Json Route plugin loading data for "${yellow(route)}"`);

    /** helper to get the data, parses out the context, and the property */
    const loadData = (param, context = {}): Promise<any[]> => {
      /** us es-template lie string to construct the url */
      const url = renderTemplate(conf[param.part].url, context).trim();
      return httpGetJson(url, {
        headers: conf[param.part].headers,
      })
        .then((rawData) => (conf[param.part].resultsHandler ? conf[param.part].resultsHandler(rawData) : rawData))
        .then((rawData: any) =>
          conf[param.part].property === undefined ? rawData : rawData.map((row) => deepGet(conf[param.part].property, row))
        );
    };

    const routes = await params.reduce(async (total, param, col) => {
      const foundRoutes = await total;
      if (col === 0) {
        /**
         * first iteration, just dump the top level in
         * and convert it to array format.
         */
        return (await loadData(param)).map((r) => [r]);
      }
      return await Promise.all(
        foundRoutes.map(async (data) => {
          const context = data.reduce((ctx, r, x) => {
            return { ...ctx, [params[x].part]: r };
          }, {});
          const additionalRoutes = await loadData(param, context);
          return additionalRoutes.map((r) => [...data, r]);
        }, [])
      ).then((chunks) => chunks.reduce((acc, cur) => acc.concat(cur)));
    }, Promise.resolve([]));

    return routes.map((routeData: string[]) => ({
      route: createPath(...routeData),
      type: conf.type,
    }));
  } catch (e) {
    logError(`Could not fetch data for route "${yellow(route)}"`);
    return [{ route, type: conf.type }];
  }
};

// TODO actual validation of the config
const jsonValidator = async (conf) => {
  const { params } = routeSplit(conf.path);
  // return [yellow('all seems ok')];
  return [];
};

registerPlugin('router', 'json', jsonRoutePlugin, jsonValidator);
