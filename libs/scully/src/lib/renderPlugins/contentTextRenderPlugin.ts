import { registerPlugin } from '../pluginManagement/pluginRepository';
import { ContentTextRoute } from '../routerPlugins/handledRoute.interface';
import { logError, yellow } from '../utils/log';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent';
registerPlugin('render', 'contentText', contentTextRenderPlugin);

export async function contentTextRenderPlugin(html: string, route: ContentTextRoute): Promise<string> {
  const contentType = route.contentType || route.config.contentType;
  const contentRaw = route.content || route.config.content;
  if (typeof contentType === 'string' && ['string', 'function'].includes(typeof contentRaw)) {
    try {
      const content = typeof contentRaw === 'string' ? contentRaw : contentRaw(route);
      return convertAndInjectContent(html, content, contentType, route);
    } catch (e) {
      logError(`Error during contentText rendering`);
      console.error(e);
    }
  } else {
    throw new Error(`route "${yellow(route.route)}" is missing contentType or content`);
  }
  return html;
}
