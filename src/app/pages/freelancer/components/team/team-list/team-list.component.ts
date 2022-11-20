import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { statics } from 'pages/freelancer/freelancer.statics';
import { Team } from 'pages/freelancer/models/team';
import { TeamActoins, TeamSelectors } from 'pages/freelancer/state/team';
import { TeamDataSource } from 'pages/freelancer/state/team/team.datasource';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';
import { TeamFormComponent } from '../team-form/team-form.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent extends DefaultListView<Team> {
  formEditTitle: string = "Edit Team";
  formAddTitle: string = "Create New Team";
  viewParts: any[] = [statics.urls.root];
  title: string = 'Team';
  columns: string[] = ['id', 'name', 'email', 'phone'];
  dataSource: NgrxDataSource<Team>

  constructor(layoutUtils: LayoutUtilsService,
    store: Store<AppState>) {
    super(layoutUtils, TeamFormComponent, store, TeamActoins, TeamSelectors);
    this.dataSource = new TeamDataSource(this.store)
    layoutUtils.showInfo('test', 'testetet')
  }
}
