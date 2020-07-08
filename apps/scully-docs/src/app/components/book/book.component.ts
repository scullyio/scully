import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() header: string;
  @Input() text: string;
  @Input() href: string;

  constructor() {}

  ngOnInit(): void {}
}
