import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { actions } from './speciality-type.actions';
import { Actions } from '@ngrx/effects';
import { SpecialityService } from 'pages/freelancer/services/speciality-type.service';
import { selectors } from './speciality-type.selectors';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';


@Injectable()
export class SpecialityTypeEffects extends BaseEffect<SpecialityType> {
    override idSelector(entity: SpecialityType) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: SpecialityService,
        store: Store<AppState>,
        layoutUtils: LayoutUtilsService

    ) {
        super(actions$, actions, service, store, selectors, layoutUtils)
    }
}