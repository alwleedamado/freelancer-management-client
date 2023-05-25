import { Team } from "pages/team/models/team";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import { statics } from 'team/team.statics';
import { ActionCreator, createAction, props } from "@ngrx/store";
import { TeamMember } from "pages/team/models/team-member";
import { TypedAction } from "@ngrx/store/src/models";

export interface ITeamActions extends IngrxActions<Team> {
    addMember: ActionCreator<string, (props:{teamId: string; teamMember: TeamMember}) => {teamId: string; teamMember: TeamMember} & TypedAction<string>>,
    addMemberSuccess: ActionCreator<string,(props: {payload: TeamMember}) => {payload: TeamMember} & TypedAction<string>>,
    addMemberFail: ActionCreator<string,(props: {error: any}) => {error: any} & TypedAction<string>>,

    updateMember: ActionCreator<string, (props:{teamId: string; teamMember: TeamMember}) => {teamId: string; teamMember: TeamMember} & TypedAction<string>>,
    updateMemberSuccess: ActionCreator<string,(props: {payload: TeamMember}) => {payload: TeamMember} & TypedAction<string>>,
    updateMemberFail: ActionCreator<string,(props: {error: any}) => {error: any} & TypedAction<string>>,

    removeMember: ActionCreator<string, (props: {teamId: string; teamMemberId: string}) => {teamId: string; teamMemberId: string} & TypedAction<string>>,
    removeMemberSuccess: ActionCreator<string,() => TypedAction<string>>,
    removeMemberFail: ActionCreator<string,(props: {error: any}) => {error: any} & TypedAction<string>>,

}
let prefix = ngrxActionName(statics.moduleName, statics.components.Team);

export const actions: ITeamActions = {
    ...createActions<Team>(statics.moduleName, statics.components.Team),
    addMember: createAction(`${prefix} Add New Team Memeber`, props<{teamId: string; teamMember: TeamMember}>()),
    addMemberSuccess: createAction(`${prefix} Added New Team Memeber Successufuly`, props<{payload: TeamMember}>()),
    addMemberFail: createAction(`${prefix} Add New Team Memeber`, props<{error: any}>()),

    updateMember: createAction(`${prefix} Update Team Memeber`, props<{teamId: string; teamMember: TeamMember}>()),
    updateMemberSuccess: createAction(`${prefix} Update Team Memeber Success`, props<{payload: TeamMember}>()),
    updateMemberFail: createAction(`${prefix} Update Team Memeber Failed`, props<{error: any}>()),

    removeMember: createAction(`${prefix} Remove Team Memeber`, props<{teamId: string; teamMemberId: string}>()),
    removeMemberSuccess: createAction(`${prefix} Remove Team Memeber Success`),
    removeMemberFail: createAction(`${prefix} Remove Team Memeber Failed`, props<{error: any}>())

}