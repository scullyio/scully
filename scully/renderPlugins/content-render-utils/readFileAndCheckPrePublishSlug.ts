import {readFileSync, writeFileSync} from 'fs';
import {stringify} from 'yamljs';
import {randomString} from '../../utils/randomString';
const fm = require('front-matter');

export interface ContentMetaData {
  author?: string;
  published?: boolean;
  slug?: string;
  'publish date'?: Date;
  slugs?: string[];
  title?: string;
  [key: string]: any;
}

export async function readFileAndCheckPrePublishSlug(file) {
  const prependString = '___UNPUBLISHED___';
  const createSlug = () => `${prependString}${Date.now().toString(36)}_${randomString(32)}`;
  const originalFile = readFileSync(file, 'utf-8');
  const {attributes: meta, body: fileContent}: {attributes: ContentMetaData; body: string} = fm(originalFile);
  let prePublished = false;
  if (meta.hasOwnProperty('published') && meta.published === false) {
    /** this post needs an pre-publish slug */
    const slugs = Array.isArray(meta.slugs) ? meta.slugs : [];
    let unPublishedSlug = slugs.find((sl: string) => sl.startsWith(prependString));
    if (!unPublishedSlug) {
      /** there is no prepub slug so create one and update the file */
      unPublishedSlug = createSlug();
      meta.slugs = slugs.concat(unPublishedSlug);
      /** string literal, don't format "correctly" or things will break ;) */
      const newFile = `---
${stringify(meta)}
---
${fileContent}`;
      writeFileSync(file, newFile);
    }
    /** overwrite slug from file with prepub only in memory. we don't want a file with the original slug name now. */
    meta.slug = unPublishedSlug;
    prePublished = true;
  }
  return {meta, fileContent, prePublished};
}
