import { createSelector } from "@ngrx/store";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter } from './project.reducers';
import { Project } from "pages/freelancer/models/project";

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.Project
)

export interface FreelancerSelectors extends IngrxSelectors<Project> {
    
}

export const selectors: FreelancerSelectors = {
    ...createSelectors(adapter, stateSateSelector)
}