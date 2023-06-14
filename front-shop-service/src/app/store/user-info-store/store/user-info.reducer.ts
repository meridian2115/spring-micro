import {createReducer, on} from "@ngrx/store";
import { getUserInfo, getUserInfoFailed, getUserInfoSuccess } from "./user-info.action";

export const USER_INFO_FEATURE_NAME = 'user';

export interface UserInfoData{
  username: String,
  firstName: String,
  lastName: String,
  email: String
}

export interface UserInfoState{
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: UserInfoData;
}

const initialState : UserInfoState = {
  loading: true,
  loaded: false,
  serverError: ''
}

export const authReducer = createReducer(
  initialState,
  on(getUserInfo, state => ({
    ...state,
    loading: true
  })),
  on(getUserInfoSuccess, (state, {userInfoData}) => ({
    ...state,
    userInfoData,
    loaded: true,
    loading: false,
    serverError: ''
  })),
  on(getUserInfoFailed, (state, {serverError}) => ({
    ...state,
    authData: null!,
    loaded: false,
    loading: true,
    serverError
  }))
);
