import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RegisterService } from "../services/register.service";
import { register, registerFailed, registerSuccess } from "./register.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class RegisterEffects {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(action => this.registerService.register({
      username: action.username,
      password: action.password
    }).pipe(
      map(loginSuccessData => registerSuccess()),
      tap(() => this.router.navigate(['/login'])),
      catchError(
        error => of(registerFailed({
          serverError: error.message
        }))
      )
    ))
  ));

  constructor(
    private actions$: Actions,
    private registerService: RegisterService,
    private router: Router
  ) { }
}
