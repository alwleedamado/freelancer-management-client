import { Team } from "pages/freelancer/models/team";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import { statics } from 'freelancer/freelancer.statics';

export interface ITeamActions extends IngrxActions<Team> {

}
let prefix = ngrxActionName(statics.moduleName, statics.components.Team);

export const actions: ITeamActions = {
    ...createActions<Team>(statics.moduleName, statics.components.Team)
}