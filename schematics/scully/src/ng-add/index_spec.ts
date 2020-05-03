import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import {join} from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema as ModelSchema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';

const schematicCollectionPath = join(__dirname, '../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');

const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);

const defaultOptions: ModelSchema = Object.freeze({
  blog: true,
  project: 'defaultProject',
});

const PACKAGE_JSON_PATH = '/package.json';

describe('ng-add schematic', () => {
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = {...defaultOptions};
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
    });

    it('should add dependencies', () => {
      const packageJson = JSON.parse(getFileContent(appTree, PACKAGE_JSON_PATH));
      const {dependencies} = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(dependencies['@scullyio/ng-lib']).toEqual(scullyVersion);
      expect(dependencies['@scullyio/scully']).toEqual(scullyComponentVersion);
    });

    it('should add dependencies', () => {
      const packageJson = JSON.parse(getFileContent(appTree, PACKAGE_JSON_PATH));
      const {dependencies} = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(dependencies['@scullyio/ng-lib']).toEqual(scullyVersion);
      expect(dependencies['@scullyio/scully']).toEqual(scullyComponentVersion);
    });

    it('should add the polyfill', () => {
      const appModuleContent = getFileContent(appTree, 'src/polyfills.ts');
      expect(appModuleContent).toMatch(/import.*zone\.js\/dist\/task-tracking/g);
    });

    it('should run NodePackageInstallTask', () => {
      expect(customRunner.tasks.some(task => task.name === 'node-package')).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(
        customRunner.tasks.some(
          task => task.name === 'run-schematic' && (task.options as any).name === 'blog'
        )
      ).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(
        customRunner.tasks.some(task => task.name === 'run-schematic' && (task.options as any).name === 'run')
      ).toBe(true);
    });
  });

  describe('when not setting `blog` option to true', () => {
    beforeEach(async () => {
      const options = {...defaultOptions, blog: false};
      appTree = await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
    });

    it('should not have run the blog schematic', () => {
      expect(customRunner.tasks.some(task => (task.options as any).name === 'blog')).toBe(false);
    });
  });

  describe('when AppModule not exists', () => {
    it('should not have run the blog schematic', async () => {
      const options = {...defaultOptions};
      appTree.delete('/src/app/app.module.ts');
      let error = '';
      try {
        await customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      } catch (e) {
        error = e;
      }
      expect(error).toMatch(/File \.\/src\/app\/app\.module\.ts does not exist./g);
    });
  });
});
