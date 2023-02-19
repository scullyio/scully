import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlowComponent } from './slow.component';

describe('SlowComponent', () => {
  let component: SlowComponent;
  let fixture: ComponentFixture<SlowComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SlowComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
