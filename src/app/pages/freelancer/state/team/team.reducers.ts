import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";
import { Team } from "pages/freelancer/models/team";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./team.actions";

export interface State extends IngrxState<Team> {

}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>({
    sortComparer: false
});

const initialState = ngrxInitialState<Team>(adapter) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions))
export function reducers(state: State | undefined, action: Action) {
    return stateReducer(state, action);
}