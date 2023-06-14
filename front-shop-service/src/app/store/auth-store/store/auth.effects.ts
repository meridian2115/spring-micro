import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailed, loginSuccess } from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.authService.login({
      username: action.username,
      password: action.password
    }).pipe(
      map(loginSuccessData => loginSuccess({authData: loginSuccessData})),
      tap(() => this.router.navigate(['/'])),
      catchError(
        error => of(loginFailed({
          serverError: error.message
        }))
      )
    ))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }
}
