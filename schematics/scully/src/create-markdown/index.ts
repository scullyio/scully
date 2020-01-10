import {Rule, Tree, url, applyTemplates, move, chain, SchematicContext} from '@angular-devkit/schematics';
import {strings, normalize} from '@angular-devkit/core';
import {Schema} from './schema';
import {Schema as PostSchema} from '../add-post/schema';
import {
  addRouteToModule,
  addRouteToScullyConfig,
  applyWithOverwrite,
  getPrefix,
  getSrc,
  getFileContents,
} from '../utils/utils';
import {RunSchematicTask} from '@angular-devkit/schematics/tasks';

const SCULLY_CONF_FILE = '/scully.config.js';
const ANGULAR_CONF_FILE = './angular.json';

export default function(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    try {
      const sourceDir = getSrc(host);
      const name = options.name ? options.name : 'blog';
      const nameDasherized = strings.dasherize(options.name);
      const targetDirName = options.sourceDir
        ? strings.dasherize(options.sourceDir) // use sourceDir when provided
        : strings.dasherize(options.name); // fall back to name when not provided
      const date = new Date();
      // format yyyy-mm-dd
      const fullDay = date.toISOString().substring(0, 10);
      const baseFileName = `${fullDay}-${nameDasherized}`;
      if (!host.exists(`${targetDirName}/${baseFileName}.md`)) {
        const postOptions: PostSchema = {
          name: baseFileName,
          target: targetDirName,
        };
        context.addTask(new RunSchematicTask('post', postOptions), []);
      }

      const scullyJs =
        getFileContents(host, SCULLY_CONF_FILE) ||
        `exports.config = {
  projectRoot: "${getSrc(host)}/app",
  routes: {
  },
};`;
      const newScullyJs = addRouteToScullyConfig(scullyJs, {
        name,
        slug: options.slug,
        type: 'contentFolder',
        sourceDir,
        route: options.route,
      });

      host.overwrite(SCULLY_CONF_FILE, newScullyJs);
      context.logger.info(`✅️ Update ${SCULLY_CONF_FILE}`);

      const pathName = strings.dasherize(`${sourceDir}/app/${name}`);
      let prefix = 'app';
      if (host.exists(ANGULAR_CONF_FILE)) {
        prefix = getPrefix(host.read(ANGULAR_CONF_FILE).toString());
        addRouteToModule(host, options);
      }

      const templateSource = applyWithOverwrite(url('../files/markdown-module'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
          slug: options.slug,
          prefix,
        }),
        move(normalize(pathName)),
      ]);

      return chain([templateSource]);
    } catch (e) {}
  };
}
