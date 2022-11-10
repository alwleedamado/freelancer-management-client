import { Action, createReducer } from "@ngrx/store";
import { AppState } from "..";

export interface UiState extends AppState {

}

const defaultUiState: UiState = {
}

const stateReducer = createReducer(defaultUiState,

)

export function uiReducer(state: UiState | undefined, action: Action) {
    return stateReducer(state, action);
}