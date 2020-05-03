import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {getFileContent} from '@schematics/angular/utility/test';
import {join} from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema as PostSchema} from './schema';

const schematicCollectionPath = join(__dirname, '../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');

const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);

const defaultOptions: PostSchema = Object.freeze({
  name: 'Foo barBaz',
});

const META_DATA_TEMPLATE_PATH = 'assets/meta-data-template.yml';

describe('add-post', () => {
  const defaultExpectedFileName = '/blog/foo-bar-baz.md';

  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = {...defaultOptions};
      appTree = await customRunner.runSchematicAsync('post', options, appTree).toPromise();
    });

    it('should create a new dasherized post', () => {
      expect(appTree.files).toContain(defaultExpectedFileName);
      const mdFileContent = getFileContent(appTree, defaultExpectedFileName);
      expect(mdFileContent).toMatch(/title: Foo barBaz/g);
      expect(mdFileContent).toMatch(/description: blog description/g);
      expect(mdFileContent).toMatch(/published: false/g);
    });
  });

  describe('when using a different `target`', () => {
    beforeEach(async () => {
      const options = {...defaultOptions, target: 'foo/bar'};
      appTree = await customRunner.runSchematicAsync('post', options, appTree).toPromise();
    });

    it('should create a new dasherized post inside the target dir', () => {
      const expectedFileName = '/foo/bar/foo-bar-baz.md';
      expect(appTree.files).toContain(expectedFileName);
      const mdFileContent = getFileContent(appTree, expectedFileName);
      expect(mdFileContent).toMatch(/title: Foo barBaz/g);
      expect(mdFileContent).toMatch(/description: blog description/g);
      expect(mdFileContent).toMatch(/published: false/g);
    });
  });

  describe('when using `metaDataFile` option', () => {
    beforeEach(async () => {
      const options = {...defaultOptions, metaDataFile: META_DATA_TEMPLATE_PATH};
      appTree = await customRunner.runSchematicAsync('post', options, appTree).toPromise();
    });

    it('should add the meta data but keep title from options', () => {
      expect(appTree.files).toContain(defaultExpectedFileName);
      const mdFileContent = getFileContent(appTree, defaultExpectedFileName);
      expect(mdFileContent).toMatch(/title: Foo barBaz/g);
      expect(mdFileContent).toMatch(/thumbnail: assets\/images\/default\.jpg/g);
      expect(mdFileContent).toMatch(/author: John Doe/g);
      expect(mdFileContent).toMatch(/mail: John.Doe@example.com/g);
      expect(mdFileContent).toMatch(/keywords:\s+-\ angular\s+-\ scully/s);
      expect(mdFileContent).toMatch(/language: en/g);
    });
  });

  describe('when target file already exists', () => {
    it('should not touch existing file', async () => {
      const options = {...defaultOptions};
      appTree.create(defaultExpectedFileName, 'foo');

      let error = '';

      try {
        appTree = await customRunner.runSchematicAsync('post', options, appTree).toPromise();
      } catch (e) {
        error = e;
      }
      expect(error).toMatch(/Error: foo-bar-baz exist/g);
      expect(getFileContent(appTree, defaultExpectedFileName)).toEqual('foo');
    });
  });
});
