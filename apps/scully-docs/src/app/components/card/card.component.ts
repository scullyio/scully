import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() alt: string;
  @Input() iconUrl: string;
  @Input() header: string;
  @Input() text: string;
  @Input() invertColors?: boolean;
  @Input() toWhite = false;

  isSvg: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.invertColors) {
      this.isSvg = this.checkIconFormat();
    }
  }

  private checkIconFormat(): boolean {
    if (this.iconUrl) {
      return this.iconUrl.substring(this.iconUrl.length - 3) === 'svg';
    } else {
      return false;
    }
  }
}
