import * as yargs from 'yargs';

export const {install, post, blog} =
  /** return the argv */
  yargs
    /** Install Scully */
    .boolean('i')
    .default('i', false)
    .alias('i', 'install')
    .describe('i', 'Use this flag for install scully in your project')
    /** Add a blog */
    .boolean('post')
    .default('post', false)
    .describe('post', 'Use this flag for add a blog post')
    /** Add a module */
    .boolean('blog')
    .default('blog', false)
    .alias('b', 'blog')
    .describe('blog', 'Use this flag for add a blog module').argv;

yargs.help();

const commandsArray = yargs.argv._.map(c => c.toLowerCase().trim());
