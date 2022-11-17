import { Action, createReducer, on } from "@ngrx/store";
import { CustomError } from "core/models/custom-error";
import { registerError } from "./error-state.actions";

export interface ErrorState {
    lastError: CustomError
}

const stateReducer = createReducer({ lastError: null },
    on(registerError, (state, { lastError }) => ({
        ...state, lastError: lastError
    })),

)

export function errorsReducer(state: ErrorState | undefined, action: Action) {
    return stateReducer(state, action);
}