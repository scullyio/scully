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
const path_1 = require('path');
const test_utils_1 = require('../utils/test-utils');
const schematicCollectionPath = path_1.join(
  __dirname,
  '../../node_modules/@schematics/angular/collection.json'
);
const customCollectionPath = path_1.join(__dirname, '../collection.json');
const schematicRunner = new testing_1.SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new testing_1.SchematicTestRunner('scully-schematics', customCollectionPath);
const defaultOptions = Object.freeze({});
describe('add-blog schematic', () => {
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
        appTree = yield customRunner.runSchematicAsync('blog', options, appTree).toPromise();
      })
    );
    it('should have run the markdown schematic with default options', () => {
      expect(
        customRunner.tasks.some(task => {
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
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {routingScope: 'Root'});
        appTree = yield customRunner.runSchematicAsync('blog', options, appTree).toPromise();
      })
    );
    it('should have run the markdown schematic with defaults and `routingScope`', () => {
      expect(
        customRunner.tasks.some(
          task =>
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
//# sourceMappingURL=index_spec.js.map
