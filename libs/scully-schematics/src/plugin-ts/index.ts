import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getFileContents, getScullyConfig } from '../utils/utils';
import { Schema } from './schema';

export default (options: Schema): Rule => {
  return chain([addTsConfig(options), addPlugin(options), updateScullyConfig(options)]);
};

const addTsConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  return tree.create(
    'scully/tsconfig.base.json',
    `
{
  "compileOnSave": false,
  "compilerOptions": {
    "esModuleInterop": true,
    "importHelpers": false,
    "lib": ["ES2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2018",
    "types": ["node"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "typeRoots": ["../node_modules/@types"],
    "allowSyntheticDefaultImports": true
  },
  "exclude": ["./**/*spec.ts"]
}
`
  );
};

const addPlugin = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  return tree.create(
    'scully/plugins/plugin.ts',
    `
import { registerPlugin, getPluginConfig } from '@scullyio/scully';

export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('render', myPlugin, myFunctionPlugin, validator);
`
  );
};

const updateScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = getScullyConfig(tree, options.project);
  const scullyJs = getFileContents(tree, scullyConfigFile);
  if (!scullyJs) {
    context.logger.error(`No scully configuration file found ${scullyConfigFile}`);
  }
  // const newScullyJs = addTypescriptFolder(scullyJs, `pluginDir: './scully/plugins/'`);

  // tree.overwrite(scullyConfigFile, newScullyJs);
  // context.logger.info(`✅️ Update ${scullyConfigFile}`);
};
