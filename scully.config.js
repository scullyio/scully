const minePlugin = (route, options) => {
  console.log({route, options});
  const {createPath} = routeSplit(route);
  return [1, 2, 3].map(n => ({route: `${createPath(`${n}`)}`, title: `Your mine ${n}`}));
};
minePlugin[configValidator] = async config => {
  return [];
};

registerPlugin('router', 'mine', minePlugin);

exports.config = {
  routes: {
    '/mine/:id': {
      type: 'mine',
    },
  },
};
