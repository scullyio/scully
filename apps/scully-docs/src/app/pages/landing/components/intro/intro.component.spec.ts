import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingIntroComponent } from './intro.component';

describe('LandingIntroComponent', () => {
  let component: LandingIntroComponent;
  let fixture: ComponentFixture<LandingIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingIntroComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
