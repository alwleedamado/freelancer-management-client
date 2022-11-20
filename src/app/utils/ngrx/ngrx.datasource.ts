import { Store } from '@ngrx/store';
import { PageState, SortState } from 'core/models';
import { CustomError } from 'core/models/custom-error';
import { AppState } from 'core/reducers';
import { Observable } from 'rxjs';
import { IDataSource } from 'utils/models/data-source';
import { IngrxSelectors } from 'utils/models/ngrx';

export class NgrxDataSource<T> implements IDataSource<T> {
    loading$: Observable<boolean>;
    items$: Observable<T[]>;
    pageState$: Observable<PageState>;
    sortState$: Observable<SortState>;
    error$: Observable<CustomError>

    constructor(protected store: Store<AppState>, protected fromState: IngrxSelectors<T>) {
        this.items$ = this.store.select(fromState.selectData)
        this.loading$ = this.store.select(fromState.selectPageLoading);
        this.pageState$ = this.store.select(fromState.selectPageState);
        this.sortState$ = this.store.select(fromState.selectSortState);
        this.error$ = this.store.select(fromState.selectError);
    }
}