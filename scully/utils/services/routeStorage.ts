import {registerPlugin} from '../../pluginManagement';
import {HandledRoute} from '../../routerPlugins';

let resolveRoutes: (value?: HandledRoute[] | PromiseLike<HandledRoute[]>) => void;
export const getHandledRoutes: Promise<HandledRoute[]> = new Promise(resolve => (resolveRoutes = resolve));

const storeRoutesPlugin = async routes => {
  resolveRoutes(routes);
};

registerPlugin('routeDiscoveryDone', 'storeRoutes', storeRoutesPlugin);
