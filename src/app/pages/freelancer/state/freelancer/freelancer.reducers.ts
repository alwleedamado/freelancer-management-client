import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import {Action, createReducer } from "@ngrx/store";
import { Freelancer } from "pages/freelancer/models/freelancer";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./freelancer.actions";

export interface State extends IngrxState<Freelancer> {

}

export const adapter: EntityAdapter<Freelancer> = createEntityAdapter<Freelancer>({
    sortComparer: false
});

const initialState = ngrxInitialState<Freelancer>(adapter) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions))
export function reducers(state: State | undefined, action: Action) {
return stateReducer(state, action);
}