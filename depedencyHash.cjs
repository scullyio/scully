#!/usr/bin/env node

const { createHash } = require('crypto');
const pkg = require('./package.json');
const { version, dependencies, devDependencies } = pkg;

const hash = createHash('sha256');
/** create a hash that is depending on _what_ depedencies are used, not on version or complete package.json */
hash.update(JSON.stringify({ dependencies, devDependencies }));

/** display it in the special format so GA can pick up the var */
console.log(`::set-output name=dependencyHash::${hash.digest('hex')}`);
