import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RegisterService } from "../services/register.service";
import { register, registerFailed, registerSuccess } from "./register.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class RegisterEffects {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(action => this.registerService.register({
      username: action.username,
      password: action.password
    }).pipe(
      map(loginSuccessData => registerSuccess()),
      catchError(
        error => of(registerFailed({
          serverError: error.message
        }))
      )
    ))
  ));

  constructor(
    private actions$: Actions,
    private registerService: RegisterService
  ) { }
}
