import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { Team } from 'team/models/team';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { actions } from './team.actions';
import { selectors } from './team.selectors';
import { TeamService } from 'team/services/team.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';


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

    addNewMember$ = createEffect(() => this.actions$
        .pipe(
            ofType(actions.addMember),
            mergeMap(action => this.service.addTeamMember(action.teamId, action.teamMember).pipe(
                map(payload => actions.addMemberSuccess({ payload })),
                catchError(error => of(actions.addMemberFail({ error })))
            ))
        )
    )
    updateMember$ = createEffect(() => this.actions$
        .pipe(
            ofType(actions.updateMember),
            mergeMap(action => this.service.updateMember(action.teamId, action.teamMember).pipe(
                map(payload => actions.updateMemberSuccess({ payload })),
                catchError(error => of(actions.updateMemberFail({ error })))
            ))
        )
    )

    removeMember$ = createEffect(() => this.actions$
        .pipe(
            ofType(actions.removeMember),
            mergeMap(action => this.service.removeMember(action.teamId, action.teamMemberId).pipe(
                map(_ => actions.removeMemberSuccess()),
                catchError(error => of(actions.removeMemberFail({ error })))
            ))
        )
    )

}