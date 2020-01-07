import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('add-post', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    name: 'Foo barBaz',
  };
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('post', defaultOptions, appTree).toPromise();
    });

    it('should create a new dasherized post', () => {
      expect(appTree.files).toContain('/blog/foo-bar-baz.md');
    });
  });
});
