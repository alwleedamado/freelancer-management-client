import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors } from './freelancer.selectors';
import { Freelancer } from "freelancer/models/freelancer";

export class FreelancerDataSource extends NgrxDataSource<Freelancer> {

    constructor(store: Store<AppState>) {
        super(store, selectors);
    }
}
