import { createReducer, on } from "@ngrx/store";
import { register, registerFailed, registerSuccess } from "./register.action";

export const REGISTER_FEATURE_NAME = 'reg';

export interface RegisterState{
  registering: boolean;
  registered: boolean;
  serverError: string;
}

const initialState : RegisterState = {
  registering: false,
  registered: true,
  serverError: ''
}

export const registerReducer = createReducer(
  initialState,
  on(register, state => ({
    ...state,
    registered: false,
    registering: true
  })),
  on(registerSuccess, (state) => ({
    ...state,
    registered: true,
    registering: false,
    serverError: ''
  })),
  on(registerFailed, (state, {serverError}) => ({
    ...state,
    registered: false,
    registering: true,
    serverError
  }))
);
