import './demos/plugins/docs-link-update';
import { setPluginConfig } from '@scullyio/scully';

setPluginConfig('md', { enableSyntaxHighlighting: true });

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
