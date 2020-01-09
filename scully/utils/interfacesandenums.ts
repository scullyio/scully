export enum RouteTypes {
  json = 'json',
  contentFolder = 'contentFolder',
  default = 'default',
}

export interface ScullyConfig {
  projectRoot: string;
  defaultPostRenderers: string[];
  homeFolder: string;
  outDir?: string;
  distFolder?: string;
  routes: RouteConfig;
  extraRoutes?: string[];
  appPort: number;
  staticport: number;
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
    resultsHandler?: Function;
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
