import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, EMPTY } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('auth_token');
      if (token === null) {
        return next.handle(request);
      }
      return next.handle(request.clone({setHeaders: {Authorization: `Bearer ${token}`}}))
        .pipe(catchError(err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401 || err.status === 500){
              console.log('Пользователь не авторизован');
              return EMPTY;
            }
          }
          throw err;
        }));
  }
}
