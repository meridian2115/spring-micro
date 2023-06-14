import { createAction, props } from '@ngrx/store';
import { AuthData } from './auth.reducer';

export const login = createAction(
  '[Auth] login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] login success',
  props<{ authData: AuthData }>()
);

export const loginFailed = createAction(
  '[Auth] login failed',
  props<{ serverError: string }>()
);
