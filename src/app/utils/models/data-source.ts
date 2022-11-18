import { PageState, SortState } from "core/models";
import { Observable } from "rxjs";
import { CustomError } from "../../core/models/custom-error";

export interface IDataSource<T> {
    loading$: Observable<boolean>;
    items$: Observable<T[]>;
    pageState$: Observable<PageState>;
    sortState$: Observable<SortState>;
    error$: Observable<CustomError>
}