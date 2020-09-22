import { prod, registerPlugin, ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { docLink } from '@scullyio/scully-plugin-docs-link-update';
import { GoogleAnalytics } from '@scullyio/scully-plugin-google-analytics';
import { LogRocket } from '@scullyio/scully-plugin-logrocket';
import { Sentry } from '@scullyio/scully-plugin-sentry';
import { removeScripts, RemoveScriptsConfig } from '@scullyio/plugins/scully-plugin-remove-scripts';
const marked = require('marked');
import { readFileSync } from 'fs-extra';
import { JSDOM } from 'jsdom';
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
const { document } = window;

// const jsdom = require('jsdom');
// conFst { JSDOM } = jsdom;

setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = [LogRocket, GoogleAnalytics, removeScripts, 'seoHrefOptimise'];

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
  keepAttributes: [],
});

export const config: ScullyConfig = {
  projectRoot: './apps/scully-docs/src',
  projectName: 'scully-docs',
  outDir: './dist/static/doc-sites',
  distFolder: './dist/apps/scully-docs',
  defaultPostRenderers,
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      postRenderers: ['docs-toc', docLink, ...defaultPostRenderers],
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

registerPlugin('render', 'docs-toc', async (html, route) => {
  const headingIds = getHeadings(readFileSync(route.templateFile, 'utf-8').toString());
  const toc = `<div id="toc-doc"><ul>${headingIds.map(createLi).join('')}</ul></div>`;
  // console.log(toc)
  return html.replace('<!--scullyContent-begin-->', '<!--scullyContent-begin-->' + toc);

  function createLi([id, desc]) {
    return `
    <li><a href="#${id}">${desc}</a></li>`;
  }
});

function getHeadings(content: string) {
  const exceptions = [
    // '# angular tutorial',
    // 'overview',
    // 'my blog post',
    '#heading 1 ### subheading 1 ## heading 2 ### subheading 2',
  ].map((e) => e.trim().toLowerCase());
  return content
    .split('\n')
    .filter((line) => line.startsWith('#') && !exceptions.some((exception) => line.toLowerCase().includes(exception)))
    .map((line) => {
      const outer = document.createElement('div');
      outer.innerHTML = marked(line.trim());
      const elm = outer.firstChild;
      try {
        // extract Id
        const id = elm['id'];
        const desc = elm.textContent;
        return [id, desc];
      } catch (e) {
        console.log('oops', e);
        return '';
      }
    });
}
