import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { ContentTextRoute } from '../routerPlugins/handledRoute.interface';
import { logError, yellow } from '../utils/log';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent';
registerPlugin('rendererDom', 'contentText', contentTextRenderPlugin);

export async function contentTextRenderPlugin(dom: JSDOM, route: ContentTextRoute): Promise<JSDOM> {
  const contentType = route.contentType || route.config.contentType;
  const contentRaw = route.content || route.config.content;
  if (typeof contentType === 'string' && ['string', 'function'].includes(typeof contentRaw)) {
    try {
      const content = typeof contentRaw === 'string' ? contentRaw : contentRaw(route);
      return convertAndInjectContent(dom, content, contentType, route);
    } catch (e) {
      logError(`Error during contentText rendering`);
      console.error(e);
    }
  } else {
    throw new Error(`route "${yellow(route.route)}" is missing contentType or content`);
  }
  return dom;
}
