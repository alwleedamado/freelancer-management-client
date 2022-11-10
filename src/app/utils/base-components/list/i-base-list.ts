import { OnDestroy, OnInit } from "@angular/core";
import { IPageState, ISortState } from "core/models";
import { Observable } from "rxjs";

export interface IBaseList extends OnInit, OnDestroy {

    loading$: Observable<boolean>;

    title: string;
    columns: string[];
    componentActive: boolean;

    loadList(resetPaginator: boolean);

    sortChange(sort: ISortState);
    paginatorChange(page: IPageState);

    addEntity();
    deleteEntity(id);
    editEntity(id);
    viewEntity(id);

}