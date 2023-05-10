import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { Team } from '../models/team';
import { TeamMember } from '../models/team-member';
import { EMPTY } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamService extends DataService<Team> {

    constructor(http: HttpClient) {
        let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Team;
        super(http, url);
    }
    addTeamMember(teamId: string, teamMember: TeamMember) {
        return EMPTY
    }

    updateMember(teamId: string, teamMember: TeamMember) {
        return EMPTY
    }
    removeMember(teamId: string, teamMemberId: string) {
        return EMPTY
    }
    
}