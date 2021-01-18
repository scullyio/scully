import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LandingResourcesComponent } from './resources.component';

describe('LandingResourcesComponent', () => {
  let component: LandingResourcesComponent;
  let fixture: ComponentFixture<LandingResourcesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LandingResourcesComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
