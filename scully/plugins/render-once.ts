import { findPlugin, HandledRoute, log, routeRenderer, registerPlugin, yellow } from '@scullyio/scully';
import { scullySystem } from '@scullyio/scully/src/lib/pluginManagement/pluginRepository';

export const renderOnce = 'renderOnce' as const;
const render = findPlugin(routeRenderer);
const cache = new Map<any, Promise<string>>();

registerPlugin(scullySystem, renderOnce, (route: HandledRoute, config) => {
  if (!cache.has(config)) {
    cache.set(config, render(route, config));
  }
  log(`Cache used for "${yellow(route.route)}"`);
  return cache.get(config);
});
