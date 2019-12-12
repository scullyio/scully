import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScullyContentComponent } from './scully-content.component';

describe('ScullyContentComponent', () => {
  let component: ScullyContentComponent;
  let fixture: ComponentFixture<ScullyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScullyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScullyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
