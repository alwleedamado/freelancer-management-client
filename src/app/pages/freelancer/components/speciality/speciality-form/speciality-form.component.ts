import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Speciality } from 'pages/freelancer/models/speciality';
import { SpecialityActoins, SpecialitySelectors } from 'pages/freelancer/state/speciality';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-speciality-form',
  templateUrl: './speciality-form.component.html',
  styleUrls: ['./speciality-form.component.scss']
})
export class SpecialityFormComponent extends BaseDialogForm<Speciality> {
  title: string;

  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    config: DynamicDialogConfig,
  ) {
    super(store, layoutService, ref, config, msg, SpecialityActoins, SpecialitySelectors)
  }


  createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  }
  storeSubscriptions(): void {
  }
}