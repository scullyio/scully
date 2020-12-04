#!/usr/bin/env node

/**
 * The above line is needed to be able to run in npx and CI.
 */
const { log, yellow } = require('./dist/libs/scully');

log(`I like ${yellow('yellow')}`);
log(process.eventNames().join('\n'));
