/**
 * Do an es6 like template rendering during runtime.
 * It only replaces properties available in the context, it does not execute any JS
 * @param string template that looks like an es6 template string
 * @param context An object that provides the values for the template, or an callback fn that returns an object.
 */
export function renderTemplate(unhandledRoute: string, context: any): string {
  if (typeof context === 'function') {
    context = context();
  }
  if (Array.isArray(context) || typeof context !== 'object') {
    throw new Error(`renderTemplate only accepts objects or functions as it's context`);
  }
  const result = _recursive_rendering(unhandledRoute, context, '');
  // tslint:disable-next-line:no-unused-expression
  if (result.includes('${') && result.includes('}')) {
    console.warn(`Not able to to find all parameters in context for:\n\`${unhandledRoute}\`\nContext:`, context);
  }
  return result;
}
/**
 * Recursive rendering internal function re recuse until there is nothing more to replace.F
 * @param string
 * @param context
 * @param stack
 * @returns rendering
 */
function _recursive_rendering(string: string, context: any, stack: string): string {
  return Object.keys(context).reduce(function (accumulator, key) {
    const newStack = stack ? stack + '.' : '';
    const find = `\\$\\{\\s*${newStack + key}\\s*\\}`;
    const re = new RegExp(find, 'g');
    if (typeof context[key] === 'object') {
      return _recursive_rendering(accumulator, context[key], newStack + key);
    }
    return accumulator.replace(re, context[key]);
  }, string);
}
