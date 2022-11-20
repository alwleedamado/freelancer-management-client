import { SpecialityType } from "pages/freelancer/models/speciality-type";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";
import { statics } from 'freelancer/freelancer.statics';

export interface ISpecialityTypeActions extends IngrxActions<SpecialityType> {

}
let prefix = ngrxActionName(statics.moduleName, statics.components.SpecialityType);

export const actions: ISpecialityTypeActions = {
    ...createActions<SpecialityType>(statics.moduleName, statics.components.SpecialityType)
}