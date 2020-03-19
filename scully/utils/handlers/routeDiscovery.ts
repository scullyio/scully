import {performance} from 'perf_hooks';
import {addOptionalRoutes, HandledRoute} from '../../routerPlugins/addOptionalRoutesPlugin';
import {storeRoutes} from '../../systemPlugins/storeRoutes';
import {log, logError} from '../log';
import {performanceIds} from '../performanceIds';

export async function routeDiscovery(unhandledRoutes: string[], localBaseFilter: string) {
  performance.mark('startDiscovery');
  performanceIds.add('Discovery');
  log('Pull in data to create additional routes.');
  let handledRoutes = [] as HandledRoute[];
  try {
    handledRoutes = (
      await addOptionalRoutes(
        /** use all handled routes without empty ones, and apply the baseFilter */
        unhandledRoutes.filter((r: string) => typeof r === 'string' && r.startsWith(localBaseFilter))
      )
    ).filter(r => !r.route.endsWith('*'));
  } catch (e) {
    logError(`Problem during route handling, se below for details`);
    console.error(e);
  }
  performance.mark('stopDiscovery');
  /** save routerinfo, so its available during rendering */
  if (localBaseFilter === '') {
    /** only store when the routes are complete  */
    await storeRoutes(handledRoutes);
  }
  return handledRoutes;
}
