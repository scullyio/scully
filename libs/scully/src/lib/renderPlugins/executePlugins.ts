import { findPlugin } from '../pluginManagement/pluginConfig';
import { registerPlugin, scullySystem } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { scullyConfig } from '../utils/config';
import { logError, yellow } from '../utils/log';
import { puppeteerRender } from './puppeteerRenderPlugin';

export const renderRoute = Symbol('renderRoute');

const executePluginsForRoute = async (route: HandledRoute) => {
  /** make one array with all handlers for this route, filter out empty ones */
  const handlers = [route.type, ...(route.postRenderers || scullyConfig.defaultPostRenderers)].filter(Boolean);
  const preRender = route.config && route.config.preRenderer;
  if (preRender) {
    try {
      const prResult = await preRender(route);
      if (prResult === false) {
        logError(`prerender stopped rendering for "${yellow(route.route)}". This route is skipped.`);
        return '';
      }
    } catch (e) {
      logError(`prerender trowed during  rendering for "${yellow(route.route)}". This route is skipped.`);
      /** abort when prerender throws */
      return '';
    }
  }
  const InitialPromise = findPlugin(puppeteerRender)(route);
  return handlers.reduce(async (updatedHTML, plugin) => {
    const html = await updatedHTML;
    const handler = findPlugin(plugin, 'render', false);
    if (handler) {
      try {
        /** return result of plugin */
        return await handler(html, route);
      } catch {
        logError(
          `Error during content generation with plugin "${yellow(plugin)}" for ${yellow(
            route.templateFile
          )}. This hander is skipped.`
        );
      }
    }
    /** return unhandled result */
    return html;
  }, InitialPromise);
};

registerPlugin(scullySystem, renderRoute, executePluginsForRoute);
