import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { TeamActoins } from 'pages/team/state/team';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { takeWhile } from 'rxjs';
import { BaseDialog } from 'utils/base-components/base-dialog';

@Component({
  selector: 'app-team-member-form',
  templateUrl: './team-member-form.component.html',
  styleUrls: ['./team-member-form.component.scss']
})
export class TeamMemberFormComponent extends BaseDialog {
  @Input() teamId: string;
  form: FormGroup;
  specialityTypeId: string;
  constructor(ref: DynamicDialogRef, config: DynamicDialogConfig, private store: Store<AppState>) {
    super(ref, config)
  }
  override initializeComponent(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      specialityTypeId: new FormControl('', Validators.required),
      freelancerId: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required)
    })

    this.form.get('specialityTypeId').valueChanges.pipe(takeWhile(_ => this.componentActive))
      .subscribe(value => this.specialityTypeId = value)
  }
  save() {
    if (this.form.valid) {
      let value = structuredClone(this.form.value);
      value.freelancerId = value.freelancerId.id;
      this.store.dispatch(TeamActoins.addMember({ teamId: this.teamId, teamMember: value }))
    }
  }

}
