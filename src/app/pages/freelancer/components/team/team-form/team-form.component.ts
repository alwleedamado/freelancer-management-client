import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Team } from 'pages/freelancer/models/team';
import { TeamActoins, TeamSelectors } from 'pages/freelancer/state/team';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent extends BaseDialogForm<Team> {
  title: string = "Create New Team  ";

  emptyPhoneControl: FormControl = new FormControl()
  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    config: DynamicDialogConfig,
  ) {
    super(store, layoutService, ref, config, msg, TeamActoins, TeamSelectors)
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required])
    })
  }
  storeSubscriptions() {
  }

  override afterFormInit(entity?: Partial<Team>): void {
  }
}