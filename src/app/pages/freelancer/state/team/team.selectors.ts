import { createSelector } from "@ngrx/store";
import { Team } from "freelancer/models/team";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter } from './team.reducers';

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.Team
)

export interface TeamSelectors extends IngrxSelectors<Team> {

}

export const selectors: TeamSelectors = {
    ...createSelectors(adapter, stateSateSelector)
}