import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { logWarn, yellow } from '../utils/';
import { getHandledRoutes } from '../utils';
import { HandledRoute } from '../../';

const seoHrefPlugin = async (
  html: string,
  route: HandledRoute
): Promise<string> => {
  try {
    const routes = await getHandledRoutes;
    const dom = new JSDOM(html);
    const { window } = dom;
    const anchors = window.document.querySelectorAll('[href]');
    anchors.forEach(a => {
      const href = a.getAttribute('href');
      /** Add noopener and noreferrer to _blank links */
      if (href && a.getAttribute('target') === '_blank') {
        /** get the attribute add the options and filter out duplicates */
        const rel = ((a.getAttribute('rel') || '') + ' noreferrer noopener')
          .trim()
          .split(' ')
          .filter((v, i, a) => a.indexOf(v) === i)
          .join(' ');
        a.setAttribute('rel', rel);
      }
      if (
        routes.find(route => route.route === href) === undefined ||
        href.endsWith('/')
      ) {
        /** don't handle routes that are not inside our app. */
        return;
      }
      /** add the trailing slash */
      a.setAttribute('href', href + '/');
    });
    return dom.serialize();
  } catch (e) {
    console.log(e);
    logWarn(
      `Error in the seoHrefOptimise plugin, didn't update href's for route: "${yellow(
        route.route
      )}"`
    );
  }
  return html;
};

registerPlugin('render', 'seoHrefOptimise', seoHrefPlugin);
