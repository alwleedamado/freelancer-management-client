import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { FreelancerActoins, FreelancerDataSource, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { BehaviorSubject } from 'rxjs';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss']
})
export class FreelancerListComponent extends DefaultListView<Freelancer> {
  viewParts: any[];
  title: string = 'Freelancer';
  columns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: NgrxDataSource<Freelancer>
  loadingS$ = new BehaviorSubject<boolean>(false);
  constructor(layoutUtils: LayoutUtilsService,
    store: Store<AppState>) {
    super(layoutUtils, FreelancerFormComponent, store, FreelancerActoins, FreelancerSelectors);
    this.dataSource = new FreelancerDataSource(this.store)
  }
}
