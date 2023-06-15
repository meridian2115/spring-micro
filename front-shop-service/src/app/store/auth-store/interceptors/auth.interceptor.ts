import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {getAccessToken} from "../store/auth.selectors";
import {catchError, first, mergeMap} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store$: Store) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      return this.store$.pipe(
        select(getAccessToken),
        first(),
        mergeMap(token => {
          const auth_token = localStorage.getItem('auth_token');
          const authRequest = auth_token ? request = request.clone({setHeaders: {Authorization: `Bearer ${auth_token}`}}) : request;
          return next.handle(authRequest).pipe(
              catchError(err => {
                if(err instanceof HttpErrorResponse){
                  if(err.status === 401 || err.status === 500){
                    console.log('Пользователь не авторизован');
                    return EMPTY;
                  }
                }
                  throw err;
              }
            ));
        })
      );
  }
}
