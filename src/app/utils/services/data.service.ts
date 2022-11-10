import { HttpClient } from "@angular/common/http";
import { QueryParamsModel, QueryResultsModel } from "core/models";
import { dropdownItem } from "shared/models/dropdown";
import ObjectToQueryString from "utils/helpers/ObjectToQueryString";

export class DataService<T> {
	constructor(protected http: HttpClient, protected url) { }

	getAll() {
		return this.http.get<T[]>(this.url);
	}

	get(id) {
		return this.http.get<T>(`${this.url}/${id}`);
	}

	getFilter(queryParams: QueryParamsModel) {
		return this.http.get<QueryResultsModel>(
			`${this.url}/filter?${ObjectToQueryString(queryParams)}`
		);
	}

	create(data: T) {
		return this.http.post<T>(this.url, data);
	}

	update(id, data: T) {
		return this.http.put<T>(`${this.url}/${id}`, { ...data, id: id });
	}

	delete(id) {
		return this.http.delete<T>(`${this.url}/${id}`);
	}

	getDdl() {
		return this.http.get<dropdownItem[]>(`${this.url}/ddl`);
	}

	typeahead(key: string) {
		return this.http.get<dropdownItem[]>(`${this.url}/typeahead/${key}`)
	}
}