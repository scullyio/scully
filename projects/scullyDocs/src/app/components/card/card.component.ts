import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() alt: string;
  @Input() iconUrl: string;
  @Input() header: string;
  @Input() text: string;

  isSvg: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isSvg = this.checkIconFormat();
  }

  private checkIconFormat(): boolean {
    if (this.iconUrl) {
      return this.iconUrl.substring(this.iconUrl.length - 3) === 'svg';
    } else {
      return false;
    }
  }
}
