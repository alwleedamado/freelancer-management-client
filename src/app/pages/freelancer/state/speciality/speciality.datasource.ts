import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors } from './speciality.selectors';
import { Speciality } from "freelancer/models/speciality";

export class SpecialityDataSource extends NgrxDataSource<Speciality> {

    constructor(store: Store<AppState>) {
        super(store, selectors);
    }
}
