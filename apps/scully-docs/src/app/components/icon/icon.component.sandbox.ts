import { sandboxOf } from 'angular-playground';
import { IconComponent } from './icon.component';

export default sandboxOf(IconComponent).add('default', {
  template: `<app-icon></app-icon>`
});
