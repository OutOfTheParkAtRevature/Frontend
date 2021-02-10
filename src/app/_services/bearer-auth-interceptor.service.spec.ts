import { TestBed } from '@angular/core/testing';

import { BearerAuthInterceptorService } from './bearer-auth-interceptor.service';

describe('BearerAuthInterceptorService', () => {
  let service: BearerAuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BearerAuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
