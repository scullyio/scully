import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { ssl } from '../../utils';
import { logWarn, yellow } from '../../utils/log';
import { addNgIdAttribute } from './addNgIdAttribute';
import { getIdAttrName } from './getIdAttrName';
import { getScript } from './getScript';
import { insertContent } from './insertContent';

export const scullyBegin = '<!--scullyContent-begin-->';
export const scullyEnd = '<!--scullyContent-end-->';

export function injectHtml(html: string, additionalHTML: string, route: HandledRoute): string {
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
  try {
    const htmlWithNgAttr = addNgIdAttribute(additionalHTML, attr);
    return insertContent(scullyBegin, scullyEnd, html, htmlWithNgAttr, getScript(attr));
  } catch (e) {
    logWarn(`Error, while rendering text content into route "${yellow(route.route)}"`);
    console.error(e);
  }
  return html;
}
