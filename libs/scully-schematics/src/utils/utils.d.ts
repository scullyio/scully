import {Rule, Source, Tree} from '@angular-devkit/schematics';
import ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
interface Data {
  name: string;
  type: string;
  slug: string;
  route: string;
  sourceDir?: string;
}
export interface PackageJson {
  dependencies: PackageJsonConfigPart<string>;
  devDependencies: PackageJsonConfigPart<string>;
  scripts?: PackageJsonConfigPart<string>;
}
export interface PackageJsonConfigPart<T> {
  [key: string]: T;
}
export declare function addRouteToScullyConfig(scullyConfigJs: string, data: Data): string;
export declare function applyWithOverwrite(source: Source, rules: Rule[]): Rule;
export declare function getPrefix(host: Tree, angularjson: string, project: string): any;
export declare function addRouteToModule(host: Tree, options: any): void;
export declare function getSrc(host: Tree, project: string): any;
export declare function getRoot(host: Tree, project: string): any;
export declare function getStyle(host: Tree, project?: string, angularjsonPath?: string): any;
export declare const getJsonFile: <T>(
  tree: import('@angular-devkit/schematics/src/tree/interface').Tree,
  path: string
) => T;
export declare const getFileContents: (
  tree: import('@angular-devkit/schematics/src/tree/interface').Tree,
  filePath: string
) => string;
export declare const getPackageJson: (
  tree: import('@angular-devkit/schematics/src/tree/interface').Tree,
  workingDirectory?: string
) => PackageJson;
export declare const overwritePackageJson: (
  tree: import('@angular-devkit/schematics/src/tree/interface').Tree,
  content: PackageJson,
  workingDirectory?: string
) => import('@angular-devkit/schematics/src/tree/interface').Tree;
export declare function getSourceFile(host: Tree, path: string): ts.SourceFile;
export declare const yamlToJson: (filePath: string) => any;
export declare const jsonToJaml: (metaData: {}) => any;
export declare const toAscii: (src: string) => string;
export declare const getProject: (
  host: import('@angular-devkit/schematics/src/tree/interface').Tree,
  project: string
) => any;
export declare const getScullyConfig: (
  host: import('@angular-devkit/schematics/src/tree/interface').Tree,
  project: string
) => string;
export declare const checkProjectExist: (
  host: import('@angular-devkit/schematics/src/tree/interface').Tree,
  projectName: string
) => boolean;
export declare const removeWrongCharacters: (str: string) => string;
export {};
