import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'core/reducers';
import { statics } from '../freelancer.statics';
import * as fromFreelancer from './freelancer/freelancer.reducers'
import * as fromSpecialityType from './speciality-type/speciality-type.reducers'

export interface FreelancerState extends fromRoot.AppState {
    Freelancer: fromFreelancer.State,
    SpecialityType: fromSpecialityType.State,
}

export const FrelancerBaseStateFeactureSelector = createFeatureSelector<FreelancerState>(statics.moduleName);

export const reducres = {
    Freelancer: fromFreelancer.reducers,
    SpecialityType: fromSpecialityType.reducers,
}