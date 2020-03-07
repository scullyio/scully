import {sandboxOf} from 'angular-playground';
import {CardComponent} from './card.component';

export default sandboxOf(CardComponent).add('default', {
  template: `<app-card></app-card>`,
});
