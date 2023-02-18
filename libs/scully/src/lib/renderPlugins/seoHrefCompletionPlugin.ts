import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository.js';
import { HandledRoute } from '../routerPlugins/handledRoute.interface.js';
import { logWarn, yellow } from '../utils/log.js';
import { getHandledRoutes } from '../utils/services/routeStorage.js';

const seoHrefPlugin = async (dom: JSDOM, route: HandledRoute): Promise<JSDOM> => {
  try {
    const routes = await getHandledRoutes();
    const { window } = dom;
    const anchors = window.document.querySelectorAll<HTMLAnchorElement>('a[href]');
    anchors.forEach((a) => {
      const href = a.getAttribute('href');
      const isExternal = routes.find((r) => r.route === basePathOnly(href)) === undefined;
      /** Add noopener and noreferrer to _blank links */
      if ((href && a.getAttribute('target') === '_blank') || isExternal) {
        /** get the attribute add the options and filter out duplicates */
        if ((!href.includes('?') && !href.includes('#') && href.startsWith('//')) || href.startsWith('http')) {
          /** only upgrade links that are not startting with '/'   */
          const rel = ((a.getAttribute('rel') || '') + ' noreferrer noopener')
            .trim()
            .split(' ')
            .filter((v, i, a) => a.indexOf(v) === i)
            .join(' ');
          a.setAttribute('rel', rel);
        }
      }
      if (!isExternal && !href.endsWith('/') && !href.includes('?') && !href.includes('#')) {
        /** don't handle routes that are not inside our app. */
        a.setAttribute('href', href + '/');
      }
      /** add the trailing slash */
    });
  } catch (e) {
    console.log(e);
    logWarn(`Error in the seoHrefOptimise plugin, didn't update href's for route: "${yellow(route.route)}"`);
  }
  return dom;
};

registerPlugin('postProcessByDom', 'seoHrefOptimise', seoHrefPlugin);
registerPlugin('postProcessByDom', 'seoHrefOptimize', seoHrefPlugin);

/** copied from ng-lib  */
function basePathOnly(str: string): string {
  if (str.includes('#')) {
    str = str.split('#')[0];
  }
  if (str.includes('?')) {
    str = str.split('?')[0];
  }
  const cleanedUpVersion = str.endsWith('/') ? str.slice(0, -1) : str;
  return cleanedUpVersion === '' ? '/' : cleanedUpVersion;
}
