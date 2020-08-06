import { prod, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { docLink } from '@scullyio/scully-plugin-docs-link-update';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';
import { LogRocket } from '@scullyio/scully-plugin-logrocket';
import { Sentry } from '@scullyio/scully-plugin-sentry';
import { removeBottomScripts } from '@scullyio/plugins/scully-plugin-remove-scripts';

setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = [LogRocket, GoogleAnalytics, removeBottomScripts];

if (prod) {
  /*
   * Config for production
   * */
  setPluginConfig(LogRocket, { app: 'herodevs', id: 'scully' });

  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-171495765-1' });

  defaultPostRenderers.unshift(Sentry);
  setPluginConfig(Sentry, {
    key: 'c614241b1af34dbea5ad051000ffab7d',
    org: 'o426873',
    project: '5370245',
  });
} else {
  /*
   * Config for test
   */
  setPluginConfig(LogRocket, { app: 'test', id: 'test' });

  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'test' });
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
      postRenderers: [docLink, ...defaultPostRenderers],
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
