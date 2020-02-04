import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../projects/sampleBlog/src/app/app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [],
    declarations: {
      // @ts-ignore
      AppComponent
    }
    }).compileComponents();
  }));
});
