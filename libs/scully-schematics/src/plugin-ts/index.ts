import { Rule, Tree, chain, SchematicContext } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { addTypescriptFolder, getFileContents, getScullyConfig } from '../utils/utils';

export default (options: Schema): Rule => {
  return chain([addTsConfig(options), addPlugin(options), updateScullyConfig(options)]);
};

const addTsConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  return tree.create(
    'scully/tsconfig.json',
    `
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./scully/",
    "declaration": true,
    "downlevelIteration": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "importHelpers": false,
    "emitDeclarationOnly": false,
    "lib": ["ES2019", "dom"],
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es2018",
    "types": ["node"],
    "typeRoots": [],
    "allowSyntheticDefaultImports": true
  },
  "files": ["**/*.ts", "*.ts"],
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
  const newScullyJs = addTypescriptFolder(scullyJs, `pluginDir: './scully/plugins/'`);

  tree.overwrite(scullyConfigFile, newScullyJs);
  context.logger.info(`✅️ Update ${scullyConfigFile}`);
};
