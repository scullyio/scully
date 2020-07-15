import { ScullyConfig, setPluginConfig, prod } from '@scullyio/scully';
import { DisableAngular } from 'scully-plugin-disable-angular';
import './demos/plugins/docs-link-update';
import { LogRocket } from '@scullyio/plugins/logrocket';
import { GoogleAnalytics } from '@scullyio/plugins/google-analytics';

setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = [DisableAngular];

if (prod) {
  /*
   * Config for production
   * */
  setPluginConfig(LogRocket, { app: 'herodevs', id: 'scully' });
  defaultPostRenderers.push(LogRocket);

  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-171495765-1' });
  defaultPostRenderers.push(GoogleAnalytics);
} else {
  /*
   * Config for test
   */
  setPluginConfig(LogRocket, { app: 'test', id: 'test' });
  defaultPostRenderers.push(LogRocket);

  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'test' });
  defaultPostRenderers.push(GoogleAnalytics);
}

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
