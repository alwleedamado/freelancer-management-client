import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";
import { Speciality } from "pages/freelancer/models/speciality";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./speciality.actions";

export interface State extends IngrxState<Speciality> {

}

export const adapter: EntityAdapter<Speciality> = createEntityAdapter<Speciality>({
    sortComparer: false
});

const initialState = ngrxInitialState<Speciality>(adapter) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions))
export function reducers(state: State | undefined, action: Action) {
    return stateReducer(state, action);
}