import { createSelector } from "@ngrx/store";
import { Team } from "freelancer/models/team";
import { IngrxSelectors } from "utils/models/ngrx";
import { createSelectors } from "utils/ngrx/ngrx.selectors";
import { FrelancerBaseStateFeactureSelector } from "../freelancer.base.state";
import { adapter, teamMemberAdapter } from './team.reducers';

export const stateSateSelector = createSelector(
    FrelancerBaseStateFeactureSelector, (state) => state.Team
)
export const teamMemberSelector = createSelector(stateSateSelector, state => state.teamMembers)

export interface TeamSelectors extends IngrxSelectors<Team> {

}

export const selectors: TeamSelectors = {
    ...createSelectors(adapter, stateSateSelector)
}

export const teamMemberSelectors = {
    ...teamMemberAdapter.getSelectors(),
    selectAddRequest: createSelector(teamMemberSelector, state => state.addMemberRequest),
    selectUpdateRequest: createSelector(teamMemberSelector, state => state.updateMemberRequest),
    selectRemoveRequest: createSelector(teamMemberSelector, state => state.removeMemberRequest),
}