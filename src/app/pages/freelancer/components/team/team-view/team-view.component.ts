import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Team } from 'pages/freelancer/models/team';
import { FreelancerSelectors } from 'pages/freelancer/state/freelancer';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseView } from 'utils/base-components/view/base-view';
import { FreelancerFormComponent } from '../../freelancer/freelancer-form/freelancer-form.component';
import { TeamFormComponent } from '../team-form/team-form.component';
import { TeamSelectors } from 'pages/freelancer/state/team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent extends BaseView<Team>{
  override returnUrl: string;
  constructor(store: Store<AppState>,
    layoutUtilService: LayoutUtilsService) {
    super(store, TeamSelectors, layoutUtilService, TeamFormComponent,
      statics.moduleName, statics.components.Freelancer);
  }
  
  override storeSubscription() {
  }
}
