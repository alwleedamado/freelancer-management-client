import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { Team } from '../models/team';
import { AddMemberToTeamCommand, TeamMember } from '../models/team-member';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeamService extends DataService<Team> {

    constructor(http: HttpClient) {
        let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Team;
        super(http, url);
    }
    addTeamMember(teamId: string, teamMember: AddMemberToTeamCommand) {
        return this.http.post<TeamMember>(`${this.url}/${teamId}/AddMember`, teamMember);
    }

    updateMember(teamId: string, teamMember: TeamMember) {
        return this.http.put<TeamMember>(`${this.url}/${teamId}/AddMember`, teamMember);
    }

    removeMember(teamId: string, teamMemberId: string) {
        return this.http.delete(`${this.url}/${teamId}/RemoveMember/${teamMemberId}`);
    }

    getMembers(teamId: string): Observable<TeamMember[]> {
        return this.http.get<TeamMember[]>(`${this.url}/${teamId}/GetMembers`)
    }
    
}