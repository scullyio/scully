import {sandboxOf} from 'angular-playground';
import {ButtonComponent} from './button.component';

export default sandboxOf(ButtonComponent)
  .add('default', {
    template: `<app-button [text]="'Default'" [class]="''" [link]="'/blah'"></app-button>`,
  })
  .add('nav-select-active', {
    template: `<nav>
                <app-button [text]="'GET STARTED'" [class]="'router-link-active'" [link]="'/blah'" [active]="true"></app-button>
             </nav>`,
  })
  .add('nav-default-inactive', {
    template: `<nav>
                <app-button [text]="'Features'" [class]="'btn-secondary'" [link]="'/blah'" [active]="false"></app-button>
             </nav>`,
  })
  .add('invert', {
    template: `<nav>
                <app-button [text]="'GET STARTED'" [class]="'btn-invert'" [link]="'/blah'" [active]="false"></app-button>
             </nav>`,
  })
  .add('full-menu', {
    template: `
             <nav>
                <app-button [text]="'GET STARTED'" [class]="'router-link-active'" [link]="'/blah'" [active]="true"></app-button>
                <app-button [text]="'Features'" [class]="'btn-secondary'" [link]="'/blah'" [active]="false"></app-button>
             </nav>
    `,
  });
