import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error) {
          switch (error.status) {
            case 400:
              alert('400 error'); //implement code like toastr alert
              break;
            case 401:
              alert('401 error');
              break;
            case 500:
              alert('500 error');
              break;
            default:
              alert('unknown error');
              break;
          }
        }
        throw error;
      })
    );
  }
}
