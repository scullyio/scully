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
const defaultOptions = Object.freeze({
  project: 'defaultProject',
});
describe('scully schematic', () => {
  let appTree;
  beforeEach(() =>
    __awaiter(void 0, void 0, void 0, function*() {
      appTree = yield test_utils_1.setupProject(schematicRunner);
    })
  );
  describe('when not in a valid angular workspace', () => {
    it('should throw an exception', () =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree.delete('angular.json');
        let error = '';
        try {
          yield customRunner.runSchematicAsync('scully', options, appTree).toPromise();
        } catch (e) {
          error = e;
        }
        expect(error).toMatch(/\W?Not an angular CLI workspace\W?/);
      }));
  });
  describe('when using the default options', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree = yield customRunner.runSchematicAsync('scully', options, appTree).toPromise();
      })
    );
    it('should create the scully config file when not exists', () => {
      expect(appTree.files).toContain(SCULLY_PATH);
      const scullyConfFile = test_1
        .getFileContent(appTree, SCULLY_PATH)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfFile).toEqual(
        SCULLY_CONFIG_CONTENT.replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
    it(`should modify the 'package.json'`, () => {
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      const packageJson = JSON.parse(test_1.getFileContent(appTree, PACKAGE_JSON_PATH));
      const {scripts} = packageJson;
      expect(scripts.scully).toEqual('scully');
      expect(scripts['scully:serve']).toEqual('scully serve');
    });
  });
  describe('when using the default options', () => {
    it(`should not override an existing scully config file`, () =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree.create(SCULLY_PATH, 'foo');
        appTree = yield customRunner.runSchematicAsync('scully', options, appTree).toPromise();
        expect(appTree.files).toContain(PACKAGE_JSON_PATH);
        expect(test_1.getFileContent(appTree, SCULLY_PATH)).toEqual('foo');
      }));
  });
});
//# sourceMappingURL=index_spec.js.map
