import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from '../../projects/sampleBlog/src/app/app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {readFileSync} from 'fs';
import {join} from 'path';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ScullyLibModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Check AppComponent Snapshot', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});

describe('test static file', () => {
  it('check clean index by scully', () => {
    const index: string = readFileSync(
      join(__dirname, '../../dist/static/blog/index.html'),
      'UTF8'
    ).toString();
    const cleanIndex = index
      .replace(/\_ng(content|host)(\-[A-Za-z0-9]{3}){2}/g, '')
      .replace(/ng\-version\=\".{5,30}\"/g, '');
    expect(cleanIndex).toMatchSnapshot();
  });
});
