import {Component} from '@angular/core';
import {IdleMonitorService, isScullyGenerated, isScullyRunning} from '@scullyio/ng-lib-v8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentState = isScullyRunning()
    ? 'rendering inside scully'
    : isScullyGenerated()
    ? 'Loaded from static HTML'
    : 'SPA mode';
  constructor(private idle: IdleMonitorService) {}
}
