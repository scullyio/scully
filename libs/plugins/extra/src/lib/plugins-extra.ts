import {
  routeSplit,
  registerPlugin,
  HandledRoute,
  yellow,
} from '@scullyio/scully';

/**
 * This plugin replaces the parameter with a counter from 0 to the numberOfPages
 * in the config.
 * @param route
 * @param options
 */
export const extraRoutesPlugin = async (
  route,
  options
): Promise<Partial<HandledRoute>[]> => {
  /**
   * routeSplit takes the route and returns a object.
   * The createPath property in there is a function that takes the
   * same amount of arguments as there are parameters in the route, and returns a
   * correct route
   */
  const { createPath } = routeSplit(route);
  if (options.numberOfPages) {
    /** we are going to add numberOfPages handledRoutes, with the number as parameter  */
    return Array.from({ length: options.numberOfPages }, (_v, k) => k).map(
      (n) => ({
        route: createPath(n.toString()),
        title: `page number ${n}`,
      })
    );
  }
  /** just in case */
  return [];
};

const validator = async (options) => {
  const errors = [];

  if (options.numberOfPages === undefined) {
    errors.push(
      `Extraroutes parameter ${yellow(
        'numberOfPages'
      )} is missing from the config`
    );
  }

  if (options.numberOfPages && typeof options.numberOfPages !== 'number') {
    errors.push(
      `extraroutesPlugin plugin numberOfPages should be a number, not a ${typeof options.numberOfPages}`
    );
  }

  return errors;
};
registerPlugin('router', 'extra', extraRoutesPlugin, validator);
