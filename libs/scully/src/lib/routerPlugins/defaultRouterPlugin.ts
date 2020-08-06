import { registerPlugin } from '../pluginManagement/pluginRepository';
import { RoutePlugin } from '../pluginManagement/Plugin.interfaces';
import { HandledRoute } from './handledRoute.interface';

async function defaultRouterPlugin(route: string) {
  return [{ route } as HandledRoute];
}
registerPlugin('router', 'default', defaultRouterPlugin);
