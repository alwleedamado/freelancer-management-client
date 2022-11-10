import { createSelector } from "@ngrx/store";
import { Freelancer } from "freelancer/models/freelancer";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter } from './freelancer.reducers';

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.Freelancer
)

export interface FreelancerSelectors extends IngrxSelectors<Freelancer> {
    
}

export const selectors: FreelancerSelectors = {
    ...createSelectors(adapter, stateSateSelector)
}