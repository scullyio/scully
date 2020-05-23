import { mergePaths } from './merge-paths';

describe('mergePaths', () => {
  it('should return correct concatenated path', () => {
    expect(mergePaths('/about', '/index.html')).toBe('about/index.html');
  });

  it('should return correct concatenated path when base ends with slash and path starts with slash', () => {
    expect(mergePaths('/about/', '/index.html')).toBe('about/index.html');
  });

  it('should return correct concatenated path when base does not end with slash and path does not start with slash', () => {
    expect(mergePaths('/about', 'index.html')).toBe('about/index.html');
  });

  it('should return correct concatenated path when base is a slash and path does not start with slash', () => {
    expect(mergePaths('/', '/index.html')).toBe('/index.html');
  });
});
