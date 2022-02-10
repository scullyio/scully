import { ApplicationRef, Component } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IdleMonitorService, isScullyGenerated, isScullyRunning } from '@scullyio/ng-lib';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentState = isScullyRunning() ? 'rendering inside scully' : isScullyGenerated() ? 'Loaded from static HTML' : 'SPA mode';
  constructor(
    private im: IdleMonitorService,
    private route: ActivatedRoute,
    private loc: Location,
    private router: Router,
    platformStrategy: LocationStrategy,
    private appRef: ApplicationRef
  ) {
    im.init();
    appRef.isStable.pipe(
      tap(stable => {
        console.log(`
        stable: ${stable}
        AppComponent: ${this.currentState}
        loc: ${this.loc.path(true)}
        url: ${this.route.snapshot.pathFromRoot.map(x => x.url).join('/')}
        route: ${this.router.url},
        ps: ${platformStrategy.constructor.name}
        `);
      })
    ); //.subscribe();
  }
}
