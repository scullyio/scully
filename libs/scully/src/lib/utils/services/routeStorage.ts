import { registerPlugin } from '../../pluginManagement';
import { HandledRoute } from '../../routerPlugins';
import { Deferred } from "../platform-server/deferred";

const deferredRoutes = new Deferred<HandledRoute[]>();
export const getHandledRoutes = () => deferredRoutes.promise;

/** this plugin will only get called in the "main" thread */
registerPlugin('routeDiscoveryDone', 'storeAllRoutes', async (routes: HandledRoute[]) => {
  deferredRoutes.resolve(routes);
});


