import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManualIdleComponent} from './manual-idle.component';

describe('ManualIdleComponent', () => {
  let component: ManualIdleComponent;
  let fixture: ComponentFixture<ManualIdleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManualIdleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
