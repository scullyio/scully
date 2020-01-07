import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';

const collectionPath = path.join(__dirname, '../collection.json');
const META_DATA_TEMPLATE_PATH = 'assets/meta-data-template.yml';

describe('add-post', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    name: 'Foo barBaz',
  };
  let appTree: UnitTestTree;
  const expectedFileName = '/blog/foo-bar-baz.md';

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('post', defaultOptions, appTree).toPromise();
    });

    it('should create a new dasherized post', () => {
      expect(appTree.files).toContain(expectedFileName);
      const mdFileContent = getFileContent(appTree, expectedFileName);
      expect(mdFileContent).toMatch(/title: Foo barBaz/g);
      expect(mdFileContent).toMatch(/description: blog description/g);
      expect(mdFileContent).toMatch(/publish: false/g);
    });
  });

  describe('when using `metaDataFile` option', () => {
    beforeEach(async () => {
      appTree = await schematicRunner
        .runSchematicAsync('post', {...defaultOptions, metaDataFile: META_DATA_TEMPLATE_PATH}, appTree)
        .toPromise();
    });

    it('should add the meta data but keep title from options', () => {
      expect(appTree.files).toContain(expectedFileName);
      const mdFileContent = getFileContent(appTree, expectedFileName);
      expect(mdFileContent).toMatch(/title: Foo barBaz/g);
      expect(mdFileContent).toMatch(/thumbnail: assets\/images\/default\.jpg/g);
      expect(mdFileContent).toMatch(/author: John Doe/g);
      expect(mdFileContent).toMatch(/mail: John.Doe@example.com/g);
      expect(mdFileContent).toMatch(/keywords:\s+-\ angular\s+-\ scully/s);
      expect(mdFileContent).toMatch(/language: en/g);
    });
  });
});
