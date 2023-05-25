import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'core/reducers';
import { TeamMemberDataSource } from 'pages/team/state/team/team-member.datasource';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';

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