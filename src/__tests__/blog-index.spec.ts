import {readFileSync} from 'fs';
import {join} from 'path';

describe('test static file', () => {
  it('check clean index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/blog/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = index
      .replace(/\_ng(content|host)(\-[A-Za-z0-9]{3}){2}/g, '')
      .replace(/ng\-version\=\".{5,30}\"/g, '');
    expect(cleanIndex).toMatchSnapshot();
  });
});
