'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const utils_1 = require('../utils/utils');
exports.default = options => {
  return schematics_1.chain([
    verifyAngularWorkspace(),
    modifyPackageJson(options),
    createScullyConfig(options),
  ]);
};
const verifyAngularWorkspace = () => (tree, context) => {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new schematics_1.SchematicsException('Not an angular CLI workspace');
  }
};
const modifyPackageJson = options => (tree, context) => {
  const defaultProjectName = utils_1.getProject(tree, 'defaultProject');
  const projectName = utils_1.getProject(tree, options.project);
  const params = projectName === defaultProjectName ? '' : ` --projectName=${projectName}`;
  const jsonContent = utils_1.getPackageJson(tree);
  jsonContent.scripts.scully = 'scully' + params;
  jsonContent.scripts['scully:serve'] = 'scully serve' + params;
  utils_1.overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};
const createScullyConfig = options => (tree, context) => {
  const scullyConfigFile = `scully.${utils_1.getProject(tree, options.project)}.config.ts`;
  if (!utils_1.checkProjectExist(tree, utils_1.getProject(tree, options.project))) {
    throw new schematics_1.SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = utils_1.getSrc(tree, options.project);
    const projectName = utils_1.getProject(tree, options.project);
    tree.create(
      scullyConfigFile,
      `import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./${srcFolder}",
  projectName: "${projectName}",
  outDir: './dist/static',
  routes: {
  }
};`
    );
    context.logger.info(`✅️ Created scully configuration file in ${scullyConfigFile}`);
  }
};
//# sourceMappingURL=index.js.map
