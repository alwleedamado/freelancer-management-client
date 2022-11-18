import { createFeatureSelector } from "@ngrx/store";
import { UiState } from "./ui-state.reducer";


const uiStateFeatureSelector = createFeatureSelector<UiState>("ui");



const uiSelectors = {
};

export default uiSelectors;