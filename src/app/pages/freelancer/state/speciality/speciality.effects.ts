import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { actions } from './speciality.actions';
import { Actions } from '@ngrx/effects';
import { SpecialityService } from 'freelancer/services/speciality.service';
import { selectors } from './speciality.selectors';


@Injectable()
export class SpecialityEffects extends BaseEffect<SpecialityType> {
    override idSelector(entity: SpecialityType) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: SpecialityService,
        store: Store<AppState>,

    ) {
        super(actions$, actions, service, store, selectors)
    }
}