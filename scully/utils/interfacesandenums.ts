import {LaunchOptions} from 'puppeteer';

export enum RouteTypes {
  json = 'json',
  contentFolder = 'contentFolder',
  default = 'default',
}

export interface ScullyConfig {
  /** the name of the project we are using. Provided by Scully itself */
  projectName: string;
  /** the folder where project is. Can be any off the projects in a repo, read from angular.json */
  projectRoot?: string;
  /** the folder where the project sources resides, read from angular.json */
  sourceRoot?: string;
  /** Array with string ID's of the content-renderes that will be run on all routes */
  defaultPostRenderers: string[];
  /** the root of the project (where angular.json lives) */
  homeFolder: string;
  /** the destination off the Scully generated files */
  outDir?: string;
  /** the place where distribution files of the project are. Should be a subfolder of dist. */
  distFolder?: string;
  /** transferState only inlined into page, and not written into separate data.json */
  inlineStateOnly: boolean;
  /** routes that needs additional processing have their configuration in here */
  routes: RouteConfig;
  /** routes that are in the application but have no route in the router */
  extraRoutes?: (string | Promise<string[] | string>)[];
  /** Port-number where the original application is served */
  appPort: number;
  /** port-number where the Scully generated files are available */
  staticport: number;
  /** port for the live reload service */
  reloadPort: number;
  /** optional proxy config file, uses the same config file as the CLI */
  proxyConfig?: string;
  /** optional launch-options for puppeteer */
  puppeteerLaunchOptions?: LaunchOptions;
  /** hostname to use for local server, defaults to `localhost` */
  hostName?: string;
  /** optional hostURL, if this is provided, we are going to use this server instead of the build-in one. */
  hostUrl?: string;
  /** optional guessParserOptions, if this is provided we are going to pass those options to the guess parser. */
  guessParserOptions?: GuessParserOptions;
  /** the maximum of concurrent puppeteer tabs open. defaults to the available amounts of cores */
  maxRenderThreads: number;
}

interface RouteConfig {
  [route: string]: RoutesTypes;
}

export type RoutesTypes = RouteTypeJson | RouteTypeContentFolder | RouterTypeDefault | RouteTypeUnknown;

export interface RouterTypeDefault {
  type: RouteTypes.default;
  postRenderers?: string[];
}

export type RouteTypeJson = {
  type: RouteTypes.json;
  postRenderers?: string[];
} & {
  [paramName: string]: {
    url: string;
    property: string;
    headers?: HeadersObject;
    // A handler to map the results to an array that can then be deepGet-ed
    resultsHandler?: (raw: any) => any[];
  };
};

export interface HeadersObject {
  [headerName: string]: string;
}

export type RouteTypeContentFolder = {
  postRenderers?: string[];
  type: RouteTypes.contentFolder;
} & {
  [paramName: string]: {
    folder: string;
  };
};

export type RouteTypeUnknown = {
  postRenderers?: string[];
  type: string;
} & {
  [paramName: string]: any;
};

interface GuessParserOptions {
  // Files to pass to the guess parser that will be excluded from the route-discovery process.
  excludedFiles: string[];
}
