import { sandboxOf } from 'angular-playground';
import { HrComponent } from './hr.component';

export default sandboxOf(HrComponent).add('default', {
  template: `<app-hr></app-hr>`
});
