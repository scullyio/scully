require('./extraPlugin/docs-link-update');
const {setPluginConfig, setRouteCallPluginConfig} = require('./dist/scully');

setPluginConfig('md', {enableSyntaxHighlighting: true});
setRouteCallPluginConfig('/docs/:slug', 'md', {enableSyntaxHighlighting: false});

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
