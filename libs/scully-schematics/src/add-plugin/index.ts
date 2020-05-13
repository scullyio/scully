import {
  Rule,
  Tree,
  url,
  applyTemplates,
  move,
  chain,
  SchematicContext
} from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import { Schema } from './schema';
import { applyWithOverwrite, getRoot, getScullyConfig } from '../utils/utils';

export default (options: Schema): Rule => {
  return chain([addPlugin(options), registerPlugin(options)]);
};

const addPlugin = (options: Schema) => (
  tree: Tree,
  context: SchematicContext
) => {
  const sourceRoot = getRoot(tree, options.project);
  const pathName = strings.dasherize(
    `${sourceRoot}/scullyPlugins/${options.name}.js`
  );
  return applyWithOverwrite(url('../files/add-plugin'), [
    applyTemplates({
      classify: strings.classify,
      dasherize: strings.dasherize,
      camelize: strings.camelize,
      name: options.name
    }),
    move(normalize(pathName))
  ]);
};

const registerPlugin = (options: Schema) => (
  tree: Tree,
  context: SchematicContext
) => {
  const scullyConfigFile = getScullyConfig(tree, options.project);
  let scullyConfig = tree
    .read(`${getRoot(tree, options.project)}/${scullyConfigFile}`)
    .toString();
  scullyConfig = `require('./scullyPlugins/extra-plugin.js');\n${scullyConfig}`;
  tree.overwrite(
    `${getRoot(tree, options.project)}/${scullyConfigFile}`,
    scullyConfig
  );
};
