'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('./demos/plugins/docs-link-update');
var scully_1 = require('@scullyio/scully');
scully_1.setPluginConfig('md', { enableSyntaxHighlighting: true });
exports.config = {
  projectRoot: './apps/scully-docs/src',
  projectName: 'scully-docs',
  outDir: './dist/static/doc-sites',
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docsLink'],
      slug: {
        folder: './docs'
      }
    }
  }
};
