import { TestBed } from '@angular/core/testing';

import { IdleMonitorService } from './idle-monitor.service';

describe('IdleMonitorService', () => {
  let service: IdleMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdleMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
