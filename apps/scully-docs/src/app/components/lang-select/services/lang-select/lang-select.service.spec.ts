import { TestBed } from '@angular/core/testing';

import { LangSelectService } from './lang-select.service';

describe('LangSelectService', () => {
  let service: LangSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
