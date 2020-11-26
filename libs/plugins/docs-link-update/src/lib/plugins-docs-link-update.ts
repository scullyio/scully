import { HandledRoute, logWarn, registerPlugin, yellow } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const docLink = 'docsLink';

const docsLinkPlugin = async (html: string, options: HandledRoute): Promise<string> => {
  try {
    const dom = new JSDOM(html);
    const { window } = dom;
    const anchors = Array.from(window.document.querySelectorAll('[href]'));
    anchors.forEach((a: HTMLAnchorElement) => {
      const href = a.getAttribute('href');
      if (href && href.toLowerCase().endsWith('.md') && !href.toLowerCase().startsWith('http')) {
        let newRef = '';
        if (!href.startsWith('/')) {
          const myBase = dropOpeningSlash(options.route.substring(0, options.route.lastIndexOf('/')));
          newRef = `${myBase}/`;
        }
        newRef = newRef + href.slice(0, -3);
        a.setAttribute('href', newRef);
      }
      if (href && href.startsWith('#')) {
        a.setAttribute('data-hash', href.slice(1));
        a.setAttribute('href', 'javascript:;');
        a.setAttribute('onclick', `document.location.hash=this.dataset.hash`);
      }
    });
    return dom.serialize();
  } catch (e) {
    logWarn(`error in docsLink, didn't parse for route "${yellow(options.route)}"`);
  }
  // in case of failure return unchanged HTML to keep flow going
  return html;
};

const validator = async (config) => [];
registerPlugin('render', docLink, docsLinkPlugin, validator);

function dropEndingSlash(str: string) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}
function dropOpeningSlash(str: string) {
  return str.startsWith('/') && !str.startsWith('//') ? str.slice(1) : str;
}
