import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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

  emptyPhoneControl: FormControl = new FormControl()
  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    config: DynamicDialogConfig,
  ) {
    super(store, layoutService, ref, config, msg, FreelancerActoins, FreelancerSelectors)
  }
  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      telephones: new FormArray([]),
    })
  }
  storeSubscriptions() {
  }

  override afterFormInit(entity?: Partial<Freelancer>): void {
    entity.telephones.forEach(e => {
      const control = new FormControl({
        telephoneNumber: e.telephoneNumber,
        phoneType: e.phoneType

      });
      this.phoneArray.controls.push(control)
    })
  }
  addNewPhone() {
    this.phoneArray.push(new FormControl(this.emptyPhoneControl.value))
    this.emptyPhoneControl.reset()
  }
  get phoneArray() {
    return this.form.get('telephones') as FormArray;
  }
  deletePhone(ctrl) {
    this.phoneArray.controls = this.phoneArray.controls.filter(c => c != ctrl)
  }
}
