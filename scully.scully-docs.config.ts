import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';
import './demos/plugins/docs-link-update';

setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = [DisableAngular];

export const config: ScullyConfig = {
  projectRoot: './apps/scully-docs/src',
  projectName: 'scully-docs',
  outDir: './dist/static/doc-sites',
  defaultPostRenderers,
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docsLink', ...defaultPostRenderers],
      slug: {
        folder: './docs'
      }
    }
  }
};
