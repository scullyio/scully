export enum RouteTypes {
  json = 'json',
  contentFolder = 'contentFolder',
  default = 'default',
}

export interface ScullyConfig {
  projectRoot: string;
  homeFolder: string;
  outFolder?: string;
  distFolder?: string;
  routes: RouteConfig;
  appPort: number;
  staticport: number;
}

interface RouteConfig {
  [route: string]: RoutesTypes;
}

export type RoutesTypes = RouteTypeJson | RouteTypeContentFolder | RouterTypeDefault | RouteTypeUnknown;

export interface RouterTypeDefault {
  type: RouteTypes.default;
}

export type RouteTypeJson = {
  type: RouteTypes.json;
} & {
  [paramName: string]: {
    url: string;
    property: string;
  };
};

export type RouteTypeContentFolder = {
  type: RouteTypes.contentFolder;
} & {
  [paramName: string]: {
    folder: string;
  };
};

export type RouteTypeUnknown = {
  type: string;
} & {
  [paramName: string]: any;
};
