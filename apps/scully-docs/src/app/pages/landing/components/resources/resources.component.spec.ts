import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingResourcesComponent } from './resources.component';

describe('LandingResourcesComponent', () => {
  let component: LandingResourcesComponent;
  let fixture: ComponentFixture<LandingResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingResourcesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
