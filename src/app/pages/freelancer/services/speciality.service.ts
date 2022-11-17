import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { Speciality } from '../models/speciality';

@Injectable({
	providedIn: 'root'
})
export class SpecialityService extends DataService<Speciality> {

	constructor(http: HttpClient) {
		let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Speciality;
		super(http, url);
	}
}