import {Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  elm = this.elmRef.nativeElement as HTMLElement;
  @Input() text: string;
  @Input() class: string;
  @Input() active: boolean;
  @Input() link: string;

  constructor(private elmRef: ElementRef) {}

  ngOnInit(): void {
    if (this.elm) {
      this.elm.setAttribute('tabindex', '-1');
    }
  }
}
