import { Component, Input, OnInit } from '@angular/core';
import { BaseSingleDetail } from 'utils/base-components/view/base-single-detail-view';
import { Freelancer } from 'pages/freelancer/models/freelancer';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { FreelancerActoins, FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { FreelancerFormComponent } from '../freelancer-form/freelancer-form.component';
@Component({
  selector: 'app-freelancer-single-detail',
  templateUrl: './freelancer-single-detail.component.html',
  styleUrls: ['./freelancer-single-detail.component.scss']
})
export class FreelancerSingleDetailComponent extends BaseSingleDetail<Freelancer> {
  @Input() id: any;
  get title(): any {
    return `Freelancer #${this.entity.id}`
  }
  storeSubscription() {
  }

  constructor(store: Store<AppState>, layoutUtilService: LayoutUtilsService) {
    super(store, layoutUtilService,FreelancerFormComponent, FreelancerActoins, FreelancerSelectors)
   }
}
