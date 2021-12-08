import { join } from 'path';
// import { config } from './scully/scully.sample-blog.config.js';

const configPath = join(process.cwd(), './scully/scully.sample-blog.config.js');

export const config = (async () => {
  const { config } = await import(configPath);
  return config;
})();
