import { prod, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { docLink } from '@scullyio/scully-plugin-docs-link-update';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';
import { LogRocket } from '@scullyio/scully-plugin-logrocket';
import { DisableAngular } from 'scully-plugin-disable-angular';

setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = [LogRocket, GoogleAnalytics, DisableAngular];

if (prod) {
  /*
   * Config for production
   * */
  setPluginConfig(LogRocket, { app: 'herodevs', id: 'scully' });

  setPluginConfig(GoogleAnalytics, { globalSiteTag: 'UA-171495765-1' });
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
