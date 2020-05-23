import {
  Rule,
  Tree,
  chain,
  SchematicContext
} from '@angular-devkit/schematics';
import { Schema } from './schema';
import { parseAngularRoutes } from 'guess-parser';
import { getFileContents, getProject, getScullyConfig } from '../utils/utils';

export default (options: Schema): Rule => {
  return chain([routeDiscovery(options)]);
};

const routeDiscovery = (options: Schema) => async (
  tree: Tree,
  context: SchematicContext
) => {
  let routes: any[] | string[] = [];
  const projectName = getProject(tree, options.project);
  try {
    routes = parseAngularRoutes(projectName).map(r => r.path);
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
  const scullyConfigFile = getScullyConfig(tree, options.project);
  const scullyJs = getFileContents(tree, scullyConfigFile);
  if (!scullyJs) {
    context.logger.error(
      `No scully configuration file found ${scullyConfigFile}`
    );
  }

  let newScullyJs = '';
  routes.forEach(route => {
    if (+scullyJs.search(route) < 0) {
      const addRoute = `\n    '${route}': {\n     type: 'ignored'\n     },`;
      if (+scullyJs.search(/routes: \{/g) > 0) {
        const position = +scullyJs.search(/routes: \{/g) + 'routes: {'.length;
        newScullyJs = [
          scullyJs.slice(0, position),
          addRoute,
          scullyJs.slice(position)
        ].join('');
      } else if (+scullyJs.search(/routes:\{/g) > 0) {
        const position = +scullyJs.search(/routes:\{/g) + 'routes:{'.length;
        newScullyJs = [
          scullyJs.slice(0, position),
          addRoute,
          scullyJs.slice(position)
        ].join('');
      }
    } else {
      console.log(`the ${route} exist.`);
    }
  });
  newScullyJs = newScullyJs === '' ? scullyJs : newScullyJs;
  console.log(newScullyJs);
  tree.overwrite(scullyConfigFile, newScullyJs);
};
