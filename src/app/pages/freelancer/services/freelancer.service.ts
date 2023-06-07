import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Freelancer } from 'freelancer/models/freelancer';

import { DataService } from 'utils/services/data.service';
import { AddSpecialityCommand } from '../models/add-speciality-command';
import { dropdownItem } from 'shared/models/dropdown';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FreelancerService extends DataService<Freelancer> {
	constructor(http: HttpClient) {
		let url = environment.baseUrl + environment.Freelancer.base + environment.Freelancer.Freelancer;
		super(http, url);
	}
	
	addSpeciality(personId: string, specialityTypeId: string) {
		return this.http.post<AddSpecialityCommand>(`${this.url}/${personId}/${environment.Freelancer.Specialities}`, { personId, specialityTypeId })
	}
	getBySpecialityType(spicialityTypeId: string, query: string): Observable<dropdownItem[]> {
		return this.http.get<dropdownItem[]>(`${this.url}/typeaheadBySpecialityType/${spicialityTypeId}/${query}`)

	}
}