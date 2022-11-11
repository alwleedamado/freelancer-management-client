import { Component, OnInit } from '@angular/core';
import { BaseView } from 'utils/base-components/view/base-view';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
@Component({
  selector: 'app-freelancer-view',
  templateUrl: './freelancer-view.component.html',
  styleUrls: ['./freelancer-view.component.scss']
})
export class FreelancerViewComponent extends BaseView<Freelancer> {
  returnUrl: string = statics.urls.root;
  storeSubscription() {
  }

  constructor(store: Store<AppState>,
    layoutUtilService: LayoutUtilsService) {
    super(store, FreelancerSelectors, layoutUtilService, FreelancerFormComponent,
      statics.moduleName, statics.components.Freelancer);
  }

}
