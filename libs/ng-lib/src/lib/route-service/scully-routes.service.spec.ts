import { TestBed } from '@angular/core/testing';

import { ScullyRoutesService } from './scully-routes.service';

describe('ScullyRoutesService', () => {
  let service: ScullyRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScullyRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
