/** load the plugin  */
require('./extraPlugin/extra-plugin.js');

exports.config = {
  /** projectRoot is mandatory! */
  projectRoot: './projects/sampleBlog/src/app',
  /** outFolder is where the static distribution files end up */
  outFolder: './dist/static',

  routes: {
    '/demo/:id': {
      type: 'extra',
      numberOfPages: 5,
    },
    '/home/:topLevel': {
      type: 'extra',
      data: [
        {title: 'All routes in application', data: 'all'},
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
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
    },
    '/ouser/:userId/:friendId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
      friendId: {
        /** users are their own friend in this sample ;) */
        url: 'https://jsonplaceholder.typicode.com/users?userId=${userId}',
        property: 'id',
      },
    },
    '/todos/:todoId': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      todoId: {
        url: 'https://jsonplaceholder.typicode.com/todos',
        property: 'id',
        /**
         * Headers can be sent optionally
         */
        headers: {
          'API-KEY': '0123456789',
        },
      },
    },
    '/nouser/:userId/:posts/:comments': {
      // Type is mandatory
      type: 'json',
      /**
       * Every parameter in the route must exist here
       */
      userId: {
        url: 'https://jsonplaceholder.typicode.com/users',
        property: 'id',
      },
      posts: {
        url: 'https://jsonplaceholder.typicode.com/posts?userId=${userId}',
        property: 'id',
      },
      comments: {
        url: 'https://jsonplaceholder.typicode.com/comments?postId=${posts}',
        property: 'id',
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
