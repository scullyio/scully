import { Rule, Tree, chain, SchematicContext } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addTypescriptFolder, getFileContents, getScullyConfig } from '../utils/utils';

export default (options: Schema): Rule => {
  return chain([addFolder(options), updateScullyConfig(options)]);
};

const addFolder = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  return tree.create('scully/plugins', '');
};

const updateScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = getScullyConfig(tree, options.project);
  const scullyJs = getFileContents(tree, scullyConfigFile);
  if (!scullyJs) {
    context.logger.error(`No scully configuration file found ${scullyConfigFile}`);
  }
  const newScullyJs = addTypescriptFolder(scullyJs, `pluginDir: './scully/plugins'`);

  tree.overwrite(scullyConfigFile, newScullyJs);
  context.logger.info(`✅️ Update ${scullyConfigFile}`);
};
