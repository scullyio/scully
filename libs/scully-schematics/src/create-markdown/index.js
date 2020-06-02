'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const core_1 = require('@angular-devkit/core');
const utils_1 = require('../utils/utils');
const tasks_1 = require('@angular-devkit/schematics/tasks');
const ANGULAR_CONF_FILE = './angular.json';
exports.default = options => {
  options.name = utils_1.toAscii(options.name) || 'blog';
  options.slug = utils_1.toAscii(options.slug) || 'id';
  options.route = utils_1.toAscii(options.route) || options.name;
  options.sourceDir = options.sourceDir || options.name;
  return schematics_1.chain([addPost(options), updateScullyConfig(options), addModule(options)]);
};
const addPost = options => (tree, context) => {
  const nameDasherized = core_1.strings.dasherize(options.name);
  const targetDirName = core_1.strings.dasherize(options.sourceDir);
  const date = new Date();
  // format yyyy-mm-dd
  const fullDay = date.toISOString().substring(0, 10);
  const baseFileName = `${fullDay}-${nameDasherized}`;
  if (!tree.exists(`${targetDirName}/${baseFileName}.md`)) {
    const postOptions = {
      name: baseFileName,
      target: targetDirName,
    };
    context.addTask(new tasks_1.RunSchematicTask('post', postOptions), []);
  }
};
const updateScullyConfig = options => (tree, context) => {
  const scullyConfigFile = utils_1.getScullyConfig(tree, options.project);
  const scullyJs = utils_1.getFileContents(tree, scullyConfigFile);
  if (!scullyJs) {
    context.logger.error(`No scully configuration file found ${scullyConfigFile}`);
  }
  const newScullyJs = utils_1.addRouteToScullyConfig(scullyJs, {
    name: options.name,
    slug: options.slug,
    type: 'contentFolder',
    sourceDir: options.sourceDir,
    route: options.route,
  });
  tree.overwrite(scullyConfigFile, newScullyJs);
  context.logger.info(`✅️ Update ${scullyConfigFile}`);
};
const addModule = options => (tree, context) => {
  const sourceDir = utils_1.getSrc(tree, options.project);
  const pathName = core_1.strings.dasherize(`${sourceDir}/app/${options.name}`);
  let prefix = 'app';
  let styleFormat = 'css';
  if (tree.exists(ANGULAR_CONF_FILE)) {
    prefix = utils_1.getPrefix(tree, utils_1.getFileContents(tree, ANGULAR_CONF_FILE), options.project);
    utils_1.addRouteToModule(tree, options);
    styleFormat = utils_1.getStyle(tree, options.project, ANGULAR_CONF_FILE) || styleFormat;
  }
  return utils_1.applyWithOverwrite(schematics_1.url('../files/markdown-module'), [
    schematics_1.applyTemplates({
      classify: core_1.strings.classify,
      dasherize: core_1.strings.dasherize,
      camelize: core_1.strings.camelize,
      name: options.name,
      slug: options.slug,
      prefix,
      style: styleFormat,
    }),
    schematics_1.move(core_1.normalize(pathName)),
  ]);
};
//# sourceMappingURL=index.js.map
