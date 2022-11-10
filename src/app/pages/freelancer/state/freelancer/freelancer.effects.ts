import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { Freelancer } from 'freelancer/models/freelancer';
import { actions } from './freelancer.actions';
import { Actions } from '@ngrx/effects';
import { FreelancerService } from 'freelancer/services/freelancer.service';
import { selectors } from './freelancer.selectors';


@Injectable()
export class FreelancerEffects extends BaseEffect<Freelancer> {
    override idSelector(entity: Freelancer) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: FreelancerService,
        store: Store<AppState>,

    ) {
        super(actions$, actions, service, store, selectors)
    }
}