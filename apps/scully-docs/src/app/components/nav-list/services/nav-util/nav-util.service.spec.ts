import { TestBed } from '@angular/core/testing';

import { NavUtilService } from './nav-util.service';

describe('NavUtilService', () => {
  let service: NavUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
