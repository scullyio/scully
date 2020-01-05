import {
  HTTP_INTERCEPTORS,
  HttpBackend,
  HttpClient,
  HttpXsrfTokenExtractor,
  XhrFactory,
} from '@angular/common/http';
import { AbstractType, InjectionToken, Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ComponentsModule } from './components.module';

type TestBedInjectToken<T> = Type<T> | InjectionToken<T> | AbstractType<T>;

describe(ComponentsModule.name, () => {
  const httpClientAndDependenciesWithNames: ReadonlyArray<[TestBedInjectToken<any>, string]> = [
    [HttpClient, HttpClient.name],
    [HttpBackend, HttpBackend.name],
    [HTTP_INTERCEPTORS, 'HTTP_INTERCEPTORS'],
    [XhrFactory, XhrFactory.name],
    [HttpXsrfTokenExtractor, HttpXsrfTokenExtractor.name],
  ];

  httpClientAndDependenciesWithNames.forEach(([token, tokenName]) => {
    it(`forRoot provides ${tokenName} to support HttpClient`, () => {
      TestBed.configureTestingModule({
        imports: [ComponentsModule.forRoot()],
      });

      expect(() => TestBed.inject(token)).not.toThrow();
    });
  });

  it('does not provide HttpClient when imported as a regular Angular module', () => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
    });

    expect(() => TestBed.inject(HttpClient)).toThrowError(/NullInjectorError/);
  });
});
