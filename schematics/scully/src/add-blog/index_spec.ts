import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('add-blog schematic', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {};
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('blog', defaultOptions, appTree).toPromise();
    });

    it('should have run the markdown schematic with default options', () => {
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'create-markdown' &&
            (task.options as any).options.name === 'blog' &&
            (task.options as any).options.sourceDir === 'blog' &&
            (task.options as any).options.route === 'blog' &&
            (task.options as any).options.slug === 'slug'
        )
      ).toBe(true);
    });
  });

  describe('when setting an explicit `routingScope`', () => {
    beforeEach(async () => {
      appTree = await schematicRunner
        .runSchematicAsync('blog', {...defaultOptions, routingScope: 'Root'}, appTree)
        .toPromise();
    });

    it('should have run the markdown schematic with defaults and `routingScope`', () => {
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'create-markdown' &&
            (task.options as any).options.name === 'blog' &&
            (task.options as any).options.sourceDir === 'blog' &&
            (task.options as any).options.route === 'blog' &&
            (task.options as any).options.slug === 'slug' &&
            (task.options as any).options.routingScope === 'Root'
        )
      ).toBe(true);
    });
  });
});
