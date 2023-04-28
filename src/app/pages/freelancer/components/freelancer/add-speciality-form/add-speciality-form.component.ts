import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { FreelancerActoins, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { takeWhile } from 'rxjs';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialog } from 'utils/base-components/base-dialog';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';
import { communicationResult } from 'utils/models/communicationResult';

@Component({
  selector: 'app-add-speciality-form',
  templateUrl: './add-speciality-form.component.html',
  styleUrls: ['./add-speciality-form.component.scss']
})
export class AddSpecialityFormComponent extends BaseDialog implements OnDestroy {
  form: FormGroup;
  @Input() freelancerId: string;
  constructor(private store: Store<AppState>, ref: DynamicDialogRef, config: DynamicDialogConfig, private layout: LayoutUtilsService) {
    super(ref, config)
  }

  initializeComponent(): void {
    this.form = new FormGroup({
      personId: new FormControl(),
      specialityTypeId: new FormControl()
    })
    if (this.freelancerId)
      this.form.get('personId').setValue(this.freelancerId)
    else
      throw new Error("freelancer id should not be null or undifined")

    this.store.pipe(takeWhile(() => this.componentActive),
      select(FreelancerSelectors.selectAddResult))
      .subscribe(result => {
        if (result == communicationResult.success)
          this.layout.showSuccess("Speciality has been added")
      })
  }

  save() {
    this.store.dispatch(FreelancerActoins.addSpeciality(this.form.value))
  }

}
