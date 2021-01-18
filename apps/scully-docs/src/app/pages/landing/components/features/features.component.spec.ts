import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LandingFeaturesComponent } from './features.component';

describe('LandingFeaturesComponent', () => {
  let component: LandingFeaturesComponent;
  let fixture: ComponentFixture<LandingFeaturesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LandingFeaturesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
