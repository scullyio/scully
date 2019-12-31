const {configValidator, routeSplit} = require('../scully/bin');

console.log(__dirname);

const extraRoutesPlugin = (route, options) => {
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

extraRoutesPlugin[configValidator] = async options => {
  const errors = [];

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `extraroutesPlugin plugin numberOfPages should be a number, not a ${typeof options.numberOfPages}`
    );
  }
  if (options.numberOfPages && options.data) {
    errors.push(`extraroutesPlugin plugin can't have property 'numberOfPages' and 'data' at the same time`);
  }
  if (options.data) {
    if (!Array.isArray(options.data)) {
      errors.push(`extraroutesPlugin property 'data' needs to be an array`);
    } else {
      if (!options.data.every(item => typeof item.title === 'string' && typeof item.data === 'string')) {
        errors.push(
          `extraroutesPlugin property 'data' needs to have  'title' and 'data' strings on every tuple`
        );
      }
    }
  }
  return errors;
};

module.exports = registerPlugin => registerPlugin('router', 'extra', extraRoutesPlugin);
module.exports.extraRoutesPlugin = extraRoutesPlugin;
