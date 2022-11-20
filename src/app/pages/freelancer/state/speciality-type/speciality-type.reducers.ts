import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";
import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./speciality-type.actions";

export interface State extends IngrxState<SpecialityType> {

}

export const adapter: EntityAdapter<SpecialityType> = createEntityAdapter<SpecialityType>({
    sortComparer: false
});

const initialState = ngrxInitialState<SpecialityType>(adapter) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions))
export function reducers(state: State | undefined, action: Action) {
    return stateReducer(state, action);
}