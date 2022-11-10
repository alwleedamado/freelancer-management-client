import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'core/reducers';
import { statics } from '../freelancer.statics';
import * as fromFreelancer from './freelancer/freelancer.reducers'

export interface FreelancerState extends fromRoot.AppState {
    Freelancer: fromFreelancer.State
}

export const FrelancerBaseStateFeactureSelector = createFeatureSelector<FreelancerState>(statics.moduleName);

export const reducres = {
    Freelancer: fromFreelancer.reducers
}