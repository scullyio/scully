import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ScullyContentComponent } from './scully-content.component';

describe('ScullyContentComponent', () => {
  let component: ScullyContentComponent;
  let fixture: ComponentFixture<ScullyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScullyContentComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
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
