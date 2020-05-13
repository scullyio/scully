import { registerPlugin } from '../pluginManagement/pluginRepository';
async function defaultRouterPlugin(route) {
  return [{ route }];
}
registerPlugin('router', 'default', defaultRouterPlugin);
