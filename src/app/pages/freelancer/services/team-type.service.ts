import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { TeamType } from '../models/team-type';

@Injectable({
    providedIn: 'root'
})
export class TeamTypeService extends DataService<TeamType> {

    constructor(http: HttpClient) {
        let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.TeamType;
        super(http, url);
    }
}