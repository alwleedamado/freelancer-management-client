import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeService } from 'pages/freelancer/services/speciality-type.service';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseEffect } from 'utils/ngrx/ngrx.effects';
import { actions } from './speciality-type.actions';
import { selectors } from './speciality-type.selectors';


@Injectable()
export class SpecialityTypeEffects extends BaseEffect<SpecialityType> {
    override idSelector(entity: SpecialityType) {
        return entity.id //select the id property
    }

    constructor(
        actions$: Actions,
        private service: SpecialityTypeService,
        store: Store<AppState>,
        layoutUtils: LayoutUtilsService

    ) {
        super(actions$, actions, service, store, selectors, layoutUtils)
    }
}