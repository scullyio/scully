import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { getFileContent } from '@schematics/angular/utility/test';
import { join } from 'path';

import { setupProject } from '../utils/test-utils';
import { getPackageJson } from '../utils/utils';

const schematicCollectionPath = join(__dirname, '../../../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');

const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);
const PACKAGE_JSON_PATH = '/package.json';
const PROJECT_NAME = 'foo';
const SCULLY_PATH = `/scully.${PROJECT_NAME}.config.js`;
const SCULLY_CONFIG_CONTENT = `
exports.config = {
  projectRoot: "./src",
  projectName: "${PROJECT_NAME}",
  outDir: './dist/static',
  routes: { }
};
`;

const ANGULAR_CONF_PATH = '/angular.json';

const defaultOptions = Object.freeze({
  project: 'defaultProject',
});

describe('scully schematic', () => {
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
  });

  describe('when not in a valid angular workspace', () => {
    it('should throw an exception', async () => {
      const options = { ...defaultOptions };
      appTree.delete('angular.json');
      let error = '';
      try {
        await customRunner.runSchematicAsync('scully', options, appTree).toPromise();
      } catch (e) {
        error = e;
      }
      expect(error).toMatch(/\W?Not an angular CLI workspace\W?/);
    });
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions };
      appTree = await customRunner.runSchematicAsync('scully', options, appTree).toPromise();
    });

    it('should create the scully config file when not exists', () => {
      expect(appTree.files).toContain(SCULLY_PATH);
      const scullyConfFile = getFileContent(appTree, SCULLY_PATH).replace('\n', ' ').replace(/\s+/g, ' ').trim();
      expect(scullyConfFile).toEqual(SCULLY_CONFIG_CONTENT.replace('\n', ' ').replace(/\s+/g, ' ').trim());
    });

    it(`should modify the 'package.json'`, () => {
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      const packageJson = getPackageJson(appTree);
      const { scripts } = packageJson;
      expect(scripts.scully).toEqual('scully');
      expect(scripts['scully:serve']).toEqual('scully serve');
    });
  });

  describe('when using the default options', () => {
    it(`should not override an existing scully config file`, async () => {
      const options = { ...defaultOptions };
      appTree.create(SCULLY_PATH, 'foo');
      appTree = await customRunner.runSchematicAsync('scully', options, appTree).toPromise();
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(getFileContent(appTree, SCULLY_PATH)).toEqual('foo');
    });
  });

  describe('when the angular.json contains any comment', () => {
    it('should deal with it', async () => {
      const options = { ...defaultOptions };
      const angularConfigContent = getFileContent(appTree, ANGULAR_CONF_PATH);
      const angularConfigLines = angularConfigContent.split('\n');
      angularConfigLines[3] += `     // dummy comment`;
      appTree.overwrite(ANGULAR_CONF_PATH, angularConfigLines.join('\n'));
      const NO_ERROR = '';
      let error = NO_ERROR;
      try {
        await customRunner.runSchematicAsync('scully', options, appTree).toPromise();
      } catch (e) {
        error = e;
      }
      expect(error).toEqual(NO_ERROR);
    });
  });
});
