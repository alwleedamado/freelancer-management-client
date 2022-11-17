import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ErrorState } from "./error-state.reducer";


export const errorStateFeatcureSelector = createFeatureSelector<ErrorState>("generalError");

export const selectLastError = createSelector(
    errorStateFeatcureSelector,
    state => state.lastError
)