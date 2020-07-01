import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';
import './demos/plugins/docs-link-update';
import { LogRocket } from '@scullyio/plugins/logrocket';

setPluginConfig('md', { enableSyntaxHighlighting: true });
// Use environment variables here
setPluginConfig(LogRocket, { app: 'app', id: 'id' });

const defaultPostRenderers = [DisableAngular, LogRocket];

export const config: ScullyConfig = {
  projectRoot: './apps/scully-docs/src',
  projectName: 'scully-docs',
  outDir: './dist/static/doc-sites',
  distFolder: './dist/apps/scully-docs',
  defaultPostRenderers,
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docsLink', ...defaultPostRenderers],
      slug: {
        folder: './docs',
      },
    },
  },
  puppeteerLaunchOptions: {
    defaultViewport: null,
    devtools: false,
  },
};
