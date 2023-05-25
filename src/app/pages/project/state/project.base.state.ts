import { createFeatureSelector } from '@ngrx/store';
import * as fromRoot from 'core/reducers';
import { statics } from '../project.statics';
import * as fromFreelancer from './project/project.reducers'
import * as fromProject from './project/project.reducers'

export interface ProjectState extends fromRoot.AppState {
    Project: fromProject.State
}

export const ProjectBaseStateFeactureSelector = createFeatureSelector<ProjectState>(statics.moduleName);

export const reducres = {
    Project: fromProject.reducers
}