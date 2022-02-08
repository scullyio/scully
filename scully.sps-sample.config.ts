import { ScullyConfig, enableSPS, registerPlugin, HandledRoute, SPSRouteRenderer } from '@scullyio/scully';
import '@scullyio/scully-plugin-extra';
import '@scullyio/scully-plugin-from-data';
import { JSDOM } from 'jsdom';
import { cpus } from 'os';

const defaultPostRenderers: string[] = ['blah', 'blahAh', 'seoHrefOptimise'];

/**
 * enables the Scully Platrom Server
 *  (disables puppeteer, and uses
 * Angular Platform-server to
 * render the pages )
 */
enableSPS();

export const config: ScullyConfig = {
  projectName: 'sps-sample',
  outDir: './dist/static/sps-sample',
  defaultPostRenderers,
  spsModulePath: './apps/sps-sample/src/app/app.sps.module.ts',
  // maxRenderThreads: 4,
  /** this seems the optimal for SPS */
  maxRenderThreads: cpus().length * 3,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 2500,
    },
    '/docs/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './docs',
      },
      // postRenderers: ['seoHrefOptimise'],
    },
    '/user/:id': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      id: {
        url: 'http://localhost:8200/users',
        // resultsHandler: (raw) => raw.filter((row) => row.id < 102),
        property: 'id',
      },
    },
  },
};


registerPlugin('postProcessByHtml', 'blah', async (html, route) => {
  return html.replace('<h2>', '<h2>blah ');
});

registerPlugin('postProcessByDom', 'addMyToc', async (dom: JSDOM, route: HandledRoute) => {
  const { window: { document } } = dom;
  const toc = document.createElement('ul');
  toc.classList.add('toc');
  const h2 = Array.from(document.querySelectorAll('h2'));
  for (const header of h2) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${header.id}">${header.innerHTML}</a>`;
    toc.appendChild(li);
  }
  document.body.appendChild(toc);
  return dom;
});
