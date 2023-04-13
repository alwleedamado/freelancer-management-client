import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import {Action, createReducer } from "@ngrx/store";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./project.actions";
import { Project } from "pages/freelancer/models/project";

export interface State extends IngrxState<Project> {

}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
    sortComparer: false
});

const initialState = ngrxInitialState<Project>(adapter) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions))
export function reducers(state: State | undefined, action: Action) {
return stateReducer(state, action);
}