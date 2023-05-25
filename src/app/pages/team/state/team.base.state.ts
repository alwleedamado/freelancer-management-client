import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'core/reducers';
import { statics } from '../team.statics';
import * as fromFreelancer from './team/team.reducers'
import * as fromTeam from './team/team.reducers'

export interface TeamState extends fromRoot.AppState {
    Freelancer: fromFreelancer.State,
    Team: fromTeam.State,
}

export const TeamBaseStateFeactureSelector = createFeatureSelector<TeamState>(statics.moduleName);

export const reducres = {
    Freelancer: fromFreelancer.reducers,
    Team: fromTeam.reducers,
}