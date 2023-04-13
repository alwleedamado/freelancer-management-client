import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import {statics} from 'freelancer/freelancer.statics';
import { Project } from "pages/freelancer/models/project";

export interface IFreelancerActions extends IngrxActions<Project> {
    
}
let prefix = ngrxActionName(statics.moduleName, statics.components.Project);

export const actions: IFreelancerActions = {
    ...createActions<Project>(statics.moduleName, statics.components.Project)
}