const {
  getDiscountFlashPreventionPlugin,
} = require('./projects/scully-plugin-flash-prevention/src/public-api');

/** load the plugin  */
require('./extraPlugin/extra-plugin.js');
require('./extraPlugin/tocPlugin');
require('./extraPlugin/voidPlugin');

const FlashPrevention = getDiscountFlashPreventionPlugin();

exports.config = {
  /** outDir is where the static distribution files end up */
  outDir: './dist/static',
  // hostName: '0.0.0.0',
  // hostUrl: 'http://localHost:5000',
  extraRoutes: ['/exclude/present'],
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
      // postRenderers: ['toc'],
      slug: {
        folder: './blog',
      },
    },
    '/slow': {
      type: FlashPrevention,
      postRenderers: [FlashPrevention],
    },
  },
  guessParserOptions: {
    excludedFiles: ['projects/sampleBlog/src/app/exclude/exclude-routing.module.ts'],
  },
};
