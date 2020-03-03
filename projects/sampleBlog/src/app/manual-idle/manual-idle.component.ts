import {Component, OnInit} from '@angular/core';
import {IdleMonitorService} from '@scullyio/ng-lib';

declare global {
  interface Window {
    scullyManualIdle: boolean;
  }
}

@Component({
  selector: 'app-manual-idle',
  templateUrl: './manual-idle.component.html',
  styleUrls: ['./manual-idle.component.css'],
})
export class ManualIdleComponent implements OnInit {
  text = 'this text is displayed by automated detection';

  constructor(private ims: IdleMonitorService) {}

  ngOnInit(): void {
    setTimeout(() => (this.text = 'manualIdle'), 10 * 1000);
    setTimeout(() => this.ims.fireManualMyAppReadyEvent(), 11 * 1000);
  }
}
