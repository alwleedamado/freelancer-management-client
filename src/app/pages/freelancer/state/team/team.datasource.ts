import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors } from './team.selectors';
import { Team } from "freelancer/models/team";

export class TeamDataSource extends NgrxDataSource<Team> {

    constructor(store: Store<AppState>) {
        super(store, selectors);
    }
}
