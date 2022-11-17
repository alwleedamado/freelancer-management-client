import { createSelector } from "@ngrx/store";
import { Speciality } from "freelancer/models/speciality";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter } from './speciality.reducers';

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.Speciality
)

export interface SpecialitySelectors extends IngrxSelectors<Speciality> {

}

export const selectors: SpecialitySelectors = {
    ...createSelectors(adapter, stateSateSelector)
}