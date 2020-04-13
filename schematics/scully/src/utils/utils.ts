import {
  apply,
  forEach,
  mergeWith,
  Rule,
  SchematicContext,
  Source,
  Tree,
  SchematicsException,
} from '@angular-devkit/schematics';
import {normalize, strings} from '@angular-devkit/core';
import {join} from 'path';
// @ts-ignore
import fs = require('fs');
// @ts-ignore
import yaml = require('js-yaml');

import {buildRelativePath} from '@schematics/angular/utility/find-module';
import {addRouteDeclarationToModule} from '@schematics/angular/utility/ast-utils';
// @ts-ignore
import ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
import {InsertChange} from '@schematics/angular/utility/change';
import {ModuleOptions} from '@schematics/angular/utility/find-module';

const PACKAGE_JSON = 'package.json';
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

export function addRouteToScullyConfig(scullyConfigJs: string, data: Data) {
  const baseRoute = strings.dasherize(data.route);
  const completeRoute = normalize(`/${baseRoute}/:${strings.camelize(data.slug)}`);
  const contentDirectoy = data.sourceDir ? strings.dasherize(data.sourceDir) : strings.dasherize(data.name);
  const addRoute = `\n    '${completeRoute}': {
      type: '${data.type}',
      ${strings.camelize(data.slug)}: {
        folder: ".${normalize('/' + contentDirectoy)}"
      }
    },`;
  let output;
  if (+scullyConfigJs.search(/routes: \{/g) > 0) {
    const position = +scullyConfigJs.search(/routes: \{/g) + 'routes: {'.length;
    output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
  } else if (+scullyConfigJs.search(/routes:\{/g) > 0) {
    const position = +scullyConfigJs.search(/routes:\{/g) + 'routes:{'.length;
    output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
  } else {
    return scullyConfigJs;
  }
  return output;
}

export function applyWithOverwrite(source: Source, rules: Rule[]): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rule = mergeWith(
      apply(source, [
        ...rules,
        forEach(fileEntry => {
          if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
          }
          return fileEntry;
        }),
      ])
    );
    return rule(tree, context);
  };
}

export function getPrefix(host: Tree, angularjson: string, project: string) {
  const angularJSON = JSON.parse(angularjson);
  return angularJSON.projects[getProject(host, project)].prefix;
}

export function addRouteToModule(host: Tree, options: any) {
  const srcFolder = getSrc(host, getProject(host, options.project));
  let path = `${srcFolder}/app/app-routing.module.ts`;
  if (!host.exists(path)) {
    path = `${srcFolder}/app/app.module.ts`;
  }
  const text = host.read(path);
  if (!text) {
    throw new Error(`Couldn't find the module nor its routing module.`);
  }

  const sourceText = text.toString();
  const addDeclaration = addRouteDeclarationToModule(
    ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
    path,
    buildRoute(options, 'app.module', options.route)
  ) as InsertChange;

  const recorder = host.beginUpdate(path);
  recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
  host.commitUpdate(recorder);
}

function buildRoute(options: ModuleOptions, modulePath: string, route?: string) {
  const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const moduleName = `${strings.classify(options.name)}Module`;
  const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;
  const basePath = route ? strings.dasherize(route) : strings.dasherize(options.name);
  return `{ path: '${basePath}', loadChildren: ${loadChildren} }`;
}

function buildRelativeModulePath(options: ModuleOptions, modulePath: string): string {
  const dasherized = strings.dasherize(options.name);
  const importModulePath = normalize(`/${dasherized}/${dasherized}.module`);

  return buildRelativePath(modulePath, importModulePath);
}

export function getSrc(host: Tree, project: string) {
  const angularConfig = JSON.parse(host.read('./angular.json').toString());
  const defaultProject = getProject(host, project);
  return angularConfig.projects[defaultProject].sourceRoot;
}

export function getRoot(host: Tree, project: string) {
  const angularConfig = JSON.parse(host.read('./angular.json').toString());
  return angularConfig.projects[getProject(host, project)].root;
}

class FileNotFoundException extends Error {
  constructor(fileName: string) {
    const message = `File ${fileName} not found!`;
    super(message);
  }
}

export const getJsonFile = <T>(tree: Tree, path: string): T => {
  const file = tree.get(path);
  if (!file) {
    throw new FileNotFoundException(path);
  }

  try {
    const content = JSON.parse(file.content.toString());

    return content as T;
  } catch (e) {
    throw new SchematicsException(`File ${path} could not be parsed!`);
  }
};

export const getFileContents = (tree: Tree, filePath: string): string => {
  const buffer = tree.read(filePath) || '';

  return buffer.toString();
};

export const getPackageJson = (tree: Tree, workingDirectory: string = ''): PackageJson => {
  const url = join(workingDirectory, PACKAGE_JSON);

  return getJsonFile(tree, url);
};

export const overwritePackageJson = (
  tree: Tree,
  content: PackageJson,
  workingDirectory: string = ''
): Tree => {
  const url = join(workingDirectory, PACKAGE_JSON);

  tree.overwrite(url, JSON.stringify(content, null, 2));
  return tree;
};

export function getSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find ${path}.`);
  }
  const content = buffer.toString();
  const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);

  return source;
}

export const yamlToJson = (filePath: string) => {
  let metaDataContents = '';
  try {
    metaDataContents = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    throw new SchematicsException(`File ${filePath} not found`);
  }
  try {
    return yaml.safeLoad(metaDataContents);
  } catch (e) {
    throw new SchematicsException(`${filePath} contains invalid yaml`);
  }
};

export const jsonToJaml = (metaData: {}) => yaml.safeDump(metaData);

export const toAscii = (src: string) => {
  if (!src) {
    return null;
  }
  // tslint:disable-next-line:one-variable-per-declaration
  let ch,
    str,
    i,
    result = '';
  str = JSON.stringify(src);
  for (i = 1; i < str.length - 1; i++) {
    ch = str.charCodeAt(i);
    // 0-9 A-Z a-z
    if ((ch >= 48 && ch <= 57) || (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
      result += str.charAt(i);
    }
  }
  return result;
};

export const getProject = (host: Tree, project: string) => {
  if (project === 'defaultProject') {
    const angularJson = JSON.parse(host.read('/angular.json').toString());
    return angularJson.defaultProject;
  }
  return project;
};

export const getScullyConfig = (host: Tree, project: string) => {
  const scullyConfigFile = `scully.${getProject(host, project)}.config.js`;
  return scullyConfigFile;
};

export const checkProjectExist = (host: Tree, projectName: string) => {
  const angularJson = JSON.parse(host.read('/angular.json').toString());
  if (angularJson.projects[projectName] !== undefined) {
    return true;
  }
  return false;
};

export const removeWrongCharacters = (str: string) => {
  return str.replace(/\{|\}|\(|\)|\;/g, '');
};
