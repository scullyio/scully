import {getFlashPreventionPlugin} from '@scullyio/scully-plugin-flash-prevention';
/** load the plugins */
import './plugins/demos/extra-plugin.js';
import './plugins/demos/tocPlugin';
import './plugins/demos/voidPlugin';
import './plugins/demos/errorPlugin';
import {scullyConfig, ScullyConfig, setPluginConfig} from '@scullyio/scully';

const FlashPrevention = getFlashPreventionPlugin();
setPluginConfig('md', {enableSyntaxHighlighting: true});

export const config: ScullyConfig = {
  /** outDir is where the static distribution files end up */
  outDir: './dist/static',
  // hostName: '0.0.0.0',
  // hostUrl: 'http://localHost:5000',
  extraRoutes: Promise.resolve(['/exclude/present']),
  /** Use only inlined HTML, no data.json will be written/read */
  // inlineStateOnly: true,
  defaultPostRenderers: ['seoHrefOptimise'],
  thumbnails: true,
  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 5,
    },
    '/home/:topLevel': {
      type: 'extra',
      data: [
        {title: 'All routes in application', data: 'all'},
        {title: 'Unpublished routes in application', data: 'unpublished'},
        {title: 'Toplevel routes in application', data: ''},
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
        resultsHandler: raw => raw.filter(row => row.id < 3),
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
        resultsHandler: raw => raw.filter(row => row.id < 3),
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
        resultsHandler: raw => raw.filter(row => row.id < 3),
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
  },
  guessParserOptions: {
    excludedFiles: ['ng-projects/sampleBlog/src/app/exclude/exclude-routing.module.ts'],
  },
};
