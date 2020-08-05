import { yellow } from 'chalk';
import { HandledRoute, logWarn } from '../../..';
import { customMarkdownOptions } from './customMarkdownOptions';
import { contentToHTML } from './handleFile';
import { injectHtml } from './injectHtml';

export async function convertAndInjectContent(
  html: string,
  anyContent: string,
  type: string,
  route: HandledRoute
): Promise<string> {
  let additionalHTML = '';
  try {
    additionalHTML = await customMarkdownOptions(await contentToHTML(type, anyContent, route));
    return injectHtml(html, additionalHTML, route);
  } catch (e) {
    logWarn(`Error, while converting content for "${yellow(route.route)}"`);
  }
  return html;
}
