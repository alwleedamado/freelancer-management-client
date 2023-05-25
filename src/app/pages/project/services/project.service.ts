import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { Project } from '../models/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService extends DataService<Project> {

	constructor(http: HttpClient) {
		let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Project;
		super(http, url);
	}
}