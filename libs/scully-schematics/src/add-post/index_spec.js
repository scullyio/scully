'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', {value: true});
const testing_1 = require('@angular-devkit/schematics/testing');
const test_1 = require('@schematics/angular/utility/test');
const path_1 = require('path');
const test_utils_1 = require('../utils/test-utils');
const schematicCollectionPath = path_1.join(
  __dirname,
  '../../node_modules/@schematics/angular/collection.json'
);
const customCollectionPath = path_1.join(__dirname, '../collection.json');
const schematicRunner = new testing_1.SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new testing_1.SchematicTestRunner('scully-schematics', customCollectionPath);
const defaultOptions = Object.freeze({
  name: 'Foo barBaz',
});
const META_DATA_TEMPLATE_PATH = 'assets/meta-data-template.yml';
describe('add-post', () => {
  const defaultExpectedFileName = '/blog/foo-bar-baz.md';
  let appTree;
  beforeEach(() =>
    __awaiter(void 0, void 0, void 0, function*() {
      appTree = yield test_utils_1.setupProject(schematicRunner);
    })
  );
  describe('when using the default options', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree = yield customRunner.runSchematicAsync('post', options, appTree).toPromise();
      })
    );
    it('should create a new dasherized post', () => {
      expect(appTree.files).toContain(defaultExpectedFileName);
      const mdFileContent = test_1.getFileContent(appTree, defaultExpectedFileName);
      expect(mdFileContent).toMatch(/^\s*title\s*:\s*Foo barBaz/m);
      expect(mdFileContent).toMatch(/^\s*description\s*:\s*blog description/m);
      expect(mdFileContent).toMatch(/^\s*published\s*:\s*false/m);
    });
  });
  describe('when using a different `target`', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {target: 'foo/bar'});
        appTree = yield customRunner.runSchematicAsync('post', options, appTree).toPromise();
      })
    );
    it('should create a new dasherized post inside the target dir', () => {
      const expectedFileName = '/foo/bar/foo-bar-baz.md';
      expect(appTree.files).toContain(expectedFileName);
      const mdFileContent = test_1.getFileContent(appTree, expectedFileName);
      expect(mdFileContent).toMatch(/^\s*title\s*:\s*Foo barBaz/m);
      expect(mdFileContent).toMatch(/^\s*description\s*:\s*blog description/m);
      expect(mdFileContent).toMatch(/^\s*published\s*:\s*false/m);
    });
  });
  describe('when using `metaDataFile` option', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {
          metaDataFile: META_DATA_TEMPLATE_PATH,
        });
        appTree = yield customRunner.runSchematicAsync('post', options, appTree).toPromise();
      })
    );
    it('should add the meta data but keep title from options', () => {
      expect(appTree.files).toContain(defaultExpectedFileName);
      const mdFileContent = test_1.getFileContent(appTree, defaultExpectedFileName);
      expect(mdFileContent).toMatch(/^\s*title\s*:\s*Foo barBaz\s*$/m);
      expect(mdFileContent).toMatch(/^\s*thumbnail\s*:\s*assets\/images\/default\.jpg\s*$/m);
      expect(mdFileContent).toMatch(/^\s*author\s*:\s*John Doe\s*$/m);
      expect(mdFileContent).toMatch(/^\s*mail\s*:\s*John\.Doe@example\.com\s*$/m);
      expect(mdFileContent).toMatch(/^\s*keywords\s*:\s*$\s+-\s+angular\s*$\s+-\s+scully\s*$/m);
      expect(mdFileContent).toMatch(/^\s*language\s*:\s*en\s*$/m);
    });
  });
  describe('when target file already exists', () => {
    it('should not touch existing file', () =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree.create(defaultExpectedFileName, 'foo');
        let error = '';
        try {
          appTree = yield customRunner.runSchematicAsync('post', options, appTree).toPromise();
        } catch (e) {
          error = e;
        }
        expect(error).toMatch(/\W?Error: foo-bar-baz exist\W?/);
        expect(test_1.getFileContent(appTree, defaultExpectedFileName)).toEqual('foo');
      }));
  });
});
//# sourceMappingURL=index_spec.js.map
