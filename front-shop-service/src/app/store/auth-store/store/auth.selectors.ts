import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AUTH_FEATURE_NAME, AuthState} from "./auth.reducer";

const getFeature = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME);

export const getLoading = createSelector(getFeature, state => state.loading);

export const getLoaded = createSelector(getFeature, state => state.loaded);

export const getServerError = createSelector(getFeature, state => state.serverError);

export const getAuthData = createSelector(getFeature, state => state.authData);

export const getAccessToken = createSelector(getAuthData, authData => authData && authData.token);

export const isAuth = createSelector(getAccessToken, token => !!token);

export const isAdmin = createSelector(getAccessToken, roles => roles === 'ADMIN');
