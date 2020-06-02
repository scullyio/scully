'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', {value: true});
const schematics_1 = require('@angular-devkit/schematics');
const guess_parser_1 = require('guess-parser');
const utils_1 = require('../utils/utils');
exports.default = options => {
  return schematics_1.chain([routeDiscovery(options)]);
};
const routeDiscovery = options => (tree, context) =>
  __awaiter(void 0, void 0, void 0, function*() {
    let routes = [];
    const projectName = utils_1.getProject(tree, options.project);
    try {
      routes = guess_parser_1.parseAngularRoutes(projectName).map(r => r.path);
    } catch (e) {
      const allRoutes = routes;
      if (allRoutes.findIndex(r => r === '') === -1) {
        console.log('error');
      }
    }
    console.log(routes);
    /**
     * read the scully.{{nameProject}}.config.js for check if
     * not exist the route, add into the file with the `type: 'ignored'`
     */
    // @ts-ignore
    const scullyConfigFile = utils_1.getScullyConfig(tree, options.project);
    const scullyJs = utils_1.getFileContents(tree, scullyConfigFile);
    if (!scullyJs) {
      context.logger.error(`No scully configuration file found ${scullyConfigFile}`);
    }
    let newScullyJs = '';
    routes.forEach(route => {
      if (+scullyJs.search(route) < 0) {
        const addRoute = `\n    '${route}': {\n     type: 'ignored'\n     },`;
        if (+scullyJs.search(/routes: \{/g) > 0) {
          const position = +scullyJs.search(/routes: \{/g) + 'routes: {'.length;
          newScullyJs = [scullyJs.slice(0, position), addRoute, scullyJs.slice(position)].join('');
        } else if (+scullyJs.search(/routes:\{/g) > 0) {
          const position = +scullyJs.search(/routes:\{/g) + 'routes:{'.length;
          newScullyJs = [scullyJs.slice(0, position), addRoute, scullyJs.slice(position)].join('');
        }
      } else {
        console.log(`the ${route} exist.`);
      }
    });
    newScullyJs = newScullyJs === '' ? scullyJs : newScullyJs;
    console.log(newScullyJs);
    tree.overwrite(scullyConfigFile, newScullyJs);
  });
//# sourceMappingURL=index.js.map
