import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-component',
  template: `<h1>Content component</h1>
    <scully-content></scully-content> `
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
