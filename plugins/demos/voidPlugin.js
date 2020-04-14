const {configValidator, registerPlugin} = require('../../dist/scully');

const voidPlugin = async (route, options) => {
  /**
   * I don't do anything here,
   * just return an empty array
   * as that will effectively remove the route from the list
   * */
  return [];
};

const validator = async conf => [];
registerPlugin('router', 'void', voidPlugin, validator);
