import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { SpecialityType } from 'pages/freelancer/models/speciality-type';
import { SpecialityTypeActoins, SpecialityTypeSelectors } from 'pages/freelancer/state/speciality-type';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-type-form.component.html',
  styleUrls: ['./speciality-type-form.component.scss']
})
export class SpecialityFormComponent extends BaseDialogForm<SpecialityType> {
  title: string;

  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    config: DynamicDialogConfig,
  ) {
    super(store, layoutService, ref, config, msg, SpecialityTypeActoins, SpecialityTypeSelectors)
  }


  createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      description: new FormControl()
    })
  }
  storeSubscriptions(): void {
  }
}