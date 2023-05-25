import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { actions } from './project.actions';
import { Actions } from '@ngrx/effects';
import { selectors } from './project.selectors';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { ProjectService } from 'pages/project/services/project.service';
import { Project } from 'pages/project/models/project';


@Injectable()
export class ProjectEffects extends BaseEffect<Project> {
    override idSelector(entity: Project) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: ProjectService,
        store: Store<AppState>,
        layoutUtils: LayoutUtilsService

    ) {
        super(actions$, actions, service, store, selectors, layoutUtils)
    }
}