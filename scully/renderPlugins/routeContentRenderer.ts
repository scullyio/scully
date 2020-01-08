import {scullyConfig} from '../utils/config';
import {plugins} from '../pluginManagement/pluginRepository';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logError, yellow} from '../utils/log';
import {puppeteerRender} from './puppeteerRenderPlugin';

export const routeContentRenderer = async (route: HandledRoute) => {
  /** make one array with all handlers for this route, filter out empty ones */
  const handlers = [route.type, ...(route.postRenderers || scullyConfig.defaultPostRenderers)].filter(
    Boolean
  );
  return handlers.reduce(async (updatedHTML, plugin) => {
    const html = await updatedHTML;
    const handler = plugins.render[plugin];
    if (handler) {
      try {
        return await handler(html, route);
      } catch {
        logError(
          `Error during content generation with plugin "${yellow(plugin)}" for ${yellow(route.templateFile)}`
        );
      }
    }
    return html;
  }, puppeteerRender(route));
};
