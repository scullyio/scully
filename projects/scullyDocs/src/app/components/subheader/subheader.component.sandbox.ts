import {sandboxOf} from 'angular-playground';
import {SubheaderComponent} from './subheader.component';

export default sandboxOf(SubheaderComponent).add('default', {
  template: `<app-subheader [title]="'HERO SUBHEADER'"></app-subheader>`,
});
