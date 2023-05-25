import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { statics } from 'pages/team/team.statics';
import { Team } from 'pages/team/models/team';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { BaseView } from 'utils/base-components/view/base-view';
import { TeamFormComponent } from '../team-form/team-form.component';
import { TeamSelectors } from 'pages/team/state/team';

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
      statics.moduleName, statics.components.Team);
  }
  
  override storeSubscription() {
  }
}
