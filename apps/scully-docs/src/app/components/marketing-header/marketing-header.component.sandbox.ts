import { sandboxOf } from 'angular-playground';
import { MarketingHeaderComponent } from './marketing-header.component';

export default sandboxOf(MarketingHeaderComponent).add('default', {
  template: `<app-marketing-header [text]="'Marekting Blurb Header'"></app-marketing-header>`
});
