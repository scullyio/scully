import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { RoutePlugin } from '../pluginManagement/Plugin.interfaces.js';
import { HandledRoute } from './handledRoute.interface.js';

async function defaultRouterPlugin(route: string) {
  return [{ route } as HandledRoute];
}
registerPlugin('router', 'default', defaultRouterPlugin);
