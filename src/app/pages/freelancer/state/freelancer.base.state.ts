import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'core/reducers';
import { statics } from '../freelancer.statics';
import * as fromFreelancer from './freelancer/freelancer.reducers'
import * as fromSpeciality from './speciality/speciality.reducers'
export interface FreelancerState extends fromRoot.AppState {
    Freelancer: fromFreelancer.State,
    SpecialityType: fromSpeciality.State
}

export const FrelancerBaseStateFeactureSelector = createFeatureSelector<FreelancerState>(statics.moduleName);

export const reducres = {
    Freelancer: fromFreelancer.reducers,
    SpecialityType: fromSpeciality.reducers
}