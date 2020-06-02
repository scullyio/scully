'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const core_1 = require('@angular-devkit/core');
const path_1 = require('path');
// @ts-ignore
const fs = require('fs');
// @ts-ignore
const yaml = require('js-yaml');
const find_module_1 = require('@schematics/angular/utility/find-module');
const ast_utils_1 = require('@schematics/angular/utility/ast-utils');
// @ts-ignore
const ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
const PACKAGE_JSON = 'package.json';
function addRouteToScullyConfig(scullyConfigJs, data) {
  const baseRoute = core_1.strings.dasherize(data.route);
  const completeRoute = core_1.normalize(`/${baseRoute}/:${core_1.strings.camelize(data.slug)}`);
  const contentDirectoy = data.sourceDir
    ? core_1.strings.dasherize(data.sourceDir)
    : core_1.strings.dasherize(data.name);
  const addRoute = `\n    '${completeRoute}': {
      type: '${data.type}',
      ${core_1.strings.camelize(data.slug)}: {
        folder: ".${core_1.normalize('/' + contentDirectoy)}"
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
exports.addRouteToScullyConfig = addRouteToScullyConfig;
function applyWithOverwrite(source, rules) {
  return (tree, context) => {
    const rule = schematics_1.mergeWith(
      schematics_1.apply(source, [
        ...rules,
        schematics_1.forEach(fileEntry => {
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
exports.applyWithOverwrite = applyWithOverwrite;
function getPrefix(host, angularjson, project) {
  const angularJSON = JSON.parse(angularjson);
  return angularJSON.projects[exports.getProject(host, project)].prefix;
}
exports.getPrefix = getPrefix;
function addRouteToModule(host, options) {
  const srcFolder = getSrc(host, exports.getProject(host, options.project));
  let path = `${srcFolder}/app/app-routing.module.ts`;
  if (!host.exists(path)) {
    path = `${srcFolder}/app/app.module.ts`;
  }
  const text = host.read(path);
  if (!text) {
    throw new Error(`Couldn't find the module nor its routing module.`);
  }
  const sourceText = text.toString();
  const addDeclaration = ast_utils_1.addRouteDeclarationToModule(
    ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
    path,
    buildRoute(options, 'app.module', options.route)
  );
  const recorder = host.beginUpdate(path);
  recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
  host.commitUpdate(recorder);
}
exports.addRouteToModule = addRouteToModule;
function buildRoute(options, modulePath, route) {
  const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const moduleName = `${core_1.strings.classify(options.name)}Module`;
  const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;
  const basePath = route ? core_1.strings.dasherize(route) : core_1.strings.dasherize(options.name);
  return `{ path: '${basePath}', loadChildren: ${loadChildren} }`;
}
function buildRelativeModulePath(options, modulePath) {
  const dasherized = core_1.strings.dasherize(options.name);
  const importModulePath = core_1.normalize(`/${dasherized}/${dasherized}.module`);
  return find_module_1.buildRelativePath(modulePath, importModulePath);
}
function getSrc(host, project) {
  const angularConfig = JSON.parse(host.read('./angular.json').toString());
  const defaultProject = exports.getProject(host, project);
  return angularConfig.projects[defaultProject].sourceRoot;
}
exports.getSrc = getSrc;
function getRoot(host, project) {
  const angularConfig = JSON.parse(host.read('./angular.json').toString());
  return angularConfig.projects[exports.getProject(host, project)].root;
}
exports.getRoot = getRoot;
function getStyle(host, project, angularjsonPath) {
  return getProjectProperty(
    host,
    ['schematics', '@schematics/angular:component', 'style'],
    project,
    angularjsonPath
  );
}
exports.getStyle = getStyle;
function getProjectProperty(host, propertyPath, project = '', angularjsonPath = './angular.json') {
  const angularConfig = JSON.parse(host.read(angularjsonPath).toString());
  project = project.trim();
  if (!project || project === 'defaultProject') {
    project = angularConfig.defaultProject;
  }
  const projectConfig = angularConfig.projects[project];
  return propertyPath.slice(0).reduce((v, item, i, pp) => {
    if (v[item] === undefined) {
      pp.splice(1);
    }
    return v[item];
  }, projectConfig);
}
class FileNotFoundException extends Error {
  constructor(fileName) {
    const message = `File ${fileName} not found!`;
    super(message);
  }
}
exports.getJsonFile = (tree, path) => {
  const file = tree.get(path);
  if (!file) {
    throw new FileNotFoundException(path);
  }
  try {
    const content = JSON.parse(file.content.toString());
    return content;
  } catch (e) {
    throw new schematics_1.SchematicsException(`File ${path} could not be parsed!`);
  }
};
exports.getFileContents = (tree, filePath) => {
  const buffer = tree.read(filePath) || '';
  return buffer.toString();
};
exports.getPackageJson = (tree, workingDirectory = '') => {
  const url = path_1.join(workingDirectory, PACKAGE_JSON);
  return exports.getJsonFile(tree, url);
};
exports.overwritePackageJson = (tree, content, workingDirectory = '') => {
  const url = path_1.join(workingDirectory, PACKAGE_JSON);
  tree.overwrite(url, JSON.stringify(content, null, 2));
  return tree;
};
function getSourceFile(host, path) {
  const buffer = host.read(path);
  if (!buffer) {
    throw new schematics_1.SchematicsException(`Could not find ${path}.`);
  }
  const content = buffer.toString();
  const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
  return source;
}
exports.getSourceFile = getSourceFile;
exports.yamlToJson = filePath => {
  let metaDataContents = '';
  try {
    metaDataContents = fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    throw new schematics_1.SchematicsException(`File ${filePath} not found`);
  }
  try {
    return yaml.safeLoad(metaDataContents);
  } catch (e) {
    throw new schematics_1.SchematicsException(`${filePath} contains invalid yaml`);
  }
};
exports.jsonToJaml = metaData => yaml.safeDump(metaData);
exports.toAscii = src => {
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
exports.getProject = (host, project) => {
  if (project === 'defaultProject') {
    const angularJson = JSON.parse(host.read('/angular.json').toString());
    return angularJson.defaultProject;
  }
  return project;
};
exports.getScullyConfig = (host, project) => {
  const scullyConfigFile = `scully.${exports.getProject(host, project)}.config.ts`;
  return scullyConfigFile;
};
exports.checkProjectExist = (host, projectName) => {
  const angularJson = JSON.parse(host.read('/angular.json').toString());
  if (angularJson.projects[projectName] !== undefined) {
    return true;
  }
  return false;
};
exports.removeWrongCharacters = str => {
  return str.replace(/\{|\}|\(|\)|\;/g, '');
};
//# sourceMappingURL=utils.js.map
