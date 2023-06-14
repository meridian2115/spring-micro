import { createAction, props } from '@ngrx/store';
import { UserInfoData } from './user-info.reducer';

export const getUserInfo = createAction(
  '[UserInfo] info'
);

export const getUserInfoSuccess = createAction(
  '[UserInfo] info success',
  props<{ userInfoData: UserInfoData }>()
);

export const getUserInfoFailed = createAction(
  '[UserInfo] info failed',
  props<{ serverError: string }>()
);
