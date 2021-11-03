import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private srs: ScullyRoutesService) {}

  async ngOnInit() {
    const cur = await firstValueFrom(this.srs.getCurrent())
    console.log(cur);
  }
}
