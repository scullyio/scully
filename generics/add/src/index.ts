#!/usr/bin/env node

import {scullyInstall} from './install';
import {addScullyScripts} from './npm';
import {createConfig} from './utils/utils';

scullyInstall();
addScullyScripts();
createConfig();

// tslint:disable-next-line:no-console
console.info(`
Now you can use Scully in your project.
For mor information please visit https://scully.io.
`);
