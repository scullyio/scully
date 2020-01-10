import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import * as path from 'path';

import {setupProject} from '../utils/test-utils';
import {Schema} from './schema';
import {getFileContent} from '@schematics/angular/utility/test';

const collectionPath = path.join(__dirname, '../collection.json');
const SCULLY_CONF_FILE = '/scully.config.js';

describe('create-markdown', () => {
  const schematicRunner = new SchematicTestRunner('scully-schematics', collectionPath);
  const project = 'foo';
  const defaultOptions: Schema = {
    name: 'blog',
    slug: 'id',
  };
  let appTree: UnitTestTree;

  beforeEach(async () => {
    appTree = new UnitTestTree(new HostTree());
    appTree = await setupProject(appTree, schematicRunner, project);
    appTree.create(
      SCULLY_CONF_FILE,
      `exports.config = {
  projectRoot: "./src/app",
  routes: {
  },
};`
    );
  });

  describe('when using the default options', () => {
    beforeEach(async () => {
      appTree = await schematicRunner.runSchematicAsync('md', defaultOptions, appTree).toPromise();
    });
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'post' &&
            (task.options as any).options.name === `${dayString}-blog` &&
            (task.options as any).options.target === 'blog'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE);
      expect(scullyConfigFileContent).toEqual(`exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  },
};`);
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
        /{*.path:\ 'blog', loadChildren:\ \(\) => import\('.\/blog\/blog.module'\).then\(m\ =>\ m\.BlogModule\)\ \}/g
      );
    });
  });

  describe('when using a default specific `route`', () => {
    beforeEach(async () => {
      appTree = await schematicRunner
        .runSchematicAsync('md', {...defaultOptions, sourceDir: 'foo'}, appTree)
        .toPromise();
    });
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'post' &&
            (task.options as any).options.name === `${dayString}-blog` &&
            (task.options as any).options.target === 'foo'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE);
      expect(scullyConfigFileContent).toEqual(`exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./foo"
      }
    },
  },
};`);
    });
  });

  describe('when using a default specific `sourceDir`', () => {
    beforeEach(async () => {
      appTree = await schematicRunner
        .runSchematicAsync('md', {...defaultOptions, route: 'bar'}, appTree)
        .toPromise();
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE);
      expect(scullyConfigFileContent).toEqual(`exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/bar/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
  },
};`);
    });
    it(`should setup a new angular module from template`, () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{*.path:\ 'bar', loadChildren:\ \(\) => import\('.\/blog\/blog.module'\).then\(m\ =>\ m\.BlogModule\)\ \}/g
      );
    });
  });

  describe('when using a specific module name', () => {
    beforeEach(async () => {
      appTree = await schematicRunner
        .runSchematicAsync('md', {...defaultOptions, name: 'fooBar Baz'}, appTree)
        .toPromise();
    });
    it('should create the markdown file by calling the post schematic', () => {
      const dayString = new Date().toISOString().substring(0, 10);
      expect(
        schematicRunner.tasks.some(
          task =>
            task.name === 'run-schematic' &&
            (task.options as any).name === 'post' &&
            (task.options as any).options.name === `${dayString}-foo-bar-baz` &&
            (task.options as any).options.target === 'foo-bar-baz'
        )
      ).toBe(true);
    });
    it(`should update the file ${SCULLY_CONF_FILE}`, () => {
      expect(appTree.files).toContain(SCULLY_CONF_FILE);
      const scullyConfigFileContent = getFileContent(appTree, SCULLY_CONF_FILE);
      expect(scullyConfigFileContent).toEqual(`exports.config = {
  projectRoot: "./src/app",
  routes: {
    '/foo-bar-baz/:id': {
      type: 'contentFolder',
      id: {
        folder: "./foo-bar-baz"
      }
    },
  },
};`);
    });
    it(`should setup a new angular module from template`, () => {
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz-routing.module.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.css');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.html');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.spec.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.component.ts');
      expect(appTree.files).toContain('/src/app/foo-bar-baz/foo-bar-baz.module.ts');
    });
    it('should adjust the AppRoutingModule', () => {
      const appRoutingModuleContent = getFileContent(appTree, '/src/app/app-routing.module.ts');
      expect(appRoutingModuleContent).toMatch(
        /{*.path:\ 'foo-bar-baz', loadChildren:\ \(\) => import\('.\/foo-bar-baz\/foo-bar-baz.module'\).then\(m\ =>\ m\.FooBarBazModule\)\ \}/g
      );
    });
  });
});
