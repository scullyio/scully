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

import {buildRelativePath} from '@schematics/angular/utility/find-module';
import {addRouteDeclarationToModule} from '@schematics/angular/utility/ast-utils';
import ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
import {InsertChange} from '@schematics/angular/utility/change';
import {ModuleOptions} from '@schematics/angular/utility/find-module';

const PACKAGE_JSON = 'package.json';
interface Data {
  name: string;
  type: string;
  slug: string;
  sourceDir?: string;
  route?: string;
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
  const baseRoute = data.route ? strings.dasherize(data.route) : strings.dasherize(data.name);
  const contentDirectoy = data.sourceDir ? strings.dasherize(data.sourceDir) : strings.dasherize(data.name);
  const addRoute = `\n    '${baseRoute}:${data.slug}': {
      type: '${data.type}',
      ${data.slug}: {
        folder: "./${contentDirectoy}"
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
    console.log(`Scully can't find the scully.config.js`);
    return scullyConfigJs;
  }
  return output;
}

/*
function needComa(fullText: string, matchs: string[]) {
  let matchers = '';
  matchs.forEach((m, i) => {
    let pipe = '|';
    if (i === 0 || i === match.length) {
      pipe = '';
    }
    matchers += `m${pipe}`;
  });
  const match = `\(([^()]*(${matchers})[^()]*)\)`;
  // @ts-ignore
  if (fullText.search(match).toString !== '-1') {
    return ',';
  }
  return '';
}
*/

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

export function getPrefix(angularjson: string) {
  const angularJSON = JSON.parse(angularjson);
  const prefixs = [];
  // tslint:disable-next-line:forin
  for (const project in angularJSON.projects) {
    prefixs.push({project, prefix: angularJSON.projects[project].prefix});
  }
  if (prefixs.length > 1) {
    // TODO: ask for prefix we need
    return prefixs[0].prefix;
  } else if (prefixs.length === 1) {
    return prefixs[0].prefix;
  }
}

export function addRouteToModule(host: Tree, options: any) {
  const srcFolder = getSrc(host);
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
  // tslint:disable-next-line:no-shadowed-variable
  const importModulePath = normalize(`/${options.name}/` + strings.dasherize(options.name) + '.module');

  return buildRelativePath(modulePath, importModulePath);
}

export function getSrc(host: Tree) {
  const angularConfig = JSON.parse(host.read('./angular.json').toString());
  // TODO: make scully handle other projects as just the default one.
  const defaultProject = angularConfig.defaultProject;
  return angularConfig.projects[defaultProject].sourceRoot;
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
