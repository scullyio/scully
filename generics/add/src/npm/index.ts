// add script from scully to packages.json
import {getPackageJson, overwritePackageJson} from '../utils/utils';

export const addScullyScripts = () => {
  getPackageJson().then((jsonContent: any) => {
    if (jsonContent === undefined) {
      console.error('error not content into package.json');
      return;
    }
    jsonContent.scripts.scully = 'scully';
    jsonContent.scripts['scully:serve'] = 'scully serve';
    // create script for library
    jsonContent.scripts['scully:create'] = 'scullyCreate serve --react --vue';

    overwritePackageJson(jsonContent).then(ret => {
      if (ret) {
        // tslint:disable-next-line:no-console
        console.info('✅️ Update package.json');
      }
    });
  });
};
