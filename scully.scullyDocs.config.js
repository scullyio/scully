require('./extraPlugin/docs-link-update');
const {setPluginConfig} = require('./dist/scully');

setPluginConfig('md', {enableSyntaxHighlighting: true});
require('./plugins/demos/docs-link-update');

exports.config = {
  projectRoot: './ng-projects/scullyDocs/src',
  projectName: 'scullyDocs',
  outDir: './dist/static',
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docsLink'],
      slug: {
        folder: './docs',
      },
    },
  },
};
