import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { Freelancer } from 'freelancer/models/freelancer';
import { actions } from './freelancer.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FreelancerService } from 'freelancer/services/freelancer.service';
import { selectors } from './freelancer.selectors';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { of } from 'rxjs';


@Injectable()
export class FreelancerEffects extends BaseEffect<Freelancer> {
    override idSelector(entity: Freelancer) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: FreelancerService,
        store: Store<AppState>,
        layoutUtils: LayoutUtilsService

    ) {
        super(actions$, actions, service, store, selectors, layoutUtils)
    }

    addSpeciality$ = createEffect(() => this.actions$.pipe(
        ofType(actions.addSpeciality),
        switchMap(action => this.service.addSpeciality(action.personId, action.specialityTypeId).pipe(
            map(action => actions.addSpecialitySuccess(action),
            catchError(error => of(actions.addSpecialityFail({error}))))
        ))
    ))
}