import {Component} from '@angular/core';
import { IdleMonitorService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sampleBlog';
  constructor(private idle: IdleMonitorService) {}
}
