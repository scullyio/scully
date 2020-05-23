import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  template: `
    <p class="subheader-title">{{ title }}</p>
  `
})
export class SubheaderComponent {
  @Input() title: string;
}
