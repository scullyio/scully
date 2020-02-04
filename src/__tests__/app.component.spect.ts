import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from '../../projects/sampleBlog/src/app/app.component';
import {ScullyLibModule} from '@scullyio/ng-lib';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScullyLibModule],
      declarations: {
        // @ts-ignore
        AppComponent,
      },
    }).compileComponents();
  }));
});
