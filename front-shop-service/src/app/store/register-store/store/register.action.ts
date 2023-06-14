import { createAction, props } from "@ngrx/store";

export const register = createAction(
  '[Reg] register',
  props<{ username: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Reg] register success'
);

export const registerFailed = createAction(
  '[Reg] register failed',
  props<{ serverError: string }>()
);
