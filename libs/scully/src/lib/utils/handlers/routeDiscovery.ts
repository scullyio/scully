import { performance } from 'perf_hooks';
import { addOptionalRoutes } from '../../routerPlugins/addOptionalRoutesPlugin';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { routeFilter } from '../cli-options';
import { log, logError, green, printProgress } from '../log';
import { performanceIds } from '../performanceIds';

export async function routeDiscovery(unhandledRoutes: string[], localBaseFilter: string): Promise<HandledRoute[]> {
  performance.mark('startDiscovery');
  performanceIds.add('Discovery');
  printProgress(undefined, 'Pulling in data to create additional routes.');
  let handledRoutes = [] as HandledRoute[];
  /** baseroutes are always the start of the route, so it ends with an trailing `*` */
  const baseFilterRegexs = wildCardStringToRegEx(localBaseFilter, {
    addTrailingStar: true,
  });
  const routeFilterRegexs = wildCardStringToRegEx(routeFilter);
  try {
    handledRoutes = (
      await addOptionalRoutes(
        /** use all handled routes without empty ones, and apply the baseFilter */
        unhandledRoutes.filter((r: string) => typeof r === 'string' && baseFilterRegexs.some((reg) => r.match(reg) !== null))
      )
    ).filter(
      (r) =>
        !r.route.endsWith('*') &&
        /** use the routefilter to only include matches */
        (routeFilter === '' || routeFilterRegexs.some((reg) => r.route.match(reg) !== null))
    );
  } catch (e) {
    logError(`Problem during route handling, see below for details`);
    console.error(e);
  }
  log(`  ${green('✔')} Successfully added routes created from routePlugins`);
  performance.mark('stopDiscovery');

  return handledRoutes;
}

function wildCardStringToRegEx(string, { addTrailingStar } = { addTrailingStar: false }) {
  const t = string.split(',');
  return t.map((item) => {
    if (addTrailingStar) {
      item += '*';
    }
    const escaped = item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    return new RegExp(`^${escaped.replace(/\\\*/g, '.*?')}$`, 'gi');
  });
}
