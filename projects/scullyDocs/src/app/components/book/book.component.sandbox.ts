import {sandboxOf} from 'angular-playground';
import {BookComponent} from './book.component';

export default sandboxOf(BookComponent).add('default', {
  template: `<app-book></app-book>`,
});
