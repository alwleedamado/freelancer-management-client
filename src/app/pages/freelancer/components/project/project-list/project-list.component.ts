import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { ToastService } from 'core/services/toast.service';
import { Project } from 'pages/freelancer/models/project';
import { ProjectActoins, ProjectSelectors, ProjectDataSource } from 'pages/freelancer/state/project';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent extends DefaultListView<Project> {
  override viewParts: any[];
  override formEditTitle: string = '';
  override formAddTitle: string;
  override title: string;
  override columns: string[];
  override dataSource: NgrxDataSource<Project>;

  constructor(layoutUtils: LayoutUtilsService, private toastService: ToastService,
    store: Store<AppState>) {
    super(layoutUtils, ProjectFormComponent, store, ProjectActoins, ProjectSelectors);
    this.dataSource = new ProjectDataSource(this.store)
  }

}
