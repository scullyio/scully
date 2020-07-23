import { registerPlugin } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';

registerPlugin('render', 'contentText', contentTextRenderPlugin);

export async function contentTextRenderPlugin(html: string, route: HandledRoute) {
  return html;
}
