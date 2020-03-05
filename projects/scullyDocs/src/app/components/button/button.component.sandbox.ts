import {sandboxOf} from 'angular-playground';
import {ButtonComponent} from './button.component';

export default sandboxOf(ButtonComponent).add('default', {
  template: `<nav>
                <app-button [text]="'GET STARTED'" [class]="''" [link]="'/blah'" [active]="true"></app-button>
              </nav>`,
});
