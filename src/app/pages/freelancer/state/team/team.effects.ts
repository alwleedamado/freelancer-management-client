import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { Team } from 'freelancer/models/team';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { actions } from './team.actions';
import { selectors } from './team.selectors';
import { TeamService } from 'freelancer/services/team.service';


@Injectable()
export class TeamEffects extends BaseEffect<Team> {
    override idSelector(entity: Team) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: TeamService,
        store: Store<AppState>,
        layoutUtils: LayoutUtilsService

    ) {
        super(actions$, actions, service, store, selectors, layoutUtils)
    }
}