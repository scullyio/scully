import {readdir} from 'fs';
import {basename, extname, join} from 'path';
import {configValidator, registerPlugin} from '../pluginManagement/pluginRepository';
import {scullyConfig} from '../utils/config';
import {RouteTypeContentFolder} from '../utils/interfacesandenums';
import {log, yellow} from '../utils/log';
import {HandledRoute} from './addOptionalRoutesPlugin';

async function contentFolderPlugin(
  route: string,
  conf: RouteTypeContentFolder
): Promise<HandledRoute[]> {
  const parts = route.split('/');
  /** for now, just handle the First parameter. Not sure if/how we can handle multiple ones. */
  const param = parts.filter(p => p.startsWith(':')).map(id => id.slice(1))[0];
  const paramConfig = conf[param];
  if (!paramConfig) {
    console.error(`missing config for parameters (${param}) in route: ${route}. Skipping`);
    return [];
  }
  const baseRoute = route.split(':' + param)[0];
  const path = join(scullyConfig.homeFolder, paramConfig.folder);
  log(`Finding files in folder "${yellow(path)}"`);
  const files = await new Promise<string[]>(resolve => readdir(path, (err, data) => resolve(data)));
  return files.map<HandledRoute>(file => {
    const ext = extname(file);
    const base = basename(file, ext);
    return {
      route: `${baseRoute}${base}`,
      type: conf.type,
      templateFile: join(path, file),
    };
  });
}

// TODO actual validation of the config
contentFolderPlugin[configValidator] = async conf => {
  // return [yellow('all seems ok')];
  return [];
};

registerPlugin('router', 'contentFolder', contentFolderPlugin);
