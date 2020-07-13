import { JSDOM } from 'jsdom';
import { registerPlugin } from '../pluginManagement/pluginRepository';
import { HandledRoute } from '../routerPlugins/handledRoute.interface';
import { ssl } from '../utils';
import { logWarn, yellow } from '../utils/log';
import { getScript } from './content-render-utils/getScript';
import { contentToHTML } from './content-render-utils/handleFile';
import { insertContent } from './content-render-utils/insertContent';
import { readFileAndCheckPrePublishSlug } from './content-render-utils/readFileAndCheckPrePublishSlug';
import { customMarkdownOptions } from './customMarkdownOptions';

registerPlugin('render', 'contentFolder', contentRenderPlugin);

const scullyBegin = '<!--scullyContent-begin-->';
const scullyEnd = '<!--scullyContent-end-->';

export async function contentRenderPlugin(html: string, route: HandledRoute) {
  const file = route.templateFile;
  try {
    let attr = '';
    try {
      attr = getIdAttrName(html.split('<scully-content')[1].split('>')[0].trim());
    } catch (e) {
      logWarn(`
        ----------------
        Error, missing "${yellow('<scully-content>')}" in route "${yellow(route.route)}"
        without <scully-content> we can not render this route.
        Make sure it is in there, and not inside any conditionals (*ngIf)
        You can check this by opening "${yellow(`http${ssl ? 'S' : ''}://localhost:4200/${route.route}`)}"
        when you serve your app with ${yellow('ng serve')} and then in the browsers console run:
        ${yellow(`document.querySelector('scully-content')`)}
        ----------------
        `);
    }
    let additionalHTML = '';
    try {
      const extension = file.split('.').pop();
      const { fileContent } = await readFileAndCheckPrePublishSlug(file);
      additionalHTML = await customMarkdownOptions(await contentToHTML(extension, fileContent, route));
    } catch (e) {
      logWarn(`Error, while reading content for "${yellow(route.route)}" from file: "${yellow(file)}"`);
    }
    const htmlWithNgAttr = addNgIdAttribute(additionalHTML, attr);
    return insertContent(scullyBegin, scullyEnd, html, htmlWithNgAttr, getScript(attr));
  } catch (e) {
    logWarn(`Error, while rendering content for "${yellow(route.route)}" from file: "${yellow(file)}"`);
    console.error(e);
  }
}

function addNgIdAttribute(html: string, id: string): string {
  if (!id) {
    return html;
  }
  try {
    const dom = new JSDOM(html, { runScripts: 'outside-only' });
    const { window } = dom;
    const { document } = window;
    const walk = document.createTreeWalker(document.body as any);
    let cur = (walk.currentNode as any) as HTMLElement;
    while (cur) {
      if (cur.nodeType === 1) {
        cur.setAttribute(id, '');
      }
      cur = (walk.nextNode() as any) as HTMLElement;
    }
    return document.body.innerHTML;
  } catch (e) {
    console.error(e);
  }

  return '';
}

function getIdAttrName(attrs: string): string {
  try {
    return (
      attrs &&
      attrs
        .split(' ')
        .find((at: string) => at.trim().startsWith('_ngcontent'))
        .split('=')[0]
    );
  } catch {
    return '6';
  }
}
