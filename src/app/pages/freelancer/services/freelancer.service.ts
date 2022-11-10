import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Freelancer } from 'freelancer/models/freelancer';
import { DataService } from 'utils/services/data.service';

@Injectable({
	providedIn: 'root'
})
export class FreelancerService extends DataService<Freelancer> {

	constructor(http: HttpClient) {
		let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Freelancer;
		super(http, url);
	}
}