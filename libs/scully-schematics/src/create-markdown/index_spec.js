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
const test_1 = require('@schematics/angular/utility/test');
const schematicCollectionPath = path_1.join(
  __dirname,
  '../../node_modules/@schematics/angular/collection.json'
);
const customCollectionPath = path_1.join(__dirname, '../collection.json');
const schematicRunner = new testing_1.SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new testing_1.SchematicTestRunner('scully-schematics', customCollectionPath);
const PROJECT_NAME = 'foo';
const SCULLY_CONF_FILE = `/scully.${PROJECT_NAME}.config.js`;
const SCULLY_CONFIG_CONTENT = `
exports.config = {
  projectRoot: "./src/app",
  routes: { },
};
`;
const defaultOptions = Object.freeze({
  name: '',
  slug: '',
  project: 'defaultProject',
});
describe('create-markdown', () => {
  let appTree;
  beforeEach(() =>
    __awaiter(void 0, void 0, void 0, function*() {
      appTree = yield test_utils_1.setupProject(schematicRunner);
      appTree.create(SCULLY_CONF_FILE, SCULLY_CONFIG_CONTENT);
    })
  );
  describe('when using the default options', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-blog` &&
            task.options.options.target === 'blog'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = test_1
        .getFileContent(appTree, SCULLY_CONF_FILE)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfigFileContent).toEqual(
        `
exports.config = {  projectRoot: "./src/app",
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  },
};
      `
          .replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
    it(`should setup a new angular module from template`, () => {
      expect(appTree.files).toContain('/src/app/blog/blog-routing.module.ts');
      expect(appTree.files).toContain('/src/app/blog/blog.component.css');
      expect(appTree.files).toContain('/src/app/blog/blog.component.html');
      expect(appTree.files).toContain('/src/app/blog/blog.component.spec.ts');
      expect(appTree.files).toContain('/src/app/blog/blog.component.ts');
      expect(appTree.files).toContain('/src/app/blog/blog.module.ts');
    });
    it('should adjust the AppRoutingModule', () => {
      const appRoutingModuleContent = test_1.getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'blog'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/blog\/blog\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.BlogModule\s*\)\s*}/
      );
    });
  });
  describe('when using a specific `slug`', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {slug: 'Foo&Bar !Baz'});
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it(`should update the file ${SCULLY_CONF_FILE} and `, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = test_1
        .getFileContent(appTree, SCULLY_CONF_FILE)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfigFileContent).toEqual(
        `
exports.config = {
        projectRoot: "./src/app",
  routes: {
    '/blog/:fooBarBaz': {
      type: 'contentFolder',
      fooBarBaz: {
        folder: "./blog"
      }
    },
  },
};
      `
          .replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
    it('should use the camelized slug router param', () => {
      const appRoutingModuleContent = test_1.getFileContent(appTree, '/src/app/blog/blog-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        new RegExp(
          [
            `^\s*const\\s+routes\\s*:\\s*Routes\\s*=\\s*\\[\\s*`,
            `{\\s*`,
            `path\\s*:\\s*':fooBarBaz'\\s*,\\s*`,
            `component\\s*:\\s*BlogComponent\\s*,\\s*`,
            `}\\s*,\\s*`,
            `{\\s*`,
            `path\\s*:\\s*'\\*\\*'\\s*,\\s*`,
            `component\\s*:\\s*BlogComponent\\s*,\\s*`,
            `}\\s*`,
            `]\\s*;\\s*`,
          ].join(''),
          'm'
        )
      );
    });
  });
  describe('when using a default specific `route`', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {sourceDir: 'foo'});
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-blog` &&
            task.options.options.target === 'foo'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = test_1
        .getFileContent(appTree, SCULLY_CONF_FILE)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfigFileContent).toEqual(
        `
exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./foo"
      }
    },
  },
};
      `
          .replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
  });
  describe('when using a default specific `sourceDir`', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {route: 'ba%r!'});
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = test_1
        .getFileContent(appTree, SCULLY_CONF_FILE)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfigFileContent).toEqual(
        `
exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/bar/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  },
};
      `
          .replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
    it(`should setup a new angular module from template`, () => {
      const appRoutingModuleContent = test_1.getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'bar'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/blog\/blog\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.BlogModule\s*\)\s*}/
      );
    });
  });
  describe('when using a specific module name', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign(Object.assign({}, defaultOptions), {name: 'foo§Bar =Baz'});
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-foo-bar-baz` &&
            task.options.options.target === 'foo-bar-baz'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = test_1
        .getFileContent(appTree, SCULLY_CONF_FILE)
        .replace('\n', ' ')
        .replace(/\s+/g, ' ')
        .trim();
      expect(scullyConfigFileContent).toEqual(
        `
exports.config = {  projectRoot: "./src/app",
  routes: {
    '/foo-bar-baz/:id': {
      type: 'contentFolder',
      id: {
        folder: "./foo-bar-baz"
      }
    },
  },
};
      `
          .replace('\n', ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
    it(`should setup a new angular module from template`, () => {
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz-routing.module.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.css');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.html');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.spec.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.module.ts');
      // See https://github.com/scullyio/scully/issues/500
      const componantSpecContent = test_1.getFileContent(
        appTree,
        '/src/app/foo-bar-baz/foo-bar-baz.component.spec.ts'
      );
      expect(componantSpecContent).toMatch(
        /^\s*import.*FooBarBazComponent.*'\.\/foo-bar-baz\.component';\s*$/m
      );
    });
    it('should adjust the AppRoutingModule', () => {
      const appRoutingModuleContent = test_1.getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'foo-bar-baz'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/foo-bar-baz\/foo-bar-baz\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.FooBarBazModule\s*\)\s*}/
      );
    });
    it('should use the camelized slug router param', () => {
      const appRoutingModuleContent = test_1.getFileContent(
        appTree,
        '/src/app/foo-bar-baz/foo-bar-baz-routing.module.ts'
      );
      expect(appRoutingModuleContent).toMatch(
        new RegExp(
          [
            `^\\s*const\\s+routes\\s*:\\s*Routes\\s*=\\s*\\[\\s*`,
            `{\\s*`,
            `path\\s*:\\s*':id'\\s*,\\s*`,
            `component\\s*:\\s*FooBarBazComponent\\s*,\\s*`,
            `}\\s*,\\s*`,
            `{\\s*`,
            `path\\s*:\\s*'\\*\\*'\\s*,\\s*`,
            `component\\s*:\\s*FooBarBazComponent\\s*,\\s*`,
            `}\\s*`,
            `]\\s*;\\s*`,
          ].join(''),
          'm'
        )
      );
    });
  });
});
describe('create-markdown', () => {
  let appTree;
  const styleFileFormat = 'scss';
  describe('when using a specific style file format', () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function*() {
        const options = Object.assign({}, defaultOptions);
        appTree = yield test_utils_1.setupProject(schematicRunner, {styleFileFormat});
        appTree.create(SCULLY_CONF_FILE, SCULLY_CONFIG_CONTENT);
        appTree = yield customRunner.runSchematicAsync('md', options, appTree).toPromise();
      })
    );
    it(`should create a file with the expected file extension`, () => {
      expect(appTree.files).toContain('/src/app/blog/blog.component.' + styleFileFormat);
    });
    it(`should create a component using the right style file format`, () => {
      expect(appTree.files).toContain('/src/app/blog/blog.component.' + styleFileFormat);
      const componentFileContent = test_1.getFileContent(appTree, '/src/app/blog/blog.component.ts');
      expect(componentFileContent).toMatch(
        new RegExp(
          `^\\s*styleUrls\\s*:\\s*\\['\\./blog\\.component\\.${styleFileFormat}'\\s*]\\s*,\\s*$`,
          'm'
        )
      );
    });
  });
});
//# sourceMappingURL=index_spec.js.map
