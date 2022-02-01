import {
  SPSRouteRenderer,
  prod,
  scullyConfig,
  registerPlugin,
  ScullyConfig,
  setPluginConfig,
  log,
  logError,
  enableSPS,
} from '@scullyio/scully';
import { docLink } from '@scullyio/scully-plugin-docs-link-update';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';
import { LogRocket } from '@scullyio/scully-plugin-logrocket';
import { Sentry } from '@scullyio/scully-plugin-sentry';
import { copyToClipboard } from '@scullyio/scully-plugin-copy-to-clipboard';
import { removeScripts, RemoveScriptsConfig } from '@scullyio/scully-plugin-remove-scripts';

const { marked } = require('marked');
import { readFileSync } from 'fs-extra';
import { JSDOM } from 'jsdom';
import { loadRenderer } from './scully/loadRenderer';
// import { criticalCSS } from '@scullyio/scully-plugin-critical-css';
// import { localCacheReady } from '@scullyio/scully-plugin-local-cache';

import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import { join } from 'path';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
const { document } = window;

global.console.log = (first, ...args) => log(typeof first === 'string' ? first.slice(0, 120) : first, ...args);
global.console.error = (first, ...args) => logError(String(first).slice(0, 60));

// const jsdom = require('jsdom');
// conFst { JSDOM } = jsdom;

setPluginConfig('md', { enableSyntaxHighlighting: true });
// setPluginConfig(criticalCSS, {
//   inlineImages: false,
// });

// const defaultPostRenderers = [];
// const defaultPostRenderers = [LogRocket, GoogleAnalytics, removeScripts, 'seoHrefOptimise', criticalCSS, copyToClipboard];
const defaultPostRenderers = [LogRocket, GoogleAnalytics, removeScripts, 'seoHrefOptimise', copyToClipboard, 'critters'];

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

setPluginConfig<RemoveScriptsConfig>(removeScripts, {
  keepTransferstate: false,
  // keepAttributes: [],
});

export const config: Promise<ScullyConfig> = createConfig();
async function createConfig(): Promise<ScullyConfig> {
  await loadRenderer();
  // await localCacheReady();
  return {
    projectRoot: './apps/scully-docs/src',
    projectName: 'scully-docs',
    outDir: './dist/static/doc-sites',
    distFolder: './dist/apps/scully-docs',
    spsModulePath: './apps/scully-docs/src/app/app.sps.module.ts',
    defaultPostRenderers,
    // extraRoutes: [],
    maxRenderThreads: 96,
    routes: {
      '/docs/:slug': {
        type: 'contentFolder',
        postRenderers: ['docs-toc', docLink, ...defaultPostRenderers],
        slug: {
          folder: './docs',
        },
      },
      '/scully-user': {
        type: 'default',
        postRenderers: ['contentText'],
        contentType: 'html',
        content: () =>
          `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2FgkdQfpZ9JwNqVOs8bNlPHGpvZJcvUXvTgqdt64qYLeqzA/viewform?embedded=true" width="640" height="1088" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`,
      },
      '/ngconf': {
        type: 'default',
        postRenderers: ['contentText', ...defaultPostRenderers],
        contentType: 'md',
        content: () => {
          return `# Ng-Conf 2021

### To enter our Scully Thank-you Giveaway
  [click here](https://forms.gle/1Un68gVYdiz3Atxc8)





### To sign up for the Scully Server Beta
  [click here](https://forms.gle/kHHLLvrtSJyjbtXY8)

          `;
        },
      },
      '/gethelp': {
        type: 'default',
        postRenderers: ['contentText', ...defaultPostRenderers],
        contentType: 'md',
        content: async () => {
          const fm: any = await import('front-matter');
          const contentFile = join(scullyConfig.homeFolder, 'docs_extraPages/consulting.md');
          const { body } = fm(readFileSync(contentFile).toString('utf-8'));
          return body;
        },
      },
    },
    puppeteerLaunchOptions: {
      defaultViewport: null,
      devtools: false,
    },
  };
}
registerPlugin('postProcessByDom', 'docs-toc', async (dom, route) => {
  const headingIds = getHeadings(readFileSync(route.templateFile, 'utf-8').toString());
  const toc = `<ul>${headingIds.map(createLi).join('')}</ul>`;
  const heads = headingIds.map((h) => h[1]);
  const last = heads.pop();
  const desc = `Scully documentation page containing ${heads.join(',')} and ${last}`;
  const {
    window: { document },
  } = dom;
  const tocDiv = document.createElement('div');
  tocDiv.id = 'toc-doc';
  tocDiv.innerHTML = toc;
  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = desc;
  document.head.appendChild(meta);
  try {
    document.querySelector('scully-content').parentNode.appendChild(tocDiv);
  } catch (e) {}

  return dom;
  function createLi([id, desc]) {
    return `
    <li><a href="#${id}">${desc}</a></li>`;
  }
});

function getHeadings(content: string): [string, string][] {
  const exceptions = [
    // '# angular tutorial',
    // 'overview',
    // 'my blog post',
    `first build your app,`,
    `run scully`,
    '#heading 1 ### subheading 1 ## heading 2 ### subheading 2',
  ].map((e) => e.trim().toLowerCase());
  return content
    .split('\n')
    .filter(
      (line) => line.startsWith('#') && !exceptions.some((exception) => line.toLowerCase().includes(exception.toLowerCase().trim()))
    )
    .map((line) => {
      const outer = document.createElement('div');
      outer.innerHTML = marked(line.trim());
      const elm = outer.firstChild;
      try {
        // extract Id
        const id = elm['id'] as string;
        const desc = elm.textContent;
        return [id, desc];
      } catch (e) {
        console.log('oops', e);
        return ['', ''];
      }
    });
}

registerPlugin('postProcessByHtml', 'critters', async (html, route) => {
  const Critters = await import('critters');

  const critter = new Critters({
    path: scullyConfig.distFolder,
    publicPath: scullyConfig.distFolder,
    pruneSource: true,
    logLevel: 'silent',
    inlineFonts: true,
  });

  return await critter.process(html);
});
