import {sandboxOf} from 'angular-playground';
import {LeftMenuComponent} from './left-menu.component';

export default sandboxOf(LeftMenuComponent).add('default', {
  template: `<app-left-menu></app-left-menu>`,
});
