import { HandledRoute, logWarn, registerPlugin, yellow } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const docLink = 'docsLink';

const docsLinkPlugin = async (html: string, options: HandledRoute): Promise<string> => {
  try {
    const dom = new JSDOM(html);
    const { window } = dom;
    const anchors = Array.from(window.document.querySelectorAll('[href]'));
    anchors.forEach((a) => {
      const href = a.getAttribute('href');
      if (href && href.toLowerCase().endsWith('.md') && !href.toLowerCase().startsWith('http')) {
        const myBase = options.route.substring(0, options.route.lastIndexOf('/'));
        const newRef = `${myBase}/${href.slice(0, -3)}`;
        a.setAttribute('href', newRef);
      }
      if (href && href.startsWith('#')) {
        const newRef = `${options.route}${href}`;
        a.setAttribute('href', newRef);
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
