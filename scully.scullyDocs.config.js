require('./extraPlugin/docs-link-update');

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
