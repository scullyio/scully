import {LaunchOptions} from 'puppeteer';

export enum RouteTypes {
  json = 'json',
  contentFolder = 'contentFolder',
  default = 'default',
}

export interface ScullyConfig {
  /** the name of the project we are using. Provided by Scully itself */
  projectName: string;
  /** the folder where the app-source is. Can be any off the projects in a repo */
  projectRoot: string;
  /** Array with string ID's of the content-renderes that will be run on all routes */
  defaultPostRenderers: string[];
  /** the root of the project (where angular.json lives) */
  homeFolder: string;
  /** the destination off the Scully generated files */
  outDir?: string;
  /** the place where distribution files of the project are. Should be a subfolder of dist. */
  distFolder?: string;
  /** routes that needs additional processing have their configuration in here */
  routes: RouteConfig;
  /** routes that are in the application but have no route in the router */
  extraRoutes?: (string | Promise<string[] | string>)[];
  /** Port-number where the original application is served */
  appPort: number;
  /** port-number where the Scully generated files are available */
  staticport: number;
  /** optional launch-options for puppeteer */
  puppeteerLaunchOptions?: LaunchOptions;
  /** hostname to use for local server, defaults to `localhost` */
  hostName?: string;
  /** optional hostURL, if this is provided, we are going to use this server instead of the build-in one. */
  hostUrl?: string;
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
