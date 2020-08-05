import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildListComponent } from './child-list.component';

describe('ChildListComponent', () => {
  let component: ChildListComponent;
  let fixture: ComponentFixture<ChildListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
