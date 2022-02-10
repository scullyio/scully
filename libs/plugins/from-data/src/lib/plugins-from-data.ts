import { routeSplit, registerPlugin, HandledRoute } from '@scullyio/scully';

export const extraData = 'extraData';

/**
 * This plugin replaces the parameter with a counter from 0 to the numberOfPages
 * in the config.
 * @param route
 * @param options
 */
const dataRoutesPlugin = async (route, options): Promise<HandledRoute[]> => {
  /**
   * routeSplit takes the route and returns a object.
   * The createPath property in there is a function that takes the
   * same amount of arguments as there are parameters in the route, and returns a
   * correct route
   */
  const { createPath } = routeSplit(route);
  if (options.data) {
    /** use the data provided in the route options */
    return options.data.map(item => ({
      /** use the creatPath function to put the data in the route */
      route: createPath(item.data),
      /** and add the title if its there */
      title: item.title || ''
    }));
  }
  /** just in case */
  return [];
};

const validator = async options => {
  const errors = [] as string[];

  if (options.data) {
    if (!Array.isArray(options.data)) {
      errors.push(`dataRoutesPlugin property 'data' needs to be an array`);
    } else {
      if (!options.data.every(item => typeof item.title === 'string' && typeof item.data === 'string')) {
        errors.push(`dataRoutesPlugin property 'data' needs to have  'title' and 'data' strings on every tuple`);
      }
    }
  }
  return errors;
};

registerPlugin('router', 'extraData', dataRoutesPlugin, validator);
