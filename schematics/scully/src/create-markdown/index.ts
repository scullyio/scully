import {Rule, Tree, url, applyTemplates, move, chain, SchematicContext} from '@angular-devkit/schematics';
import {strings, normalize} from '@angular-devkit/core';
import {Schema} from './schema';
import {Schema as PostSchema} from '../add-post/schema';
import {
  addRouteToModule,
  addRouteToScullyConfig,
  applyWithOverwrite,
  getPrefix,
  getSrc,
  getFileContents,
  toAscii,
  getScullyConfig,
} from '../utils/utils';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

const ANGULAR_CONF_FILE = './angular.json';

export default (options: Schema): Rule => {
  options.name = toAscii(options.name) || 'blog';
  options.slug = toAscii(options.slug) || 'id';
  options.route = toAscii(options.route) || options.name;
  options.sourceDir = options.sourceDir || options.name;
  return chain([addPost(options), updateScullyConfig(options), addModule(options)]);
};

const addPost = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const nameDasherized = strings.dasherize(options.name);
  const targetDirName = strings.dasherize(options.sourceDir);
  const date = new Date();
  // format yyyy-mm-dd
  const fullDay = date.toISOString().substring(0, 10);
  const baseFileName = `${fullDay}-${nameDasherized}`;
  if (!tree.exists(`${targetDirName}/${baseFileName}.md`)) {
    const postOptions: PostSchema = {
      name: baseFileName,
      target: targetDirName,
    };
    context.addTask(new RunSchematicTask('post', postOptions), []);
  }
};

const updateScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = getScullyConfig(tree, options.project);
  const scullyJs = getFileContents(tree, scullyConfigFile);
  if (!scullyJs) {
    context.logger.error(`No scully configuration file found ${scullyConfigFile}`);
  }
  const newScullyJs = addRouteToScullyConfig(scullyJs, {
    name: options.name,
    slug: options.slug,
    type: 'contentFolder',
    sourceDir: options.sourceDir,
    route: options.route,
  });

  tree.overwrite(scullyConfigFile, newScullyJs);
  context.logger.info(`✅️ Update ${scullyConfigFile}`);
};

const addModule = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const sourceDir = getSrc(tree, options.project);
  const pathName = strings.dasherize(`${sourceDir}/app/${options.name}`);
  let prefix = 'app';
  if (tree.exists(ANGULAR_CONF_FILE)) {
    prefix = getPrefix(tree, getFileContents(tree, ANGULAR_CONF_FILE), options.project);
    addRouteToModule(tree, options);
  }

  return applyWithOverwrite(url('../files/markdown-module'), [
    applyTemplates({
      classify: strings.classify,
      dasherize: strings.dasherize,
      camelize: strings.camelize,
      name: options.name,
      slug: options.slug,
      prefix,
    }),
    move(normalize(pathName)),
  ]);
};
