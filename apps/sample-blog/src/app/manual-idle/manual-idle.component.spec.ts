import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManualIdleComponent } from './manual-idle.component';

describe('ManualIdleComponent', () => {
  let component: ManualIdleComponent;
  let fixture: ComponentFixture<ManualIdleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManualIdleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
