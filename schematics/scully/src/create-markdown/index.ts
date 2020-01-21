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
  getFileContents, toAscii,
} from '../utils/utils';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

const SCULLY_CONF_FILE = '/scully.config.js';
const ANGULAR_CONF_FILE = './angular.json';

export default (options: Schema): Rule => {
  options.name = toAscii(options.name) || 'blog';
  options.slug = toAscii(options.slug) || 'id';
  options.sourceDir = options.sourceDir || options.name;
  return chain([
    addPost(options, options.sourceDir),
    updateScullyConfig(options.sourceDir, options),
    addModule(options),
  ]);
};

const addPost = (options: Schema, target: string) => (tree: Tree, context: SchematicContext) => {
  const nameDasherized = strings.dasherize(options.name);
  const targetDirName = strings.dasherize(target);
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

const updateScullyConfig = (target: string, options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyJs = getFileContents(tree, SCULLY_CONF_FILE);
  if (!scullyJs) {
    context.logger.error(`No scully configuration file found ${SCULLY_CONF_FILE}`);
  }
  const newScullyJs = addRouteToScullyConfig(scullyJs, {
    name: options.name,
    slug: options.slug,
    type: 'contentFolder',
    sourceDir: target,
    route: options.route,
  });

  tree.overwrite(SCULLY_CONF_FILE, newScullyJs);
  context.logger.info(`✅️ Update ${SCULLY_CONF_FILE}`);
};

const addModule = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const sourceDir = getSrc(tree);
  const pathName = strings.dasherize(`${sourceDir}/app/${options.name}`);
  let prefix = 'app';
  if (tree.exists(ANGULAR_CONF_FILE)) {
    prefix = getPrefix(getFileContents(tree, ANGULAR_CONF_FILE));
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
