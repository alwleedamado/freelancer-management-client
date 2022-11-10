import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ErrorState } from "./error-state.reducer";


export const selectErrorState = createFeatureSelector<ErrorState>("errorState");

export const selectLastError = createSelector(
    selectErrorState,
    state => state.error
)