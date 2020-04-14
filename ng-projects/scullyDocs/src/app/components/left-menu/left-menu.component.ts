import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
})
export class LeftMenuComponent {
  @Input() list: any[];
  @Input() first = true;
  url: string;
}
