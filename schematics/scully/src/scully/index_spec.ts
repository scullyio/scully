import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';

const collectionPath = path.join(__dirname, '../collection.json');
const PACKAGE_JSON_PATH = '/package.json';
const SCULLY_PATH = '/scully.config.js';

describe('scully schematic', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    project: 'foo',
  };
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('scully', defaultOptions, appTree).toPromise();
    });

    it('should create the scully config file when not exists', () => {
      expect(appTree.files).toContain(SCULLY_PATH);
    });

    it(`should modify the 'package.json'`, () => {
      const packageJson = JSON.parse(getFileContent(appTree, PACKAGE_JSON_PATH));
      const {scripts} = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(scripts.scully).toEqual('scully');
      expect(scripts['scully:serve']).toEqual('scully serve');
    });

    it(`should not override an existing cully config file'`, async () => {
      appTree = new UnitTestTree(new HostTree());
      appTree = await setupProject(appTree, schematicRunner, project);
      appTree.create(SCULLY_PATH, 'foo');
      appTree = await schematicRunner.runSchematicAsync('scully', defaultOptions, appTree).toPromise();
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(getFileContent(appTree, SCULLY_PATH)).toEqual('foo');
    });
  });
});
