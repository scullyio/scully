import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';

const collectionPath = path.join(__dirname, '../collection.json');
const PACKAGE_JSON_PATH = '/package.json';

describe('ng-add schematic', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    blog: true,
    project: 'defaultProject',
  };
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('ng-add', defaultOptions, appTree).toPromise();
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
      expect(schematicRunner.tasks.some(task => task.name === 'node-package')).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(
        schematicRunner.tasks.some(
          task => task.name === 'run-schematic' && (task.options as any).name === 'blog'
        )
      ).toBe(true);
    });

    it('should have run the blog schematic', () => {
      expect(
        schematicRunner.tasks.some(
          task => task.name === 'run-schematic' && (task.options as any).name === 'run'
        )
      ).toBe(true);
    });
  });

  describe('when not setting `blog` option to true', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('ng-add', {blog: false}, appTree).toPromise();
    });

    it('should not have run the blog schematic', () => {
      expect(schematicRunner.tasks.some(task => (task.options as any).name === 'blog')).toBe(false);
    });
  });

  describe('when AppModule not exists', () => {
    it('should not have run the blog schematic', async () => {
      appTree.delete('/src/app/app.module.ts');
      let error = '';
      try {
        await schematicRunner.runSchematicAsync('ng-add', defaultOptions, appTree).toPromise();
      } catch (e) {
        error = e;
      }
      expect(error).toMatch(/File \.\/src\/app\/app\.module\.ts does not exist./g);
    });
  });
});
