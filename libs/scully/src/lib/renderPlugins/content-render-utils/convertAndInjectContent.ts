import { yellow } from 'chalk';
import { JSDOM } from 'jsdom';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface.js';
import { logWarn } from '../../utils/log.js';
import { customMarkdownOptions } from './customMarkdownOptions.js';
import { contentToHTML } from './handleFile.js';
import { injectHtml } from './injectHtml.js';

export async function convertAndInjectContent(dom: JSDOM, anyContent: string, type: string, route: HandledRoute): Promise<JSDOM> {
  let additionalHTML = '';
  try {
    additionalHTML = await customMarkdownOptions(await contentToHTML(type, anyContent, route));
    return injectHtml(dom, additionalHTML, route);
  } catch (e) {
    logWarn(`Error, while converting content for "${yellow(route.route)}"`);
  }
  return dom;
}
