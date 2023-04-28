import { ActionCreator, createAction, props } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { statics } from 'freelancer/freelancer.statics';
import { Freelancer } from "pages/freelancer/models/freelancer";
import { IngrxActions } from "utils/models/ngrx";
import { createActions, ngrxActionName } from "utils/ngrx/ngrx.actions.creators";

export interface IFreelancerActions extends IngrxActions<Freelancer> {
    addSpeciality: ActionCreator<string, (props: {personId: string; specialityTypeId: string}) => {personId: string; specialityTypeId: string} & TypedAction<string>>,
    addSpecialitySuccess: ActionCreator<string, (props: {personId: string; specialityTypeId: string}) => {personId: string; specialityTypeId: string} & TypedAction<string>>,
    addSpecialityFail: ActionCreator<string, (props: {error: any}) => {error: any} & TypedAction<string>>
}
let prefix = ngrxActionName(statics.moduleName, statics.components.Freelancer);

export const actions: IFreelancerActions = {
    ...createActions<Freelancer>(statics.moduleName, statics.components.Freelancer),
    addSpeciality: createAction(`${prefix} Add speciality to freelancer`, props<{personId: string; specialityTypeId: string}>()),
    addSpecialitySuccess: createAction(`${prefix} Add speciality succeeded`, props<{personId: string; specialityTypeId: string}>()),
    addSpecialityFail: createAction(`${prefix} Add Speciality failed`, props<{error: any}>())
}