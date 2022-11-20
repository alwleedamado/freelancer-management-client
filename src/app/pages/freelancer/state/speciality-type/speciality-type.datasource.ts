import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors } from './speciality-type.selectors';
import { SpecialityType } from "pages/freelancer/models/speciality-type";

export class SpecialityTypeDataSource extends NgrxDataSource<SpecialityType> {

    constructor(store: Store<AppState>) {
        super(store, selectors);
    }
}
