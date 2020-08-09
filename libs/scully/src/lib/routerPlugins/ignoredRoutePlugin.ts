import { registerPlugin } from '../pluginManagement/pluginRepository';
import { RoutePlugin } from '../pluginManagement/Plugin.interfaces';
import { HandledRoute } from './handledRoute.interface';

/**
 * The ignoredPlugin helps to take routes out.
 * when you use this plugin, the route will never be rendered.
 */
registerPlugin('router', 'ignored', async (route: string) => [] as HandledRoute[]);
