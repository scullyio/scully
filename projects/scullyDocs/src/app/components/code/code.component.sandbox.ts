import {sandboxOf} from 'angular-playground';
import {CodeComponent} from './code.component';

export default sandboxOf(CodeComponent).add('default', {
  template: `<app-code></app-code>`,
});
