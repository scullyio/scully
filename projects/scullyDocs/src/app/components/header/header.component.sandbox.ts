import {sandboxOf} from 'angular-playground';
import {HeaderComponent} from './header.component';

export default sandboxOf(HeaderComponent).add('default', {
  template: `<app-header [title]="'Hero Tagline'"></app-header>`,
});
