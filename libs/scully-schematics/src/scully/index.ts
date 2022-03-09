import { Rule, SchematicContext, Tree, SchematicsException, chain } from '@angular-devkit/schematics';
import { getSrc, getPackageJson, overwritePackageJson, getProject, checkProjectExist } from '../utils/utils';
import { Schema } from '../ng-add/schema';
import { RunSchematicTask } from '@angular-devkit/schematics/tasks';

let angularJSON = 'angular.json';

export default (options: any): Rule => {
  return chain([verifyAngularWorkspace(), modifyPackageJson(options), createScullyConfig(options)]);
};

const verifyAngularWorkspace = () => (tree: Tree, context: SchematicContext) => {
  angularJSON = 'angular.json';
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
  jsonContent.scripts.scully = 'npx scully --' + params;
  jsonContent.scripts['scully:serve'] = 'npx scully serve --' + params;
  overwritePackageJson(tree, jsonContent);
  // context.logger.info('✅️ Update package.json');
};

const createScullyConfig = (options: Schema) => (tree: Tree, context: SchematicContext) => {
  const scullyConfigFile = `scully.${getProject(tree, options.project, angularJSON)}.config.ts`;
  if (!checkProjectExist(tree, getProject(tree, options.project, angularJSON), angularJSON)) {
    throw new SchematicsException(`There is no ${options.project} project in angular.json`);
  }
  if (!tree.exists(scullyConfigFile)) {
    const renderer =
      options.renderer !== 'sps'
        ? options.renderer === 'puppeteer'
          ? "import '@scullyio/scully-plugin-puppeteer'"
          : "import '@scullyio/scully-plugin-playwright'"
        : '';
    const srcFolder = getSrc(tree, options.project, angularJSON);
    const projectName = getProject(tree, options.project, angularJSON);
    tree.create(
      scullyConfigFile,
      `import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
${renderer}

export const config: ScullyConfig = {
  projectRoot: "./${srcFolder}",
  projectName: "${projectName}",
  ${
    options.renderer === 'sps'
      ? "spsModulePath: 'YOUR OWN MODULE PATH HERE'"
      : '// add spsModulePath when using de Scully Platform Server'
  },
  outDir: './dist/static',
  routes: {
  }
};`
    );
    return addPluginTS(projectName, options);
  }
};

const addPluginTS = (project: string, options: any) => (tree: Tree, context: SchematicContext) => {
  const nextRules: Rule[] = [];
  if (options.pluginTS) {
    nextRules.push((host: Tree, ctx: SchematicContext) => {
      ctx.addTask(new RunSchematicTask('plugin-ts', options), []);
    });
  }
  return chain(nextRules);
};
