import { Store } from '@ngrx/store';
import { IPageState, ISortState } from 'core/models';
import { AppState } from 'core/reducers';
import { Observable } from 'rxjs';
import { IDataSource } from 'utils/models/data-source';
import { CustomError } from 'utils/models/custom-error';
import { IngrxSelectors } from 'utils/models/ngrx';

export class NgrxDataSource<T> implements IDataSource<T> {

    loading$: Observable<boolean>;
    items$: Observable<T[]>;
    pageState$: Observable<IPageState>;
    sortState$: Observable<ISortState>;
    error$: Observable<CustomError>


    constructor(protected store: Store<AppState>, protected fromState: IngrxSelectors<T>, offline = false) {

        this.items$ = this.store.select(!offline ? fromState.selectData : fromState.selectDataPaginated)
        this.loading$ = this.store.select(fromState.selectPageLoading);

        this.pageState$ = this.store.select(fromState.selectPageState);
        this.sortState$ = this.store.select(fromState.selectSortState);
        this.error$ = this.store.select(fromState.selectError);

        // this.lastQuery$ = this.store.select(fromState.selectLastQuery);

    }
}