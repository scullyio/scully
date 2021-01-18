import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocsPageComponent } from './docs.page.component';

describe('DocsPageComponent', () => {
  let component: DocsPageComponent;
  let fixture: ComponentFixture<DocsPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DocsPageComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
