import { JSDOM } from 'jsdom';
import { HandledRoute } from '../../routerPlugins/handledRoute.interface';
import { ssl } from '../../utils';
import { logWarn, yellow } from '../../utils/log';
import { findComments } from './findComments';
import { getScript } from './getScript';

export const scullyBegin = '<!--scullyContent-begin-->';
export const scullyEnd = '<!--scullyContent-end-->';

export function injectHtml(dom: JSDOM, additionalHTML: string, route: HandledRoute): JSDOM {
  const { window } = dom;
  const { document } = window;
  const scullyContent = document.querySelector('scully-content');
  if (scullyContent == null) {
    logWarn(`
      ----------------
      Error, missing "${yellow('<scully-content>')}" in route "${yellow(route.route)}"
      without <scully-content> we can not render this route.
      Make sure it is in there, and not inside any conditionals (*ngIf)
      You can check this by opening "${yellow(`http${ssl ? 'S' : ''}://localhost:4200/${route.route.replace(/^\//, '')}`)}"
      when you serve your app with ${yellow('ng serve')} and then in the browsers console run:
      ${yellow(`document.querySelector('scully-content')`)}
      ----------------
      `);
    return dom;
  }
  try {
    const parent = scullyContent.parentNode;
    const ngContentIndentiefier = Array.from<{ name: string }>(scullyContent.attributes).find(({ name }: { name: string }) =>
      name.startsWith('_ngcon')
    )?.name;
    const placeholder = document.createElement('div');
    placeholder.innerHTML = additionalHTML;
    /** add the ng-content id to all the elements in the fragment. */
    addContentId(placeholder, ngContentIndentiefier);
    /** find the comment nodes where we are going to insert */
    const beginNode = findComments(parent, 'scullyContent-begin') as Node;
    const endNode = findComments(parent, 'scullyContent-end') as Node;
    /** remove existing content between comment nodes */
    let next = beginNode.nextSibling;
    while (next !== endNode && next !== parent.lastChild) {
      next.remove();
      next = beginNode.nextSibling;
    }
    /** move in the new content */
    while (placeholder.firstChild) {
      parent.insertBefore(placeholder.firstChild, endNode);
    }
    /** add the script that will update the content after angular starts. */
    const script = document.createElement('script');
    script.textContent = getScript(ngContentIndentiefier);
    parent.appendChild(script);
  } catch (e) {
    /** let the developer know something went haywire. */
    logWarn(`Error, while rendering text content into route "${yellow(route.route)}", ${e.message}`);
    return new JSDOM(`<h1>Error during processing of scully content</h1>
      <p> Error: "${e.toString()}" was raised while we tried to insert scully-content</p>`);
  }
  return dom;
}

function addContentId(elm: Node, id) {
  if (id) {
    /** add the ng-content id to all the elements in the fragment. */
    const document = elm.ownerDocument;
    const walk = document.createTreeWalker(elm);
    let cur = (walk.currentNode as unknown) as HTMLElement;
    while (cur) {
      if (cur.nodeType === 1) {
        cur.setAttribute(id, '');
      }
      cur = (walk.nextNode() as unknown) as HTMLElement;
    }
  }
}
