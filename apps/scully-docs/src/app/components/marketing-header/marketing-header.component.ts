import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marketing-header',
  template: `
    <h1>{{ text }}</h1>
  `
})
export class MarketingHeaderComponent {
  @Input() text: string;
}
