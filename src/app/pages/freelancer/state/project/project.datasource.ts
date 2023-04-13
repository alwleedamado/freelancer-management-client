import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { selectors } from './project.selectors';
import { Project } from "pages/freelancer/models/project";

export class ProjectDataSource extends NgrxDataSource<Project> {

    constructor(store: Store<AppState>) {
        super(store, selectors);
    }
}
