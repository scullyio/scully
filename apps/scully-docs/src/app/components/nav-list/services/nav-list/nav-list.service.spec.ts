import { TestBed } from '@angular/core/testing';

import { NavListService } from './nav-list.service';

describe('NavListService', () => {
  let service: NavListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
