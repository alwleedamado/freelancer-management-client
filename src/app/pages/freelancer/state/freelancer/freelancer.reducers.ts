import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Freelancer } from "pages/freelancer/models/freelancer";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./freelancer.actions";
import { communicationResult } from "utils/models/communicationResult";

export interface State extends IngrxState<Freelancer> {
    addSpecialityResult: communicationResult
}

export const adapter: EntityAdapter<Freelancer> = createEntityAdapter<Freelancer>({
    sortComparer: false
});

const initialState = ngrxInitialState<Freelancer>(adapter, {
    addSpecialityResult: communicationResult.idle
}) as State

export const stateReducer = createReducer(initialState,
    ...getDefaultOns(adapter, actions),
    on(actions.addSpecialitySuccess, (state: State, action) => ({...state, addSpecialityResult: communicationResult.success})))
export function reducers(state: State | undefined, action: Action) {
    return stateReducer(state, action);
}