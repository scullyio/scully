import {readdir, lstatSync, readFileSync} from 'fs';
import {basename, extname, join, sep} from 'path';
import {registerPlugin} from '../pluginManagement/pluginRepository';
import {readFileAndCheckPrePublishSlug} from '../renderPlugins/content-render-utils/readFileAndCheckPrePublishSlug';
import {scullyConfig} from '../utils/config';
import {RouteTypeContentFolder} from '../utils/interfacesandenums';
import {log, logWarn, yellow} from '../utils/log';
import {HandledRoute} from './addOptionalRoutesPlugin';

export async function contentFolderPlugin(
  angularRoute: string,
  conf: RouteTypeContentFolder
): Promise<HandledRoute[]> {
  const parts = angularRoute.split('/');
  /** for now, just handle the First parameter. Not sure if/how we can handle multiple ones. */
  const param = parts.filter(p => p.startsWith(':')).map(id => id.slice(1))[0];
  const paramConfig = conf[param];
  if (!paramConfig) {
    console.error(`missing config for parameters (${param}) in route: ${angularRoute}. Skipping`);
    return [];
  }
  const baseRoute = angularRoute.split(':' + param)[0];
  const path = join(scullyConfig.homeFolder, paramConfig.folder);
  log(`Finding files in folder "${yellow(path)}"`);
  return await checkSourceIsDirectoryAndRun(path, baseRoute, conf);
}

async function checkSourceIsDirectoryAndRun(path, baseRoute, conf) {
  const files = await new Promise<string[]>(resolve => readdir(path, (err, data) => resolve(data)));
  const handledRoutes: HandledRoute[] = [];
  for (const sourceFile of files) {
    const ext = extname(sourceFile);
    const templateFile = join(path, sourceFile);
    if (lstatSync(templateFile).isDirectory()) {
      handledRoutes.push(...(await checkSourceIsDirectoryAndRun(templateFile, baseRoute, conf)));
    } else {
      if (checkIfEmpty(templateFile)) {
        logWarn(`The file ${templateFile} is empty, scully will ignore.`);
      } else {
        handledRoutes.push(...(await addHandleRoutes(sourceFile, baseRoute, templateFile, conf, ext)));
      }
    }
  }
  return handledRoutes;
}

function checkIfEmpty(templateFile: string) {
  try {
    const file = readFileSync(templateFile).toString();
    return file.length === 0 ? true : false;
  } catch (e) {
    return false;
  }
}

async function addHandleRoutes(sourceFile, baseRoute, templateFile, conf, ext) {
  const handledRoutes = [];
  const base = basename(sourceFile, ext);
  // if a subfolder we need add a route for this folder
  let routify = frag => `${baseRoute}${slugify(frag)}`;
  // replace \ for / for windows
  const newTemplateFile = templateFile.split('\\').join('/');
  if (!newTemplateFile.endsWith(`${baseRoute}${sourceFile}`)) {
    const position = newTemplateFile.search(baseRoute);
    const br = newTemplateFile.substr(position).replace(sourceFile, '');
    routify = frag => `${br}${slugify(frag)}`;
  }
  // is a folder we need iterate the content in the folder
  const {meta, prePublished} = await readFileAndCheckPrePublishSlug(templateFile);
  const name = conf.name;
  const handledRoute: HandledRoute = {
    route: routify(meta.slug || base),
    type: conf.type,
    templateFile,
    data: {name, ...meta, sourceFile},
  };
  handledRoutes.push(handledRoute);
  if (!prePublished && Array.isArray(meta.slugs)) {
    /** also add routes for all available slugs */
    meta.slugs
      .filter(slug => typeof slug === 'string')
      .map(routify)
      .forEach(route => handledRoutes.push({...handledRoute, route}));
  }
  return handledRoutes;
}

export function slugify(frag: string): string {
  return encodeURIComponent(
    frag
      .trim()
      .split('/')
      .join('_')
      .split(' ')
      .join('_')
      .split('?')
      .join('_')
  );
}

// TODO actual validation of the config
const configValidator = async conf => {
  // return [yellow('all seems ok')];
  return [];
};

registerPlugin('router', 'contentFolder', contentFolderPlugin, configValidator);
