import { findPlugin, HandledRoute, log, registerPlugin, yellow } from '@scullyio/scully';
import { scullySystem } from '@scullyio/scully/src/lib/pluginManagement/pluginRepository';
import { puppeteerRender } from '@scullyio/scully/src/lib/renderPlugins/puppeteerRenderPlugin';

//libs/scully/src/lib/renderPlugins/puppeteerRenderPlugin.ts
export const renderOnce = Symbol('renderOnce');
const render = findPlugin(puppeteerRender);
const cache = new Map<any, Promise<string>>();

registerPlugin(scullySystem, renderOnce, (route: HandledRoute, config) => {
  if (!cache.has(config)) {
    cache.set(config, render(route, config));
  }
  log(`Cache used for "${yellow(route.route)}"`);
  return cache.get(config);
});
