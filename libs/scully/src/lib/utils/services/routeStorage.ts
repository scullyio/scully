import { registerPlugin } from '../../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { Deferred } from '../platform-server/deferred.js';

const deferredRoutes = new Deferred<HandledRoute[]>();
export const getHandledRoutes = () => deferredRoutes.promise;

/** this plugin will only get called in the "main" thread */
registerPlugin('routeDiscoveryDone', 'storeAllRoutes', async (routes: HandledRoute[]) => {
  deferredRoutes.resolve(routes);
});
