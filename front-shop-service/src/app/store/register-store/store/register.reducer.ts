import { createReducer, on } from "@ngrx/store";
import { register, registerFailed, registerSuccess } from "./register.action";

export const REGISTER_FEATURE_NAME = 'reg';

export interface RegisterState{
  serverError: string;
}

const initialState : RegisterState = {
  serverError: ''
}

export const registerReducer = createReducer(
  initialState,
  on(register, state => ({
    ...state,
  })),
  on(registerSuccess, (state) => ({
    ...state,
    serverError: ''
  })),
  on(registerFailed, (state, {serverError}) => ({
    ...state,
    serverError
  }))
);
