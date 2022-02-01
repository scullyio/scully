import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, tap } from 'rxjs';

@Component({
  selector: 'scullyio-tss-resolver',
  templateUrl: './tss-resolver.component.html',
  styleUrls: ['./tss-resolver.component.css'],
})
export class TssResolverComponent implements OnInit {
  user$ = this.route.data.pipe(pluck('user'));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
