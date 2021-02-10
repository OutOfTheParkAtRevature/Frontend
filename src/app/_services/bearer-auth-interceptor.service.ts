import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class BearerAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ID_TOKEN = localStorage.getItem('id_token');

    //if we use a proxy, we can replace the url with the production url...
    if (ID_TOKEN)
    {
      //if token exists, add authorization header
      const cloned = request.clone({
          headers: request.headers.set("Authorization",
              "Bearer " + ID_TOKEN)
      });
      // console.log('added token to request: '+ID_TOKEN);

      return next.handle(cloned);
    }
    else{
      //otherwise, continue without header
      return next.handle(request);
    }
  }
}
