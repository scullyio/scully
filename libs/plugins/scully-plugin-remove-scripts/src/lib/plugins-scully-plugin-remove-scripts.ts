import { HandledRoute, logWarn, registerPlugin, yellow, getMyConfig } from '@scullyio/scully';
import { JSDOM } from 'jsdom';

export const removeBottomScripts = 'removeBottomScripts';

const config = {
  predicate: (elm) => false,
  keepTransferstate: true,
  keepAttribute: 'scullyKeep',
};

const plugin = async (html: string, route: HandledRoute) => {
  try {
    const conf = Object.assign({}, config, getMyConfig(plugin));
    const dom = new JSDOM(html);
    const { window } = dom;
    const { document } = window;
    let elm = document.body.lastElementChild;
    while (elm.tagName === 'SCRIPT') {
      const cur = elm;
      elm = cur.previousElementSibling;
      if (conf.keepTransferstate && cur.id === 'ScullyIO-transfer-state') {
        break;
      }
      if (conf.predicate(cur)) {
        break;
      }
      if (cur.hasAttribute(conf.keepAttribute)) {
        break;
      }
      document.body.removeChild(cur);
    }
    return dom.serialize();
  } catch (e) {
    logWarn(`error in ${removeBottomScripts}, didn't parse for route "${yellow(route.route)}"`);
  }
  return html;
};

registerPlugin('render', removeBottomScripts, plugin);
