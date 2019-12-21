import {plugins} from '../pluginManagement/pluginRepository';
import {HandledRoute} from '../routerPlugins/addOptionalRoutesPlugin';
import {logError, yellow} from '../utils/log';
import {puppeteerRender} from './puppeteerRenderPlugin';

export const routeContentRenderer = async (route: HandledRoute) => {
  const html = await puppeteerRender(route);
  const handler = plugins.render[route.type];
  if (handler) {
    try {
      return await handler(html, route);
    } catch {
      logError(`Error during content generation for ${yellow(route.templateFile)}`);
    }
  }
  return html;
};
