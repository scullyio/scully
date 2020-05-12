import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {join} from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema as BlogModuleSchema} from './schema';
import {Schema as MarkdownSchema} from '../create-markdown/schema';
import {TaskConfiguration} from '@angular-devkit/schematics';

const schematicCollectionPath = join(__dirname, '../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');

const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);

const defaultOptions: BlogModuleSchema = Object.freeze({});

describe('add-blog schematic', () => {
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = {...defaultOptions};
      appTree = await customRunner.runSchematicAsync('blog', options, appTree).toPromise();
    });

    it('should have run the markdown schematic with default options', () => {
      expect(
        customRunner.tasks.some((task: TaskConfiguration<{name: string; options: MarkdownSchema}>) => {
          return (
            task.name === 'run-schematic' &&
            task.options.name === 'create-markdown' &&
            task.options.options.name === 'blog' &&
            task.options.options.sourceDir === 'blog' &&
            task.options.options.route === 'blog' &&
            task.options.options.slug === 'slug'
          );
        })
      ).toBe(true);
    });
  });

  describe('when setting an explicit `routingScope`', () => {
    beforeEach(async () => {
      const options = {...defaultOptions, routingScope: 'Root'};
      appTree = await customRunner.runSchematicAsync('blog', options, appTree).toPromise();
    });

    it('should have run the markdown schematic with defaults and `routingScope`', () => {
      expect(
        customRunner.tasks.some(
          (task: TaskConfiguration<{name: string; options: MarkdownSchema}>) =>
            task.name === 'run-schematic' &&
            task.options.name === 'create-markdown' &&
            task.options.options.name === 'blog' &&
            task.options.options.sourceDir === 'blog' &&
            task.options.options.route === 'blog' &&
            task.options.options.slug === 'slug' &&
            task.options.options.routingScope === 'Root'
        )
      ).toBe(true);
    });
  });
});
