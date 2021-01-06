import { empty, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
const { exec } = require('child_process');

const _path = 'dist/libs/';

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // @ts-ignore
    return empty([modifyPackage(schema, tree)])(tree, context);
  };
}

function modifyPackage(schema, tree) {
  const forPublish = [];
  if (schema['scully']) {
    forPublish.push('scully');
  }
  if (schema['ng-lib']) {
    forPublish.push('ng-lib');
  }
  if (schema['scully-schematics']) {
    forPublish.push('ng-lib');
  }
  updatePackages(forPublish, schema.type);
  return tree;
}

function updatePackages(forPublish, type) {
  forPublish.forEach((_package) => {
    exec(
      `npm version ${type} --prefix ${_path}${_package} &&
                      npm version ${type} --prefix libs/${_package}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`Package ${_package} v:${stdout}`);
        exec(`npm publish --access publish --prefix ${_path}${_package}`, (_error, _stdout, _stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`Package ${_package} v:${stdout}`);
        });
      }
    );
  });
}
