const {registerPlugin, logWarn} = require('../../dist/scully');

const errorPlugin = async (html, options) => {
  try {
    throw new Error(`new error`);
  } catch (e) {
    logWarn(`errorPlugin works!`);
  }
  return undefined;
};

const validator = async config => [];
registerPlugin('render', 'errorPlugin', errorPlugin, validator);
