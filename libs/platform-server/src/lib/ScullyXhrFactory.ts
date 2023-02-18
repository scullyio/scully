import { XhrFactory } from '@angular/common';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const xhr2 = require('xhr2');

export class ScullyXhrFactory implements XhrFactory {
  build() {
    return new xhr2.XMLHttpRequest();
  }
}
