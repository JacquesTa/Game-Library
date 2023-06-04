import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': 'e086ad3a80mshee45365b58ba37ep119628jsn2460226c8f7b',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },

      setParams: {
        key: 'fcce8e0054a34477ae6718db42e9540c',
      },
    });
    return next.handle(req);
  }
}
