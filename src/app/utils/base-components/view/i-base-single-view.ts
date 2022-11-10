import { OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs";

export interface IBaseSingleDetail<T> extends OnInit, OnDestroy {

    id: string;
    componentActive: boolean;
    
    get title();
    loading$: Observable<boolean>;
    entity$: Observable<T>
    
}