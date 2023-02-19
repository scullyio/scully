import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExcludeComponent } from './exclude.component';

describe('ExcludeComponent', () => {
  let component: ExcludeComponent;
  let fixture: ComponentFixture<ExcludeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExcludeComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
