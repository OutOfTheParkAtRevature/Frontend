import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { BearerAuthInterceptorService } from './bearer-auth-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('BearerAuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BearerAuthInterceptorService,
          multi: true
        }
      ]
    });
  });

  describe('request with headers', () => {
    it('should make the request', inject([HttpClient, HttpTestingController], (http: HttpClient, controller: HttpTestingController) => {
      http.get('/api').subscribe();
      const httpRequest: TestRequest = controller.expectOne('/api');
      expect(httpRequest.request.method).toBe('GET');
      controller.verify();
    }));

    afterEach(inject([HttpTestingController], (controller: HttpTestingController) => {
      controller.verify();
    }));
  });
});
