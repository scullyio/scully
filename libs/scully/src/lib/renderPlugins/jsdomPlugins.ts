import { JSDOM } from 'jsdom';
import { HandledRoute } from '../..';
import { registerPlugin } from '../pluginManagement/pluginRepository';

export const toJSDOM = 'toJSDOM' as const;
export const fromJSDOM = 'fromJSDOM' as const;


registerPlugin(
  'scullySystem',
  toJSDOM,
  async (html: string, route: HandledRoute): Promise<JSDOM> => {
    try {
      return new JSDOM(html);
    } catch (e) {
      throw new Error(`Converting route ${route.route} to JSDOM failed`);
    }
  }
);
registerPlugin(
  'scullySystem',
  fromJSDOM,
  async (dom: JSDOM, route: HandledRoute): Promise<string> => {
    try {
      return dom.serialize();
    } catch {
      throw new Error(`Converting route ${route.route} from JSDOM failed`);
    }
  }
);
