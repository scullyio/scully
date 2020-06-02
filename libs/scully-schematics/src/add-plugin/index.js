'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const core_1 = require('@angular-devkit/core');
const utils_1 = require('../utils/utils');
exports.default = options => {
  return schematics_1.chain([addPlugin(options), registerPlugin(options)]);
};
const addPlugin = options => (tree, context) => {
  const sourceRoot = utils_1.getRoot(tree, options.project);
  const pathName = core_1.strings.dasherize(`${sourceRoot}/scullyPlugins/${options.name}.js`);
  return utils_1.applyWithOverwrite(schematics_1.url('../files/add-plugin'), [
    schematics_1.applyTemplates({
      classify: core_1.strings.classify,
      dasherize: core_1.strings.dasherize,
      camelize: core_1.strings.camelize,
      name: options.name,
    }),
    schematics_1.move(core_1.normalize(pathName)),
  ]);
};
const registerPlugin = options => (tree, context) => {
  const scullyConfigFile = utils_1.getScullyConfig(tree, options.project);
  let scullyConfig = tree.read(`${utils_1.getRoot(tree, options.project)}/${scullyConfigFile}`).toString();
  scullyConfig = `require('./scullyPlugins/extra-plugin.js');\n${scullyConfig}`;
  tree.overwrite(`${utils_1.getRoot(tree, options.project)}/${scullyConfigFile}`, scullyConfig);
};
//# sourceMappingURL=index.js.map
