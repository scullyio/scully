import { sandboxOf } from 'angular-playground';
import { LeftMenuComponent } from './left-menu.component';

// tslint:disable-next-line:variable-name
const _list = [
  {
    title: 'getting Started',
    list: [
      { title: 'Prerequisites', url: '/getting-started/prerequisites' },
      { title: 'Instalation', url: '/getting-started/instalation' },
      { title: 'Setup', url: '/getting-started/setup' }
    ]
  },
  { title: 'Tutorial', url: '/tutorial' },
  { title: 'Command Line', url: '/command-line' }
];

export default sandboxOf(LeftMenuComponent).add('default', {
  template: `<app-left-menu [list]="list"></app-left-menu>`,
  context: {
    list: _list
  }
});
