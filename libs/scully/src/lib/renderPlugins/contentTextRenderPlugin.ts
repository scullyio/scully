import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { ContentTextRoute } from '../routerPlugins/handledRoute.interface.js';
import { scullyConfig } from '../utils/config.js';
import { RouteTypeUnknown } from '../utils/interfacesandenums.js';
import { logError, yellow } from '../utils/log.js';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent.js';
registerPlugin('postProcessByDom', 'contentText', contentTextRenderPlugin);

export async function contentTextRenderPlugin(dom: JSDOM, route: ContentTextRoute): Promise<JSDOM> {
  const configFromRoutes = (scullyConfig.routes[route.usedConfigRoute] || {}) as RouteTypeUnknown;
  const contentType = route.contentType || route.config.contentType;
  const contentRaw = route.content || route.config.content || configFromRoutes.content;
  if (contentRaw === undefined) {
    const config = scullyConfig.routes[route.usedConfigRoute] || {};
    console.dir(config);
  }
  if (typeof contentType === 'string' && ['string', 'function'].includes(typeof contentRaw)) {
    try {
      const content = typeof contentRaw === 'string' ? contentRaw : await contentRaw(route);
      return convertAndInjectContent(dom, content, contentType, route);
    } catch (e) {
      logError(`Error during contentText rendering`);
      console.error(e);
    }
  } else {
    throw new Error(`route "${yellow(route.route)}" is missing contentType(got ${contentType}) or content(got:${contentRaw})`);
  }
  return dom;
}
