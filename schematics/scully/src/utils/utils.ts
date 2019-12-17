import {apply, forEach, mergeWith, Rule, SchematicContext, Source, Tree} from '@angular-devkit/schematics';
import {normalize, Path, strings} from '@angular-devkit/core';

import { buildRelativePath, findModuleFromOptions } from '../utility/find-module';
import { addImportToModule, addRouteDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import ts = require('@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript');
import {InsertChange} from '@schematics/angular/utility/change';
import {ModuleOptions} from '@schematics/angular/utility/find-module';

interface Data {
  name: string;
  type: string;
  slug: string;
}

export function addRouteToScullyConfig(scullyConfigJs: string, data: Data) {
    const addRoute = `\n    '/${strings.dasherize(data.name)}/:${data.slug}': {
      type: '${data.type}',
      ${data.slug}: {
        folder: "./${strings.dasherize(data.name)}"
      }
    },`;
    let output;
    if (+scullyConfigJs.search(/routes: \{/g)  > 0) {
      const position = +scullyConfigJs.search(/routes: \{/g) + 'routes: {'.length;
      output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
    } else if (+scullyConfigJs.search(/routes:\{/g) > 0) {
      const position = +scullyConfigJs.search(/routes:\{/g) + 'routes:{'.length;
      output = [scullyConfigJs.slice(0, position), addRoute, scullyConfigJs.slice(position)].join('');
    } else {
      console.log('Scully can\'t found the scully.config.js');
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
        forEach((fileEntry) => {
          if (tree.exists(fileEntry.path)) {
            tree.overwrite(fileEntry.path, fileEntry.content);
            return null;
          }
          return fileEntry;
        }),

      ]),
    );

    return rule(tree, context);
  };
}


export function getPrefix(angularjson: string) {
  const angularJSON = JSON.parse(angularjson);
  const prefixs = [];
  // tslint:disable-next-line:forin
  for (const key1 in angularJSON.projects) {
    prefixs.push(angularJSON.projects[key1].prefix);
  }
  if (prefixs.length > 1) {
    // ask for prefix we need

  } else if (prefixs.length === 1)  {
    return prefixs[0];
  }
}

export function addRouteToModule(host: Tree, options: any, routingModulePath: Path | undefined) {

  const path = options.module;

  const text = host.read(path);
  if (!text) {
    throw new Error(`Couldn't find the module nor its routing module.`);
  }

  const sourceText = text.toString();
  const addDeclaration = addRouteDeclarationToModule(
    ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
    path,
    buildRoute(options, options.module),
  ) as InsertChange;

  const recorder = host.beginUpdate(path);
  recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
  host.commitUpdate(recorder);

}

function buildRoute(options: ModuleOptions, modulePath: string) {
  const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const moduleName = `${strings.classify(options.name)}Module`;
  const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;

  // @ts-ignore
  return `{ path: '${options.route}', loadChildren: ${loadChildren} }`;
}

function buildRelativeModulePath(options: ModuleOptions, modulePath: string): string {
  const importModulePath = normalize(
    `/${options.path}/`
    + (options.flat ? '' : strings.dasherize(options.name) + '/')
    + strings.dasherize(options.name)
    + '.module',
  );

  return buildRelativePath(modulePath, importModulePath);
}
