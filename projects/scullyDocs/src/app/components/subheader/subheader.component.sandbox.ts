import {sandboxOf} from 'angular-playground';
import {SubheaderComponent} from './subheader.component';

export default sandboxOf(SubheaderComponent).add('default', {
  template: `<app-subheader></app-subheader>`,
});
