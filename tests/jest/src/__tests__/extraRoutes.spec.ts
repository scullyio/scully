import {readFileSync} from 'fs';
import {join, sep} from 'path';

describe('extraRoutes', () => {
  it('should add extraRoutes into the routes to be rendered', () => {
    let fileExists = false;

    // The route /excluded/present was removed in the scully.sampleBlog.config.guessParserOptions.excludedFiles
    // but then was added back in via the scully.sampleBlog.config.extraRoutes. Since it is a valid route,
    // Angular can render it which means it should render
    try {
      readFileSync(join(__dirname, '../../../../dist/static/exclude/present/index.html'), 'UTF8');
      fileExists = true;
    } catch ({message, code, path}) {
      if (code === 'ENOENT' && path && path.endsWith(`${sep}present${sep}index.html`)) {
        fileExists = false;
      }
    }
    expect(fileExists).toBe(true);
  });
});
