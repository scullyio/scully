import { sandboxOf } from 'angular-playground';
import { CodeComponent } from './code.component';

// tslint:disable-next-line:variable-name
const _code = `const Prism = require('prismjs');
// The code snippet you want to highlight, as a string
const code = \`var data = 1;\`;

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');`;

export default sandboxOf(CodeComponent).add('default', {
  template: `<app-code [codeClass]="'language-typescript'" [codeText]="code"></app-code>`,
  context: {
    code: _code
  }
});
