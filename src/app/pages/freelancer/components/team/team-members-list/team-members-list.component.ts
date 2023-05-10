import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { statics } from 'pages/freelancer/freelancer.statics';
import { TeamMember } from 'pages/freelancer/models/team-member';
import { TeamMemberDataSource } from 'pages/freelancer/state/team/team-member.datasource';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { DefaultListView } from 'utils/base-components/list/default-list-view';
import { NgrxDataSource } from 'utils/ngrx/ngrx.datasource';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss']
})
export class TeamMembersListComponent implements OnInit, OnDestroy {
  @Input() teamId: string;
  private componentActive = true;
  title: string = "Team Members"
  dataSource: TeamMemberDataSource;
  constructor(private store: Store<AppState>, private layout: LayoutUtilsService) {
    this.dataSource = new TeamMemberDataSource(store)
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
  
}