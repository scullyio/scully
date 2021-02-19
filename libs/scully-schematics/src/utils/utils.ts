import { normalize, strings, parseJson, JsonParseMode } from '@angular-devkit/core';
import { apply, forEach, mergeWith, Rule, SchematicContext, Source, Tree, SchematicsException } from '@angular-devkit/schematics';

import { addRouteDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import {
  createSourceFile,
  ScriptTarget,
  SourceFile,
} from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { InsertChange } from '@schematics/angular/utility/change';
import { buildRelativePath, ModuleOptions } from '@schematics/angular/utility/find-module';
import { safeDump as yamlSafeDump, safeLoad as yamlSafeLoad } from 'js-yaml';

const DEFAULT_PACKAGE_JSON_PATH = '/package.json';
const DEFAULT_ANGULAR_CONF_PATH = '/angular.json';
const DEFAULT_NX_CONF_PATH = '/workspace.json';

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

export function addTypescriptFolder(scullyConfigJs: string, data: string) {
  const addRoute = `${data},\n`;
  let output;
  if (+scullyConfigJs.search(/outDir:/g) > 0) {
    const position = +scullyConfigJs.search(/outDir:/g);
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
        forEach((fileEntry) => {
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

export function getPrefix(host: Tree, project?: string, angularjsonPath?: string) {
  return getProjectProperty(host, ['prefix'], project, angularjsonPath);
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
    createSourceFile(path, sourceText, ScriptTarget.Latest, true),
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

export function getSrc(host: Tree, project?: string, angularjsonPath?: string) {
  return getProjectProperty(host, ['sourceRoot'], project, angularjsonPath);
}

export function getRoot(host: Tree, project?: string, angularjsonPath?: string) {
  return getProjectProperty(host, ['root'], project, angularjsonPath);
}

export function getStyle(host: Tree, project?: string, angularjsonPath?: string) {
  return getProjectProperty(host, ['schematics', '@schematics/angular:component', 'style'], project, angularjsonPath);
}

/* Don't check if the file exists
 */
function getProjectProperty(host: Tree, propertyPath: string[], project = '', angularjsonPath = DEFAULT_ANGULAR_CONF_PATH) {
  let angularConfig;
  try {
    angularConfig = parseJsonObject(host.read(angularjsonPath).toString());
  } catch (e) {
    angularConfig = parseJsonObject(host.read(DEFAULT_NX_CONF_PATH).toString());
  }
  project = project.trim();
  if (!project || project === 'defaultProject') {
    project = angularConfig.defaultProject;
  }
  if (project === undefined) {
    throw new Error(`The angular.json file don't have the property 'defaultProject', please run
'ng/nx add @scullyio/init' again with '--project=<<project_name>>' and add the name of your project`);
  }
  const projectConfig = angularConfig.projects[project];
  if(projectConfig === undefined) {
    throw new Error(`The angular.json file don't have the property sourceRoot.
Scully need the value for work.
Please add into your angular.json:
...
"projects": {
    "${project}": {
        "sourceRoot": "<<app_source_root>>",

...`);
  return propertyPath.slice(0).reduce((v, item, i, pp) => {
    if (v[item] === undefined) {
      pp.splice(1);
    }
    return v[item];
  }, projectConfig);
}

/** Parser of json content
 *  By default allow Json5 syntax, eg comments, trailing commas, ..., ie the same
 *  thing that the Angular json parser itself.
 *
 *  !!! You should always replace JSON.parse by this function !!!
 */
export function parseJsonObject(jsonContent: string, mode = JsonParseMode.Loose): { [prop: string]: any } {
  const result = parseJson(jsonContent, mode);
  if (result === null || typeof result !== 'object' || Array.isArray(result)) {
    throw new Error('Json content is not an object');
  }
  return result;
}

class FileNotFoundException extends Error {
  constructor(fileName: string) {
    const message = `File ${fileName} not found!`;
    super(message);
  }
}

/** Parser of json file
 *
 *  By default allow only strict json syntax
 *
 */
export const getJsonFile = <T>(tree: Tree, path: string, mode = JsonParseMode.Json): T => {
  const file = tree.get(path);
  if (!file) {
    throw new FileNotFoundException(path);
  }
  try {
    const content = parseJsonObject(file.content.toString(), mode);
    return content as T;
  } catch (e) {
    throw new SchematicsException(`File ${path} could not be parsed!`);
  }
};

export const getFileContents = (tree: Tree, filePath: string): string => {
  const buffer = tree.read(filePath) || '';
  return buffer.toString();
};

/** Parser of package.json file
 *
 *  Allow only strict json content
 *
 */
export const getPackageJson = (tree: Tree, packagejsonPath = DEFAULT_PACKAGE_JSON_PATH): PackageJson => {
  return getJsonFile(tree, packagejsonPath);
};

export const overwritePackageJson = (tree: Tree, content: PackageJson, packagejsonPath = DEFAULT_PACKAGE_JSON_PATH): Tree => {
  tree.overwrite(packagejsonPath, JSON.stringify(content, null, 2));
  return tree;
};

export function getSourceFile(host: Tree, path: string): SourceFile {
  const file = host.get(path);
  if (!file) {
    throw new FileNotFoundException(path);
  }
  const content = file.content.toString();
  const source = createSourceFile(path, content, ScriptTarget.Latest, true);
  return source;
}

export const yamlToJson = (host: Tree, filePath: string) => {
  const file = host.get(filePath);
  if (!file) {
    throw new FileNotFoundException(filePath);
  }
  const metaDataContents = file.content.toString();
  try {
    return yamlSafeLoad(metaDataContents);
  } catch (e) {
    throw new SchematicsException(`${filePath} contains invalid yaml`);
  }
};

export const jsonToJaml = (metaData: {}) => yamlSafeDump(metaData);

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

export const getProject = (host: Tree, project: string, angularjsonPath = DEFAULT_ANGULAR_CONF_PATH): string => {
  let angularJson;
  if (project === 'defaultProject') {
    try {
      angularJson = parseJsonObject(host.read(angularjsonPath).toString());
    } catch (e) {
      angularJson = parseJsonObject(host.read(DEFAULT_NX_CONF_PATH).toString());
    }
    return angularJson.defaultProject;
  }
  return project;
};

export const getScullyConfig = (host: Tree, project: string) => {
  const scullyConfigFile = `scully.${getProject(host, project)}.config.ts`;
  return scullyConfigFile;
};

export const checkProjectExist = (host: Tree, project = '', angularjsonPath = DEFAULT_ANGULAR_CONF_PATH) => {
  let angularJson;
  try {
    angularJson = parseJsonObject(host.read(angularjsonPath).toString());
  } catch (e) {
    angularJson = parseJsonObject(host.read(DEFAULT_NX_CONF_PATH).toString());
  }
  return angularJson.projects[project] !== undefined;
};

export const removeWrongCharacters = (str: string) => {
  return str.replace(/\{|\}|\(|\)|\;/g, '');
};
