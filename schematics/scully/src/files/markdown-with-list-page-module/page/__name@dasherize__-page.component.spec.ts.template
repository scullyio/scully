import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>PageComponent } from './<%= dasherize(name) %>-page.component';

describe('<%= classify(name) %>PageComponent', () => {
  let component: <%= classify(name) %>PageComponent;
  let fixture: ComponentFixture<<%= classify(name) %>PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= classify(name) %>PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
