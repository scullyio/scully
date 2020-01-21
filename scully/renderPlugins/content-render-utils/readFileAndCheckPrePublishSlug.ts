import {readFileSync, writeFileSync} from 'fs';
import {stringify} from 'yamljs';
import {HandledRoute} from '../../routerPlugins/addOptionalRoutesPlugin';
import {randomString} from '../../utils/randomString';
const fm = require('front-matter');

export async function readFileAndCheckPrePublishSlug(file, route: HandledRoute) {
  const prependString = '___UNPUBLISHED___';
  const createSlug = () => `${prependString}${Date.now().toString(36)}_${randomString(32)}`;
  const originalFile = readFileSync(file, 'utf-8');
  const {attributes: meta, body: fileContent} = fm(originalFile);
  if (meta.hasOwnProperty('published') && meta.published === false) {
    /** this post needs an pre-publish slug */
    const slugs = Array.isArray(meta.slugs) ? meta.slugs : [];
    let slug = slugs.find((sl: string) => sl.startsWith(prependString));
    if (!slug) {
      /** there is no prepub slug so create one and update the file */
      slug = createSlug();
      meta.slugs = slugs.concat(slug);
      /** string literal, don't format "correctly" or things will break ;) */
      const newFile = `---
${stringify(meta)}
---
${fileContent}`;
      writeFileSync(file, newFile);
    }
    /** replace the route with the prepub slug */
    const updatedRoute = replaceRouteWithSlug(route.route, slug);
    route.route = updatedRoute;
  } else if (typeof meta.slug === 'string') {
    route.route = replaceRouteWithSlug(
      // TODO better handling of url/filename escaping
      route.route,
      encodeURIComponent(
        meta.slug
          .trim()
          .split('/')
          .join('_')
          .split(' ')
          .join('_')
          .split('?')
          .join('_')
      )
    );
  }
  return {meta, fileContent};
}

function replaceRouteWithSlug(route: string, slug: string) {
  const lastPart = route.split('/').pop();
  return route.replace(lastPart, slug);
}
