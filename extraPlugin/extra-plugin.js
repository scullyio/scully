
const {configValidator} = require('../scully/bin');

console.log(__dirname)

exports.extraRoutesPlugin = (route, options) => {
  const {createPath} = routeSplit(route);
  if (options.numberOfPages) {
    return Array.from({length: options.numberOfPages}, (_v, k) => k).map(n => ({
      route: `${createPath(`${n}`)}`,
      title: `page number ${n}`,
    }));
  }
  if (options.data) {
    return options.data.map(item => ({
      route: createPath(item.data),
      title: item.title || '',
    }));
  }
  return [];
};
/** the validator is mandatory */
exports.extraRoutesPlugin[configValidator] = async options => [];

