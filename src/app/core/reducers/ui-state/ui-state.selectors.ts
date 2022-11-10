import { createFeatureSelector, createSelector } from "@ngrx/store";
import { communicationResult } from "utils/models/communicationResult";
import { UiState } from "./ui-state.reducer";


const selectUiState = createFeatureSelector<UiState>("ui");



const uiSelectors = {
};

export default uiSelectors;