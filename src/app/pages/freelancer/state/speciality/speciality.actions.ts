import { Speciality } from "pages/freelancer/models/speciality";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import { statics } from 'freelancer/freelancer.statics';

export interface ISpecialityActions extends IngrxActions<Speciality> {

}
let prefix = ngrxActionName(statics.moduleName, statics.components.Speciality);

export const actions: ISpecialityActions = {
    ...createActions<Speciality>(statics.moduleName, statics.components.Speciality)
}