import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib-v8';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private srs: ScullyRoutesService) {}

  async ngOnInit() {
    const cur = await this.srs
      .getCurrent()
      .pipe(take(1))
      .toPromise();
    console.log(cur);
  }
}
