import { Action, createReducer, on } from "@ngrx/store";
import { CustomError } from "utils/models/custom-error";
import { registerError } from "./error-state.actions";

export interface ErrorState {
    error: CustomError
}

const stateReducer = createReducer({ error: null },
    on(registerError, (state, { error }) => ({
        ...state, error: error
    })),

)

export function errorsReducer(state: ErrorState | undefined, action: Action) {
    return stateReducer(state, action);
}