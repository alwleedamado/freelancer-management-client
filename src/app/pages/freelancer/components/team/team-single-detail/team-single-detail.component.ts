import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { Team } from 'pages/freelancer/models/team';
import { TeamActoins, TeamSelectors } from 'pages/freelancer/state/team';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseSingleDetail } from 'utils/base-components/view/base-single-detail';
import { FreelancerFormComponent } from '../../freelancer/freelancer-form/freelancer-form.component';

@Component({
  selector: 'app-team-single-detail',
  templateUrl: './team-single-detail.component.html',
  styleUrls: ['./team-single-detail.component.scss']
})
export class TeamSingleDetailComponent extends BaseSingleDetail<Team>{
  override id: any;
  override get title(): any {
    return `${this.entity.name}`
  }
  override storeSubscription() {
    throw new Error('Method not implemented.');
  }
  constructor(store: Store<AppState>, layoutUtilService: LayoutUtilsService) {
    super(store, layoutUtilService, FreelancerFormComponent, TeamActoins, TeamSelectors)
  }

}
