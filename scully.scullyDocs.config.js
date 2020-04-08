require('./extraPlugin/docs-link-update');
const {setPluginConfig} = require('./dist/scully');

setPluginConfig('md', {enableSyntaxHighlighting: true});

exports.config = {
  projectRoot: './projects/scullyDocs/src',
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
