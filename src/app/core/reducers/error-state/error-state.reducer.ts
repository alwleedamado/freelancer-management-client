import { Action, createReducer, on } from "@ngrx/store";
import { CustomError } from "core/models/custom-error";
import { addErrorToRoot } from "./error-state.actions";

export interface ErrorState {
    lastError: CustomError
}

const stateReducer = createReducer({ lastError: null },
    on(addErrorToRoot, (state, { lastError }) => ({
        ...state, lastError: lastError
    })),

)

export function errorsReducer(state: ErrorState | undefined, action: Action) {
    return stateReducer(state, action);
}