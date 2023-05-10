import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Team } from "pages/freelancer/models/team";
import { IngrxState } from "utils/models/ngrx";
import { getDefaultOns, ngrxInitialState } from "utils/ngrx/ngrx.reducer";
import { actions } from "./team.actions";
import { TeamMember } from "pages/freelancer/models/team-member";
import { communicationResult } from "utils/models/communicationResult";

export interface TeamMemberState extends EntityState<TeamMember> {
    addMemberRequest: communicationResult,
    updateMemberRequest: communicationResult,
    removeMemberRequest: communicationResult,
}
export interface State extends IngrxState<Team> {
    teamMembers: TeamMemberState
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>({
    sortComparer: false
});

export const teamMemberAdapter: EntityAdapter<TeamMember> = createEntityAdapter<TeamMember>({
    sortComparer: false
})
const initialState = ngrxInitialState<Team>(adapter, {
    teamMembers: teamMemberAdapter.getInitialState({
        addMemberRequest: communicationResult.idle,
        updateMemberRequest: communicationResult.idle,
        removeMemberRequest: communicationResult.idle,
    })
}) as State

export const stateReducer = createReducer(initialState, ...getDefaultOns(adapter, actions),
    on(actions.addMemberSuccess, (state: State, action) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = teamMemberAdapter.addOne(action.payload, {
            ...state.teamMembers,
            addMemberRequest: communicationResult.success
        })
        return newState
    }),
    on(actions.addMember, (state) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = { ...newState.teamMembers, addMemberRequest: communicationResult.request }
        return newState
    }),
    on(actions.addMemberFail, (state) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = { ...newState.teamMembers, addMemberRequest: communicationResult.fail }
        return newState
    }),

    on(actions.updateMemberSuccess, (state: State, action) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = teamMemberAdapter.updateOne(
            {
                id: action.payload.id,
                changes: action.payload
            }, {
            ...state.teamMembers,
            updateMemberRequest: communicationResult.success
        })
        return newState
    }),
    on(actions.updateMember, (state) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = { ...newState.teamMembers, updateMemberRequest: communicationResult.request }
        return newState
    }),
    on(actions.updateMemberFail, (state) => {
        let newState: State = structuredClone(state)
        newState.teamMembers = { ...newState.teamMembers, updateMemberRequest: communicationResult.fail }
        return newState
    })
)

export function reducers(state: State | undefined, action: Action) {
    return stateReducer(state, action);
}