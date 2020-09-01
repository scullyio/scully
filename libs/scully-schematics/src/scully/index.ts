import { Rule, SchematicContext, Tree, SchematicsException, chain } from '@angular-devkit/schematics';
import { getSrc, getPackageJson, overwritePackageJson, getProject, checkProjectExist } from '../utils/utils';
import { Schema } from '../ng-add/schema';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';

let angularJSON = 'angular.json';

export default (options: any): Rule => {
  return chain([verifyAngularWorkspace(), modifyPackageJson(options), createScullyConfig(options)]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  let workspaceConfigBuffer;
  workspaceConfigBuffer = tree.read(angularJSON);
  if (!workspaceConfigBuffer) {
    angularJSON = 'workspace.json';
    workspaceConfigBuffer = tree.read(angularJSON);
  }
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an angular CLI workspace');
  }
};

const modifyPackageJson = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  let defaultProjectName, projectName;
  defaultProjectName = getProject(tree, 'defaultProject', angularJSON);
  projectName = getProject(tree, options.project, angularJSON);

  const params = projectName === defaultProjectName ? '' : ` --project ${projectName}`;
  const jsonContent = getPackageJson(tree);
  jsonContent.scripts.scully = 'scully' + params;
  jsonContent.scripts['scully:serve'] = 'scully serve' + params;
  overwritePackageJson(tree, jsonContent);
  context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = `scully.${getProject(tree, options.project, angularJSON)}.config.ts`;
  if (!checkProjectExist(tree, getProject(tree, options.project, angularJSON), angularJSON)) {
    throw new SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const srcFolder = getSrc(tree, options.project, angularJSON);
    const projectName = getProject(tree, options.project, angularJSON);
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
    return addPluginTS(projectName);
  }
};

const addPluginTS = (project: string) => (tree: Tree, context: SchematicContext) => {
  const nextRules: Rule[] = [];
  nextRules.push((host: Tree, ctx: SchematicContext) => {
    ctx.addTask(new RunSchematicTask('pluginTS', project), []);
  });
  return chain(nextRules);
};
