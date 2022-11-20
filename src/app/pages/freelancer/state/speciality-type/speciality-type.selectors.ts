import { createSelector } from "@ngrx/store";
import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter } from './speciality-type.reducers';

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.SpecialityType
)

export interface SpecialitySelectors extends IngrxSelectors<SpecialityType> {

}

export const selectors: SpecialitySelectors = {
    ...createSelectors(adapter, stateSateSelector)
}