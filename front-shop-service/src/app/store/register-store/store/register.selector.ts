import { createFeatureSelector, createSelector } from "@ngrx/store";
import { REGISTER_FEATURE_NAME, RegisterState } from "./register.reducer";

const getFeature = createFeatureSelector<RegisterState>(REGISTER_FEATURE_NAME);

export const getServerError = createSelector(getFeature, state => state.serverError);

export const getRegistering = createSelector(getFeature, state => state.registering);

export const getRegistered = createSelector(getFeature, state => state.registered);
