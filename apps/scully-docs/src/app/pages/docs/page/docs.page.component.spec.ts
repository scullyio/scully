import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsPageComponent } from './docs.page.component';

describe('DocsPageComponent', () => {
  let component: DocsPageComponent;
  let fixture: ComponentFixture<DocsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
