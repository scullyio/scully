import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';
import {scullyVersion, scullyComponentVersion} from './version-names';

const collectionPath = path.join(__dirname, '../collection.json');
const PACKAGE_JSON_PATH = '/package.json';

describe('scully', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    blog: true,
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

    it('should add the HttpClientModule', () => {
      const appModuleContent = getFileContent(appTree, 'src/app/app.module.ts');
      expect(appModuleContent).toMatch(/import.*HttpClientModule.*from.*\@angular\/common\/http/g);
      expect(appModuleContent).toMatch(/imports.*:.*\[.*HttpClientModule\s+\]/s);
    });

    it('should add the polyfill', () => {
      const appModuleContent = getFileContent(appTree, 'src/polyfills.ts');
      expect(appModuleContent).toMatch(/import.*zone\.js\/dist\/task-tracking/g);
    });

    it('should inject the idle service into AppComponent', () => {
      const appModuleContent = getFileContent(appTree, 'src/app/app.component.ts');
      expect(appModuleContent).toMatch(/constructor*.*.private idle: IdleMonitorService/s);
    });
  });
});
