import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Project } from 'pages/project/models/project';
import { ProjectActoins, ProjectSelectors } from 'pages/project/state/project';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseDialogForm } from 'utils/base-components/form/base-dialog-form';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent extends BaseDialogForm<Project> {
  title: string = "Create New Project  ";
  
  constructor(
    store: Store<AppState>,
    layoutService: LayoutUtilsService,
    ref: DynamicDialogRef,
    msg: MessageService,
    config: DynamicDialogConfig,
    ) {
      super(store, layoutService, ref, config, msg, ProjectActoins, ProjectSelectors)
    }
    
    override createForm(): void {
      this.form = new FormGroup({
        projectName: new FormControl(),
        description: new FormControl(),
        teams: new FormControl(),
        dueDate: new FormControl(),
        price: new FormControl()
      })
    }
    override storeSubscriptions(): void {
    }
}
