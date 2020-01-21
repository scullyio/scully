import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IdleMonitorService } from './idle-monitor.service';

describe('IdleMonitorService', () => {
  let service: IdleMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
    });
    service = TestBed.inject(IdleMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
