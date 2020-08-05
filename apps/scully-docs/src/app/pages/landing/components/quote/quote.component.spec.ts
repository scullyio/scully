import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingQuoteComponent } from './quote.component';

describe('LandingQuoteComponent', () => {
  let component: LandingQuoteComponent;
  let fixture: ComponentFixture<LandingQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingQuoteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
