import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Freelancer } from 'freelancer/models/freelancer';
import { FreelancerActoins, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-freelancer-form',
  templateUrl: './freelancer-form.component.html',
  styleUrls: ['./freelancer-form.component.scss']
})
export class FreelancerFormComponent extends BaseDialogForm<Freelancer> {
  title: string = "Create New Freelancer  ";
  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    public config: DynamicDialogConfig,
  ) {
    super(store, layoutService, ref, config, msg, FreelancerActoins, FreelancerSelectors)
  }
  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('male', [Validators.required]),

    })
  }
  storeSubscriptions() {
  }

}
