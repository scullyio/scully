import { yellow } from 'chalk';
import { JSDOM } from 'jsdom';
import { HandledRoute, logWarn } from '../../..';
import { customMarkdownOptions } from './customMarkdownOptions';
import { contentToHTML } from './handleFile';
import { injectHtml } from './injectHtml';

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
