import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { ContentTextRoute } from '../routerPlugins/handledRoute.interface';
import { scullyConfig } from '../utils/config';
import { RouteTypeUnknown } from '../utils/interfacesandenums';
import { logError, yellow } from '../utils/log';
import { convertAndInjectContent } from './content-render-utils/convertAndInjectContent';
registerPlugin('postProcessByDom', 'contentText', contentTextRenderPlugin);

export async function contentTextRenderPlugin(dom: JSDOM, route: ContentTextRoute): Promise<JSDOM> {
  const configFromRoutes = (scullyConfig.routes[route.usedConfigRoute] || {}) as RouteTypeUnknown;
  const contentType = route.contentType || route.config.contentType;
  const contentRaw = route.content || route.config.content || configFromRoutes.content ;
  if (contentRaw === undefined) {
    const config = (scullyConfig.routes[route.usedConfigRoute] || {})
    console.dir(config)
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
    console.dir(route)
    throw new Error(`route "${yellow(route.route)}" is missing contentType(got ${contentType}) or content(got:${contentRaw})`);

  }
  return dom;
}
