import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPageComponent } from './doc-page.component';

describe('DocPageComponent', () => {
  let component: DocPageComponent;
  let fixture: ComponentFixture<DocPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
