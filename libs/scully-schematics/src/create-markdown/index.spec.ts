import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';

import { setupProject } from '../utils/test-utils';
import { Schema as MarkdownModuleSchema } from './schema';
import { Schema as PostSchema } from '../add-post/schema';
import { getFileContent } from '@schematics/angular/utility/test';
import { TaskConfiguration } from '@angular-devkit/schematics';

const schematicCollectionPath = join(__dirname, '../../../../node_modules/@schematics/angular/collection.json');
const customCollectionPath = join(__dirname, '../collection.json');

const schematicRunner = new SchematicTestRunner('@schematics/angular', schematicCollectionPath);
const customRunner = new SchematicTestRunner('scully-schematics', customCollectionPath);

const PROJECT_NAME = 'foo';
const SCULLY_CONF_FILE = `/scully.${PROJECT_NAME}.config.ts`;
const SCULLY_CONFIG_CONTENT = `
exports.config = {
  projectRoot: "./src/app",
  routes: { },
};
`;

const defaultOptions: MarkdownModuleSchema = Object.freeze({
  name: '',
  slug: '',
  project: 'defaultProject'
});

describe('create-markdown', () => {
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = await setupProject(schematicRunner);
    appTree.create(SCULLY_CONF_FILE, SCULLY_CONFIG_CONTENT);
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions };
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          (task: TaskConfiguration<{ name: string; options: PostSchema }>) =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-blog` &&
            task.options.options.target === 'blog'
        )
      ).toBe(true);
    });

    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE).replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
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
          .replace(/\\n/g, ' ')
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
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'blog'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/blog\/blog\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.BlogModule\s*\)\s*}/
      );
    });
  });

  describe('when using a specific `slug`', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions, slug: 'Foo&Bar !Baz' };
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it(`should update the file ${SCULLY_CONF_FILE} and `, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE).replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
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
          .replace(/\\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });

    it('should use the camelized slug router param', () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/blog/blog-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        new RegExp(
          [
            `^s*const\\s+routes\\s*:\\s*Routes\\s*=\\s*\\[\\s*`,
            `{\\s*`,
            `path\\s*:\\s*':fooBarBaz'\\s*,\\s*`,
            `component\\s*:\\s*BlogComponent\\s*,\\s*`,
            `}\\s*,\\s*`,
            `{\\s*`,
            `path\\s*:\\s*'\\*\\*'\\s*,\\s*`,
            `component\\s*:\\s*BlogComponent\\s*,\\s*`,
            `}\\s*`,
            `]\\s*;\\s*`
          ].join(''),
          'm'
        )
      );
    });
  });

  describe('when using a default specific `route`', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions, sourceDir: 'foo' };
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          (task: TaskConfiguration<{ name: string; options: PostSchema }>) =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-blog` &&
            task.options.options.target === 'foo'
        )
      ).toBe(true);
    });

    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE).replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
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
          .replace(/\\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });
  });

  describe('when using a default specific `sourceDir`', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions, route: 'ba%r!' };
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE).replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
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
          .replace(/\\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      );
    });

    it(`should setup a new angular module from template`, () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'bar'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/blog\/blog\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.BlogModule\s*\)\s*}/
      );
    });
  });

  describe('when using a specific module name', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions, name: 'foo§Bar =Baz' };
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        customRunner.tasks.some(
          (task: TaskConfiguration<{ name: string; options: PostSchema }>) =>
            task.name === 'run-schematic' &&
            task.options.name === 'post' &&
            task.options.options.name === `${dayString}-foo-bar-baz` &&
            task.options.options.target === 'foo-bar-baz'
        )
      ).toBe(true);
    });

    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE).replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
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
          .replace(/\\n/g, ' ')
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
      const componantSpecContent = getFileContent(appTree, '/src/app/foo-bar-baz/foo-bar-baz.component.spec.ts');
      expect(componantSpecContent).toMatch(/^\s*import.*FooBarBazComponent.*'\.\/foo-bar-baz\.component';\s*$/m);
    });

    it('should adjust the AppRoutingModule', () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{\s*path\s*:\s*'foo-bar-baz'\s*,\s*loadChildren\s*:\s*\(\s*\)\s*=>\s*import\s*\(\s*'\.\/foo-bar-baz\/foo-bar-baz\.module'\s*\)\s*\.then\s*\(\s*m\s*=>\s*m\.FooBarBazModule\s*\)\s*}/
      );
    });

    it('should use the camelized slug router param', () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/foo-bar-baz/foo-bar-baz-routing.module.ts');
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
            `]\\s*;\\s*`
          ].join(''),
          'm'
        )
      );
    });
  });
});

describe('create-markdown', () => {
  let appTree: UnitTestTree;

  const styleFileFormat = 'scss';

  describe('when using a specific style file format', () => {
    beforeEach(async () => {
      const options = { ...defaultOptions };
      appTree = await setupProject(schematicRunner, { styleFileFormat });
      appTree.create(SCULLY_CONF_FILE, SCULLY_CONFIG_CONTENT);
      appTree = await customRunner.runSchematicAsync('md', options, appTree).toPromise();
    });

    it(`should create a file with the expected file extension`, () => {
      expect(appTree.files).toContain('/src/app/blog/blog.component.' + styleFileFormat);
    });

    it(`should create a component using the right style file format`, () => {
      expect(appTree.files).toContain('/src/app/blog/blog.component.' + styleFileFormat);
      const componentFileContent = getFileContent(appTree, '/src/app/blog/blog.component.ts');
      expect(componentFileContent).toMatch(
        new RegExp(`^\\s*styleUrls\\s*:\\s*\\['\\./blog\\.component\\.${styleFileFormat}'\\s*]\\s*,\\s*$`, 'm')
      );
    });
  });
});
