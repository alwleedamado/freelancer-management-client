import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors, teamMemberSelector, teamMemberSelectors } from './team.selectors';
import { TeamMember } from "pages/team/models/team-member";
import { Observable } from "rxjs";
import { PageState, SortState, CustomError } from "core/models";

export class TeamMemberDataSource {

    loading$: Observable<boolean>;
    items$: Observable<TeamMember[]>;
    pageState$: Observable<PageState>;
    sortState$: Observable<SortState>;
    error$: Observable<CustomError>

    constructor(private Store: Store<AppState>) {
        this.items$ = this.Store.select(teamMemberSelectors.selectTeammembersData);
    }
}
