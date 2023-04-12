import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { ToastService } from 'core/services/toast.service';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerActoins, FreelancerDataSource, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss'],
})
export class FreelancerListComponent extends DefaultListView<Freelancer> {
  formEditTitle: string = "Edit Freelancer";
  formAddTitle: string = "Create New Freelancer";
  viewParts: any[] = [statics.urls.root];
  title: string = 'Freelancer';
  columns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: NgrxDataSource<Freelancer>

  constructor(layoutUtils: LayoutUtilsService, private toastService: ToastService,
    store: Store<AppState>) {
    super(layoutUtils, FreelancerFormComponent, store, FreelancerActoins, FreelancerSelectors);
    this.dataSource = new FreelancerDataSource(this.store)
  }
 }
