import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
})
export class LeftMenuComponent {
  @Input() set list(_list: any[]) {
    this.fullList.push(..._list);
    this.changeLang();
  }
  @Input() first = true;
  url: string;
  lang = 'en';
  showList = [];
  private fullList = [];

  changeLang() {
    this.showList = [];
    if (this.fullList) {
      this.fullList.forEach(post => {
        if (post.lang === this.lang) {
          this.showList.push(post);
        }
      });
    }
  }
}
