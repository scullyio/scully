'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/** load the plugins */
require('@scullyio/from-data');
// import './demos/plugins/extra-plugin.js';
require('@scullyio/plugin-extra');
var scully_1 = require('@scullyio/scully');
var scully_plugin_flash_prevention_1 = require('@scullyio/scully-plugin-flash-prevention');
require('./demos/plugins/errorPlugin');
require('./demos/plugins/tocPlugin');
require('./demos/plugins/voidPlugin');
var FlashPrevention = scully_plugin_flash_prevention_1.getFlashPreventionPlugin();
scully_1.setPluginConfig('md', { enableSyntaxHighlighting: true });
exports.config = {
  /** outDir is where the static distribution files end up */
  // bareProject:true,
  projectName: 'sample-blog',
  outDir: './dist/static',
  // distFolder: './dist/apps/sample-blog',
  // hostName: '0.0.0.0',
  // hostUrl: 'http://localHost:5000',
  // extraRoutes: Promise.resolve(['/exclude/present']),
  extraRoutes: new Promise(function(r) {
    console.log('async call');
    setTimeout(function() {
      return r(['/exclude/present']);
    }, 15000);
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
        resultsHandler: function(raw) {
          return raw.filter(function(row) {
            return row.id < 3;
          });
        },
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
        resultsHandler: function(raw) {
          return raw.filter(function(row) {
            return row.id < 3;
          });
        },
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
        resultsHandler: function(raw) {
          return raw.filter(function(row) {
            return row.id < 3;
          });
        },
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
