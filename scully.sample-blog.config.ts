/** load the plugins */
import '@scullyio/from-data';
// import './demos/plugins/extra-plugin.js';
import '@scullyio/plugin-extra';
import { HandledRoute, registerPlugin, ScullyConfig, setPluginConfig, logError } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import './demos/plugins/errorPlugin';
import './demos/plugins/tocPlugin';
import './demos/plugins/voidPlugin';

const FlashPrevention = getFlashPreventionPlugin();
setPluginConfig('md', { enableSyntaxHighlighting: true });

const defaultPostRenderers = ['seoHrefOptimise'];

export const config: ScullyConfig = {
  /** outDir is where the static distribution files end up */
  // bareProject:true,
  projectName: 'sample-blog',
  outDir: './dist/static/sample-blog',
  // distFolder: './dist/apps/sample-blog',
  // hostName: '0.0.0.0',
  // hostUrl: 'http://localHost:5000',
  // extraRoutes: Promise.resolve(['/exclude/present']),
  extraRoutes: new Promise((resolve) => {
    resolve(['/exclude/present', '/test/fakeBase']);
  }),
  /** Use only inlined HTML, no data.json will be written/read */
  // inlineStateOnly: true,
  defaultPostRenderers,
  handle404: 'baseOnly',
  thumbnails: true,
  proxyConfig: 'proxy.conf.js',
  // maxRenderThreads: 4,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 5,
    },
    '/home/:topLevel': {
      type: 'extraData',
      data: [
        { title: 'All routes in application', data: 'all' },
        { title: 'Unpublished routes in application', data: 'unpublished' },
        { title: 'Toplevel routes in application', data: '' },
      ],
    },
    '/user/:userId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: (raw) => raw.filter((row) => row.id < 3),
        property: 'id',
      },
    },
    '/user/:userId/post/:postId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: (raw) => raw.filter((row) => row.id < 3),
        property: 'id',
      },
      postId: {
        url: 'http://localhost:8200/posts?userId=${userId}',
        property: 'id',
      },
    },
    '/user/:userId/friend/:friendCode': {
      type: 'ignored',
      // type:'json',
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: (raw) => raw.filter((row) => row.id < 3),
        property: 'id',
      },
      friendCode: {
        url: 'http://localhost:8200/users?userId=${userId}',
        property: 'id',
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files',
      },
    },
    '/slow': {
      type: FlashPrevention,
      postRenderers: [FlashPrevention],
    },
    '/manualIdle': {
      type: 'default',
      manualIdleCheck: true,
    },
    '/someRoute': {
      type: 'ignored',
    },
    '/basehref': {
      type: 'default',
      postRenderers: [baseHrefRewrite],
      baseHref: '/basehref/',
    },
    '/basehref/rewritten': {
      type: 'default',
      postRenderers: [baseHrefRewrite],
      baseHref: '/basehref/rewritten/',
    },
    '/basehref/removed': {
      type: 'default',
      postRenderers: [baseHrefRewrite],
      baseHref: '/basehref/removed/',
    },
    '/test/fakeBase': {
      type: 'addFake',
    },
  },
  guessParserOptions: {
    excludedFiles: ['apps/sample-blog/src/app/exclude/exclude-routing.module.ts'],
  },
};

/** plugin to add routes that are not on the routeconfig, to test 404 */
const fakeroutePlugin = async (): Promise<HandledRoute[]> => [
  { route: '/test/fake1', type: 'addFake' },
  { route: '/test/fake2', type: 'addFake' },
];

registerPlugin('router', 'addFake', fakeroutePlugin);

registerPlugin(
  'routeProcess',
  'test2',
  (r: HandledRoute[]) =>
    r.map((route) => {
      const { data } = route;
      const { nonsense, rest } = data;
      if (nonsense !== 'do remove this please!') {
        logError('things are wrong, test failed on processRoutes test2 (sample-blog.config)');
        process.exit(15);
      }
      return { ...route, data: { ...rest } };
    }),
  30
);
registerPlugin(
  'routeProcess',
  'test1',
  (r: HandledRoute[]) => r.map((line) => ({ ...line, data: { ...line.data, nonsense: 'do remove this please!' } })),
  20
);

async function getMyRoutes(): Promise<string[]> {
  return new Promise((r) => {
    console.log('this line should be visible for 15 seconds');
    setTimeout(() => {
      console.log('done waiting');
      r(['/exclude/present']);
    }, 15000);
  });
}
