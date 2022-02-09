import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TssResolverComponent } from './tss-resolver.component';

describe('TssResolverComponent', () => {
  let component: TssResolverComponent;
  let fixture: ComponentFixture<TssResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TssResolverComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TssResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
