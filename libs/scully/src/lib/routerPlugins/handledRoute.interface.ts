import { Serializable } from 'puppeteer';
export interface RouteConfig {
  /** this route does a manual Idle check */
  manualIdleCheck?: boolean;
  /** type of the route  */
  type?: string;
  /**
   * an optional function that will be executed on render.
   * Receives the route string, and the config of this route.
   */
  preRenderer?: (route: HandledRoute) => Promise<void | false>;
  /** Allow in every other setting possible, depends on plugins */
  [key: string]: any;
}

export interface HandledRoute {
  /** the _complete_ route */
  route: string;
  /** String, must be an existing plugin name. mandatory */
  type?: string;
  /** the relevant part of the scully-config  */
  config?: RouteConfig;
  /** variables exposed to angular _while rendering only!_ */
  exposeToPage?: {
    manualIdle?: boolean;
    transferState?: Serializable;
    [key: string]: Serializable;
  };
  /** data will be injected into the static page */
  injectToPage?: {
    [key: string]: Serializable;
  };
  /** an array with render plugin names that will be executed */
  postRenderers?: string[];
  /** the path to the file for a content file */
  templateFile?: string;
  /** optional title, if data holds a title, that will be used instead */
  title?: string;
  /**
   * additional data that will end up in scully.routes.json
   * the frontMatter data will be added here too.
   */
  data?: RouteData;
}

export interface RouteData {
  title?: string;
  author?: string;
  [prop: string]: any;
}

export interface ContentTextRoute extends HandledRoute {
  contentType?: string;
  content?: string;
}
