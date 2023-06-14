import {createReducer, on} from "@ngrx/store";
import {login, loginFailed, loginSuccess} from "./auth.actions";

export const AUTH_FEATURE_NAME = 'auth';

export interface AuthData{
  token: string;
  sub: string;
  iat: number;
  exp: number;  //Время до истечения токена
  /*type: string;
  username: string;
  email: string;
  roles: string[];
  */
}

export interface AuthState{
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData;
}

const initialState : AuthState = {
  loading: false,
  loaded: true,
  serverError: ''
}

export const authReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    loading: true
  })),
  on(loginSuccess, (state, {authData}) => ({
    ...state,
    authData,
    loaded: true,
    loading: false,
    serverError: ''
  })),
  on(loginFailed, (state, {serverError}) => ({
    ...state,
    authData: null!,
    loaded: true,
    loading: false,
    serverError
  }))
);
