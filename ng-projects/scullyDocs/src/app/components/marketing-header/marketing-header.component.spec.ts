import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MarketingHeaderComponent} from './marketing-header.component';

describe('MarketingHeaderComponent', () => {
  let component: MarketingHeaderComponent;
  let fixture: ComponentFixture<MarketingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
