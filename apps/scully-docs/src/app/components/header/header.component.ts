import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p class="header-title">{{ title }}</p>
  `
})
export class HeaderComponent {
  @Input() title: string;
}
