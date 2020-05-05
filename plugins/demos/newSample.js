const {routeSplit, registerPlugin, httpGet} = require('@scullyio/scully');

const newsSamplePlugin = async (route, config) => {
  const {createPath} = routeSplit(route);
  const list = await httpGet('http://localhost:4200/assets/news.json');
  const handledRoutes = [];
  for (item of list) {
    const blogData = await httpget(`http://localhost:4200/assets/news/${list.id}.json`);
    handledRoutes.push({
      route: createPath(item.id, blogdata.slug),
      title: blogData.title,
      description: blogData.short,
    });
  }
};

registerPlugin('router', 'myBlog', newsSamplePlugin);

const config = {
  '/news/:id/:slug': {
    type: 'myBlog',
    postRenderers: postRenderers,
  },
};

/**
 *
    '/news/:id/:slug': {
      type: 'json',
      postRenderers: postRenderers,
      id: {
        url: 'http://localhost:4200/assets/news.json',
        property: 'id',
      },
      slug: {
        url: 'http://localhost:4200/assets/news/${id}.json',
        property: 'slug',
      },
},

{
  "id": 5,
  "slug": "newsitem-5",
  "title": "Newsitem #5",
  "short": "Lorem ipsum dolor .."
}
 */
