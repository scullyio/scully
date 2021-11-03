import { PuppeteerNodeLaunchOptions } from 'puppeteer';

export enum RouteTypes {
  json = 'json',
  contentFolder = 'contentFolder',
  default = 'default',
}

export interface ScullyConfig {
  /** is this a bare project (without angular.json?) */
  bareProject?: boolean;
  /** the name of the project we are using. Provided by Scully itself */
  projectName?: string;
  /** the folder where project is. Can be any off the projects in a repo, read from angular.json */
  projectRoot?: string;
  /** the folder where the project sources resides, read from angular.json */
  sourceRoot?: string;
  /** Array with string ID's of the content-renderers that will be run on all routes */
  defaultPostRenderers?: (string | symbol)[];
  /** the root of the project (where angular.json lives) */
  homeFolder?: string;
  /** the destination of the Scully generated files */
  outDir?: string;
  /** the folder used by the scully server to serve the generated files. defaults to outDir */
  outHostFolder?: string;
  /** the place where distribution files of the project are. Should be a subfolder of dist. */
  distFolder?: string;
  /** the folder used to serve the angular distribution files, defaults to distFolder */
  hostFolder?: string;
  /** transferState only inlined into page, and not written into separate data.json */
  inlineStateOnly?: boolean;
  /** routes that need additional processing have their configuration in here */
  routes: RouteConfig;
  /** routes that are in the application but have no route in the router */
  extraRoutes?: string | string[] | Promise<string[] | string>;
  /** Port-number where the original application is served */
  appPort?: number;
  /** Boolean that determines saving of site-tumbnails files */
  thumbnails?: boolean;
  /** port-number where the Scully generated files are available */
  staticPort?: number;
  /** port for the live reload service */
  reloadPort?: number;
  /** optional proxy config file, uses the same config file as the CLI */
  proxyConfig?: string;
  /** optional launch-options for puppeteer */
  puppeteerLaunchOptions?: PuppeteerNodeLaunchOptions;
  /** hostname to use for local server, defaults to `localhost` */
  hostName?: string;
  /** optional hostURL, if this is provided, we are going to use this server instead of the build-in one. */
  hostUrl?: string;
  /** optional guessParserOptions, if this is provided we are going to pass those options to the guess parser. */
  guessParserOptions?: GuessParserOptions;
  /** the maximum of concurrent puppeteer tabs open. defaults to the available amounts of cores */
  maxRenderThreads?: number;
  /** the resource types to ignore when generating pages via Puppeteer */
  ignoreResourceTypes?: string[];
  /** how to handle 404 in Scully server */
  handle404?: string;
  /** specify the project target propery, defaults to 'architect' */
  target?: string;
}

interface RouteConfig {
  [route: string]: RoutesTypes;
}

export type RoutesTypes = RouteTypeJson | RouteTypeContentFolder | RouterTypeDefault | RouteTypeUnknown;

export interface RouterTypeDefault {
  type: RouteTypes.default;
  postRenderers?: (string | symbol)[];
}

export type RouteTypeJson = {
  type: RouteTypes.json;
  postRenderers?: (string | symbol)[];
} & {
  [paramName: string]: {
    url: string;
    property: string;
    headers?: HeadersObject;
    // A handler to map the results to an array that can then be deepGet-ed
    resultsHandler?: (raw: any) => any[];
    agent?: any;
  };
};

export interface HeadersObject {
  expectedContentType?: string;
  [headerName: string]: string;
}

export type RouteTypeContentFolder = {
  postRenderers?: (string | symbol)[];
  type: RouteTypes.contentFolder;
} & {
  [paramName: string]: {
    folder: string;
  };
};

export type RouteTypeUnknown = {
  postRenderers?: (string | symbol)[];
  type: string;
} & {
  [paramName: string]: any;
};

interface GuessParserOptions {
  // Files to pass to the guess parser that will be excluded from the route-discovery process.
  excludedFiles: string[];
}
