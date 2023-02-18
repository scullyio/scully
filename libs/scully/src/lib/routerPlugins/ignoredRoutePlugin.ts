import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { RoutePlugin } from '../pluginManagement/Plugin.interfaces.js';
import { HandledRoute } from './handledRoute.interface.js';

/**
 * The ignoredPlugin helps to take routes out.
 * when you use this plugin, the route will never be rendered.
 */
registerPlugin('router', 'ignored', async (route: string) => [] as HandledRoute[]);
