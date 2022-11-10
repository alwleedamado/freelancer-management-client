import { Freelancer } from "pages/freelancer/models/freelancer";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import {statics} from 'freelancer/freelancer.statics';

export interface IFreelancerActions extends IngrxActions<Freelancer> {
    
}
let prefix = ngrxActionName(statics.moduleName, statics.components.Freelancer);

export const actions: IFreelancerActions = {
    ...createActions<Freelancer>(statics.moduleName, statics.components.Freelancer)
}