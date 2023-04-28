import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { DataService } from 'utils/services/data.service';
import { SpecialityType } from '../models/speciality-type';

@Injectable({
	providedIn: 'root'
})
export class SpecialityTypeService extends DataService<SpecialityType> {

	constructor(http: HttpClient) {
		let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.SpecialityType;
		super(http, url);
	}
}