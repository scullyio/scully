import { sandboxOf } from 'angular-playground';
import { BookComponent } from './book.component';

export default sandboxOf(BookComponent).add('default', {
  template: `<app-book
                    [header]=" 'Guides' "
                    [text]=" 'Easy step by step guides to help get you started.' ">
                </app-book>`
});
