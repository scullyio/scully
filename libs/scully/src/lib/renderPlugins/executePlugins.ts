import { findPlugin } from '../pluginManagement/pluginConfig';
import { registerPlugin, scullySystem } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { scullyConfig } from '../utils/config';
import { logError, yellow, logWarn } from '../utils/log';
import { captureException } from '../utils/captureMessage';
import { puppeteerRender } from './puppeteerRenderPlugin';
import { toJSDOM, fromJSDOM } from './jsdomPlugins';
import { JSDOM } from 'jsdom';
import { postProcessByDomPlugin, postProcessByHtmlPlugin } from '../pluginManagement';

export const renderRoute = 'renderRoute' as const;

const executePluginsForRoute = async (route: HandledRoute) => {
  /** make one array with all handlers for this route, filter out empty ones */
  const handlers = [route.type, ...(route.postRenderers || scullyConfig.defaultPostRenderers)].filter(Boolean);
  const preRender = route.config && route.config.preRenderer;
  if (preRender) {
    try {
      const prResult = await preRender(route);
      if (prResult === false) {
        logWarn(`The prerender function stopped rendering for "${yellow(route.route)}". This route is skipped.`);
        return '';
      }
    } catch (e) {
      captureException(e);
      logError(`The prerender function did error during rendering for "${yellow(route.route)}". This route is skipped.`);
      /** abort when prerender throws */
      return '';
    }
  }
  // this support different renders: puppeteer / imgRender / sps / others...
  const InitialHTML = (await (route.renderPlugin ? findPlugin(route.renderPlugin) : findPlugin(puppeteerRender))(route)) as string;

  // split out jsDom vs string renderers.
  const { jsDomRenders, renders: stringRenders } = handlers.reduce(
    (result, plugin) => {
      const textHandler = findPlugin(plugin, 'postProcessByHtml', false) as postProcessByHtmlPlugin;
      if (textHandler !== undefined) {
        result.renders.push({ plugin, handler: textHandler });
      }
      const jsDomHandler = findPlugin(plugin, 'postProcessByDom', false) as postProcessByDomPlugin;
      if (jsDomHandler !== undefined) {
        result.jsDomRenders.push({ plugin, handler: jsDomHandler });
      }
      return result;
    },
    { jsDomRenders: [], renders: [] } as {
      jsDomRenders: { plugin: string | symbol; handler: postProcessByDomPlugin }[];
      renders: { plugin: string | symbol; handler: postProcessByHtmlPlugin }[];
    }
  );

  /** render jsDOM plugins before the text plugins.  */
  let jsDomHtml: string;
  if (jsDomRenders.length > 0) {
    const startDom = findPlugin(toJSDOM)(InitialHTML) as Promise<JSDOM>;
    const endDom = await jsDomRenders.reduce(async (dom, { handler, plugin }) => {
      const d = await dom;
      try {
        /** return result of plugin */
        return handler(d, route);
      } catch (e) {
        captureException(e);
        logError(
          `Error during content generation with plugin "${yellow(plugin)}" for ${yellow(
            route.templateFile
          )}. This hander is skipped.
          ${e.message}

          `
        );
        /** reset jsDOM to initial state, as we now probably have an unknown state. */
        return findPlugin(toJSDOM)(InitialHTML);
      }
    }, startDom);
    jsDomHtml = await findPlugin(fromJSDOM)(endDom);
  }

  /** render all the text render plugins */
  return stringRenders.reduce(async (updatedHTML, { handler, plugin }) => {
    const html = await updatedHTML;
    try {
      /** return result of plugin */
      return await handler(html, route);
    } catch (e) {
      captureException(e);
      logError(
        `Error during content generation with plugin "${yellow(plugin)}" for ${yellow(route.templateFile)}. This hander is skipped.`
      );
    }
    /** return unhandled result */
    return html;
  }, Promise.resolve(jsDomHtml || InitialHTML));
};

registerPlugin(scullySystem, renderRoute, executePluginsForRoute);
