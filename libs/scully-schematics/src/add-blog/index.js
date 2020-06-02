'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tasks_1 = require('@angular-devkit/schematics/tasks');
function default_1(options) {
  return (tree, context) => {
    const markdownOptions = {
      name: 'blog',
      slug: 'slug',
      sourceDir: 'blog',
      route: 'blog',
      project: options.project,
    };
    if (options.routingScope) {
      markdownOptions.routingScope = options.routingScope;
    }
    context.addTask(new tasks_1.RunSchematicTask('create-markdown', markdownOptions), []);
  };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
