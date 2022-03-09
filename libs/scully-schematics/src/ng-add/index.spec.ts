import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { getFileContent } from '@schematics/angular/utility/test';
import { join, normalize } from 'path';

import { getPackageJson } from '../utils/utils';
import { setupProject } from '../utils/test-utils';
import { Schema as ModelSchema } from './schema';

const schematicCollectionPath = join(__dirname, '../../../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');
const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);

const defaultOptions: ModelSchema = Object.freeze({
  blog: true,
  project: 'defaultProject',
  renderer: 'sps',
  pluginTS: true,
  local: true
});

const PACKAGE_JSON_PATH = '/package.json';

describe('ng-add schematic', () => {
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions };
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
    });

    it('should add dependencies', () => {
      const packageJson = getPackageJson(appTree);
      const { dependencies } = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(dependencies['@scullyio/ng-lib']).toBeDefined();
      expect(dependencies['@scullyio/scully']).toBeDefined();
    });

    it('should add the polyfill', () => {
      const appModuleContent = getFileContent(appTree, 'src/polyfills.ts');
      expect(appModuleContent).toMatch(/^\s*import\s+'zone\.js\/dist\/task-tracking'\s*;/m);
    });

    it('should run NodePackageInstallTask', () => {
      expect(customRunner.tasks.some(task => task.name === 'node-package')).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(customRunner.tasks.some(task => task.name === 'run-schematic' && (task.options as any).name === 'blog')).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(customRunner.tasks.some(task => task.name === 'run-schematic' && (task.options as any).name === 'run')).toBe(true);
    });
  });

  describe('when not setting `blog` option to true', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions, blog: false };
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
    });

    it('should not have run the blog schematic', () => {
      expect(customRunner.tasks.some(task => (task.options as any).name === 'blog')).toBe(false);
    });
  });

  describe('when AppModule not exists', () => {
    it('should not have run the blog schematic', async () => {
      const options = { ...defaultOptions };
      appTree.delete('/src/app/app.module.ts');
      let error = '';
      try {
        await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      } catch (e) {
        error = e.toString();
      }
      expect(error).toMatch(/\W?File\s+\.\/src\/app\/app\.module\.ts\s+does\s+not\s+exist\.\W?/);
    });
  });

  describe('gitignore entries', () => {
    const gitIgnorePath = normalize('.gitignore');
    it('should do nothing if the file does not exist', async () => {
      if (appTree.exists(gitIgnorePath)) {
        appTree.delete(gitIgnorePath);
      }
      const options = { ...defaultOptions };
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      expect(appTree.exists(gitIgnorePath)).toEqual(false);
    });

    it('should do nothing if the file does not exist', async () => {
      const options = { ...defaultOptions };
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      const contents = appTree.readContent(gitIgnorePath);
      expect(contents.indexOf('scully.log')).toBeGreaterThan(0);
      expect(contents.indexOf('scullyStats.json')).toBeGreaterThan(0);
      expect(contents.indexOf('.scully')).toBeGreaterThan(0);
      expect(contents.indexOf('/scully/**/*.js')).toBeGreaterThan(0);
      expect(contents.indexOf('/scully/**/*.js.map')).toBeGreaterThan(0);
      expect(contents.indexOf('/scully/**/*.d.ts')).toBeGreaterThan(0);
    });
  });
});
