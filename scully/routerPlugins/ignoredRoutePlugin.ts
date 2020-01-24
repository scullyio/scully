import {registerPlugin} from '../pluginManagement/pluginRepository';

/**
 * The ignoredPlugin helps to take routes out.
 * when you use this plugin, the route will never be rendered.
 */
registerPlugin('router', 'ignored', () => []);
