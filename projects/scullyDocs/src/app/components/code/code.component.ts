import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code',
  template: `
    <pre><code class="{{codeClass}}"><span>{{codeText}}</span></code></pre>
  `,
})
export class CodeComponent {
  @Input() codeClass: string;
  @Input() codeText: string;
}
