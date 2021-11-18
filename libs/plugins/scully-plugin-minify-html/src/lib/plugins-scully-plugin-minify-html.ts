import { registerPlugin, getMyConfig } from '@scullyio/scully';
import { minify, Options } from 'html-minifier-terser';

export const minifyHtml = 'minifyHtml';

export interface MinifyHtmlOptions {
  minifyOptions: Options;
}

const defaultMinifyOptions: Options = {
  caseSensitive: true,
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  minifyJS: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
  // scully specific HTML comments
  // this will always be added in the final minifyOptions config
  ignoreCustomComments: [
    /scullyContent-(begin|end)/,
  ],
  // scully specific data injection
  // this will always be added in the final minifyOptions config
  ignoreCustomFragments: [
    /<script id="ScullyIO-transfer-state">[.\s\S]*<\/script>/,
  ],
};

const minifyHtmlPlugin = (html: string): Promise<string> => {
  let localMinifyOptions = defaultMinifyOptions;
  const customMinifyOptions = getMyConfig<MinifyHtmlOptions>(minifyHtmlPlugin);

  if (customMinifyOptions && customMinifyOptions.minifyOptions) {
    localMinifyOptions = {
      ...defaultMinifyOptions,
      ...customMinifyOptions.minifyOptions,
      ignoreCustomComments: [
        ...defaultMinifyOptions.ignoreCustomComments,
        ...(customMinifyOptions.minifyOptions.ignoreCustomComments ? customMinifyOptions.minifyOptions.ignoreCustomComments : []),
      ],
      ignoreCustomFragments: [
        ...defaultMinifyOptions.ignoreCustomFragments,
        ...(customMinifyOptions.minifyOptions.ignoreCustomFragments ? customMinifyOptions.minifyOptions.ignoreCustomFragments : []),
      ],
    };
  }

  return minify(html, localMinifyOptions);
};

registerPlugin('postProcessByHtml', minifyHtml, minifyHtmlPlugin);
