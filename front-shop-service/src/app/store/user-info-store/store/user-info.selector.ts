import { createFeatureSelector, createSelector } from "@ngrx/store";
import { USER_INFO_FEATURE_NAME, UserInfoState } from "./user-info.reducer";

const getFeature = createFeatureSelector<UserInfoState>(USER_INFO_FEATURE_NAME);

export const getLoading = createSelector(getFeature, state => state.loading);

export const getLoaded = createSelector(getFeature, state => state.loaded);

export const getServerError = createSelector(getFeature, state => state.serverError);

export const getAuthData = createSelector(getFeature, state => state.authData);
