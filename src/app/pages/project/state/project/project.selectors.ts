import { createSelector } from "@ngrx/store";
import { Project } from "pages/project/models/project";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { ProjectBaseStateFeactureSelector } from "../project.base.state";
import { adapter } from './project.reducers';

export const stateSateSelector = createSelector(
    ProjectBaseStateFeactureSelector, (state) => state.Project
)

export interface FreelancerSelectors extends IngrxSelectors<Project> {
    
}

export const selectors: FreelancerSelectors = {
    ...createSelectors(adapter, stateSateSelector)
}