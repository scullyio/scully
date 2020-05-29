/** load the plugins */
import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getFlashPreventionPlugin } from '@scullyio/scully-plugin-flash-prevention';
import './demos/plugins/errorPlugin';
import './demos/plugins/tocPlugin';
import './demos/plugins/voidPlugin';
// import './demos/plugins/extra-plugin.js';
import '@scullyio/scully-plugin-extra';
import '@scullyio/from-data';

const FlashPrevention = getFlashPreventionPlugin();
setPluginConfig('md', { enableSyntaxHighlighting: true });

export const config: ScullyConfig = {
  /** outDir is where the static distribution files end up */
  // bareProject:true,
  projectName: 'sample-blog',
  outDir: './dist/static',
  // distFolder: './dist/apps/sample-blog',
  // hostName: '0.0.0.0',
  // hostUrl: 'http://localHost:5000',
  // extraRoutes: Promise.resolve(['/exclude/present']),
  extraRoutes: new Promise(r => {
    console.log('async call');
    setTimeout(() => r(['/exclude/present']), 15000);
  }),
  /** Use only inlined HTML, no data.json will be written/read */
  // inlineStateOnly: true,
  defaultPostRenderers: ['seoHrefOptimise'],
  thumbnails: true,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 5
    },
    '/home/:topLevel': {
      type: 'extraData',
      data: [
        { title: 'All routes in application', data: 'all' },
        { title: 'Unpublished routes in application', data: 'unpublished' },
        { title: 'Toplevel routes in application', data: '' }
      ]
    },
    '/user/:userId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: raw => raw.filter(row => row.id < 3),
        property: 'id'
      }
    },
    '/user/:userId/post/:postId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: raw => raw.filter(row => row.id < 3),
        property: 'id'
      },
      postId: {
        url: 'http://localhost:8200/posts?userId=${userId}',
        property: 'id'
      }
    },
    '/user/:userId/friend/:friendCode': {
      type: 'ignored',
      // type:'json',
      userId: {
        url: 'http://localhost:8200/users',
        resultsHandler: raw => raw.filter(row => row.id < 3),
        property: 'id'
      },
      friendCode: {
        url: 'http://localhost:8200/users?userId=${userId}',
        property: 'id'
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './tests/assets/blog-files'
      }
    },
    '/slow': {
      type: FlashPrevention,
      postRenderers: [FlashPrevention]
    },
    '/manualIdle': {
      type: 'default',
      manualIdleCheck: true
    },
    '/someRoute': {
      type: 'ignored'
    }
  },
  guessParserOptions: {
    excludedFiles: [
      'apps/sample-blog/src/app/exclude/exclude-routing.module.ts'
    ]
  }
};
