import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('create-markdown', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    name: 'blog',
    slug: 'id',
  };
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('md', defaultOptions, appTree).toPromise();
    });

    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'post' &&
            (task.options as any).options.name === `${dayString}-blog` &&
            (task.options as any).options.target === 'blog'
        )
      ).toBe(true);
    });
  });
});
