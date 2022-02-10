import { HandledRoute, logWarn, registerPlugin, yellow, getMyConfig } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const removeScripts = 'removeScripts';
export interface RemoveScriptsConfig {
  /** function that receives the script element and returns false when the script needs to be removed */
  predicate?: (elm: HTMLScriptElement) => boolean;
  /** defaults to true, keeps the transferState so the data.json can be generated */
  keepTransferstate?: boolean;
  /** defaults to `['scullyKeep', 'sk']`. array with attributes, scripts that have one of those will be kept */
  keepAttributes?: string[];
  /** defaults to `[]`. Array with strings, if the fragment occurs in the SRC of the script. the script is kept*/
  keepSrc?: string[];
}

const config: RemoveScriptsConfig = {
  predicate: elm => false,
  keepTransferstate: true,
  keepAttributes: ['scullyKeep', 'sk'],
  keepSrc: []
};

const plugin = async (dom: JSDOM, route: HandledRoute) => {
  try {
    const conf = Object.assign({}, config, getMyConfig(plugin));
    // const dom = new JSDOM(html);
    const { window } = dom;
    const { document } = window;
    document.querySelectorAll('script').forEach(cur => {
      if (conf.keepTransferstate && cur.id === 'ScullyIO-transfer-state') {
        return;
      }
      if (conf.predicate(cur)) {
        return;
      }
      if (conf.keepAttributes.some(attribute => cur.hasAttribute(attribute))) {
        return;
      }
      if (conf.keepSrc.some(s => cur.src.includes(s))) {
        return;
      }
      // console.log('removed', cur.src || cur.innerHTML);
      cur.parentNode.removeChild(cur);
    });
  } catch (e) {
    logWarn(`error in ${removeScripts}, didn't parse for route "${yellow(route.route)}"`);
  }
  return dom;
};

registerPlugin('postProcessByDom', removeScripts, plugin);
