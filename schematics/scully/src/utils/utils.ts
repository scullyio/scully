import {apply, forEach, mergeWith, Rule, SchematicContext, Source, Tree} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';

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
