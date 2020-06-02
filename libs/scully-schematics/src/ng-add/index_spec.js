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
const version_names_1 = require('./version-names');
const schematicCollectionPath = path_1.join(
  __dirname,
  '../../node_modules/@schematics/angular/collection.json'
);
const customCollectionPath = path_1.join(__dirname, '../collection.json');
const schematicRunner = new testing_1.SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new testing_1.SchematicTestRunner('scully-schematics', customCollectionPath);
const defaultOptions = Object.freeze({
  blog: true,
  project: 'defaultProject',
});
const PACKAGE_JSON_PATH = '/package.json';
describe('ng-add schematic', () => {
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
        appTree = yield customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      })
    );
    it('should add dependencies', () => {
      const packageJson = JSON.parse(test_1.getFileContent(appTree, PACKAGE_JSON_PATH));
      const {dependencies} = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(dependencies['@scullyio/ng-lib']).toEqual(version_names_1.scullyVersion);
      expect(dependencies['@scullyio/scully']).toEqual(version_names_1.scullyComponentVersion);
    });
    it('should add dependencies', () => {
      const packageJson = JSON.parse(test_1.getFileContent(appTree, PACKAGE_JSON_PATH));
      const {dependencies} = packageJson;
      expect(appTree.files).toContain(PACKAGE_JSON_PATH);
      expect(dependencies['@scullyio/ng-lib']).toEqual(version_names_1.scullyVersion);
      expect(dependencies['@scullyio/scully']).toEqual(version_names_1.scullyComponentVersion);
    });
    it('should add the polyfill', () => {
      const appModuleContent = test_1.getFileContent(appTree, 'src/polyfills.ts');
      expect(appModuleContent).toMatch(/^\s*import\s+'zone\.js\/dist\/task-tracking'\s*;/m);
    });
    it('should run NodePackageInstallTask', () => {
      expect(customRunner.tasks.some(task => task.name === 'node-package')).toBe(true);
    });
    it('should have run the blog schematic', () => {
      expect(
        customRunner.tasks.some(task => task.name === 'run-schematic' && task.options.name === 'blog')
      ).toBe(true);
    });
    it('should have run the blog schematic', () => {
      expect(
        customRunner.tasks.some(task => task.name === 'run-schematic' && task.options.name === 'run')
      ).toBe(true);
    });
  });
  describe('when not setting `blog` option to true', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {blog: false});
        appTree = yield customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
      })
    );
    it('should not have run the blog schematic', () => {
      expect(customRunner.tasks.some(task => task.options.name === 'blog')).toBe(false);
    });
  });
  describe('when AppModule not exists', () => {
    it('should not have run the blog schematic', () =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree.delete('/src/app/app.module.ts');
        let error = '';
        try {
          yield customRunner.runSchematicAsync('ng-add', options, appTree).toPromise();
        } catch (e) {
          error = e;
        }
        expect(error).toMatch(/\W?File\s+\.\/src\/app\/app\.module\.ts\s+does\s+not\s+exist\.\W?/);
      }));
  });
});
//# sourceMappingURL=index_spec.js.map
