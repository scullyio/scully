import {scullyInstall} from './install';
import {addScullyScripts} from './npm';
import {createConfigFile} from './utils/utils';

scullyInstall();
addScullyScripts();
createConfigFile();
