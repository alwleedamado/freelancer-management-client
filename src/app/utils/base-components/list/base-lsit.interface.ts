import { OnDestroy, OnInit } from "@angular/core";
import { IPageState, ISortState } from "core/models";
import { SortEvent } from "primeng/api";
import { Observable } from "rxjs";

export interface IBaseList extends OnInit, OnDestroy {

    loading$: Observable<boolean>;

    title: string;
    columns: string[];
    componentActive: boolean;

    loadList(lazyTableEvent: any): void;


    addEntity(): void;
    deleteEntity(id): void;
    editEntity(id): void;
    viewEntity(id): void;

}