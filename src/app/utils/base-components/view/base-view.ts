import { ComponentType } from "@angular/cdk/portal";
import { AfterContentInit, Injectable, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import routerActions from "core/reducers/router-state/router.actions";
import { routerSelectors } from "core/reducers/router-state/router.selectors";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { Observable } from "rxjs";
import { map, skip, take, takeWhile } from "rxjs/operators";
import { communicationResult } from "utils/models/communicationResult";
import { IngrxSelectors } from "utils/models/ngrx";

@Injectable()
export abstract class BaseView<T> implements OnInit, OnDestroy {

    abstract returnUrl: string;

 id: any;
    componentActive = true;
    router: Router
    protected viewUrl: string[];

    //If this is populated, redirect user to the route instead of open dialog on create click
    protected createUrl: any[];
    entity$: Observable<T>;

    constructor(
        protected store: Store<AppState>,
        protected storeSelectors: IngrxSelectors<T>,
        protected layoutUtils: LayoutUtilsService,
        private createForm: ComponentType<any>,

        moduleName: string,
        componentName: string) {}

    ngOnInit(): void {

        this.store
            .pipe(
                takeWhile(() => this.componentActive),
                select(routerSelectors.id)
            )
            .subscribe(id => {
                this.id = id;
            });

        this.entity$ = this.store.pipe(
            select(this.storeSelectors.selectDataEntityById(this.id)),
            takeWhile(() => this.componentActive));

        this.store
            .pipe(
                takeWhile(() => this.componentActive),
                select(this.storeSelectors.selectDeleteResult),
                skip(1))
            .subscribe(r => {
                if (r == communicationResult.success)
                    this.navigateBack();
            })

        this.storeSubscription();
    }


    ngOnDestroy() {
        this.componentActive = false;
    }

    navigateBack() {

        if (this.returnUrl)
            this.store.dispatch(routerActions.navigate({ url: [this.returnUrl] }));
        else {
            this.store
                .pipe(
                    select(routerSelectors.urlParts),
                    take(1),
                    map(urlParts => urlParts.slice(0, urlParts.length - 2)))
                .subscribe(url => this.store.dispatch(routerActions.navigate({ url })));
        }
    }



    addEntity() {
        if (!!this.createUrl) {
            this.store.dispatch(routerActions.navigate({ url: this.createUrl }));
        }
        else if (!!this.createForm) {
            this.layoutUtils.open(this.createForm)
                .subscribe(result => {
                    if (result) {
                        this.viewEntity(result, result.id);
                    }
                });
        }
    }

    viewEntity(entity: T, id: string) {
        //basic navigation, for advance navigation override this method or override the viewUrl
        this.store
            .pipe(
                take(1),
                select(routerSelectors.urlParts))
            .subscribe(parts => {
                // This will read the current url, find the id of the route and replace it with the new Id
                let baseUrl = !!this.viewUrl ? this.viewUrl : parts.slice(0, parts.length - 1); 
                this.store.dispatch(routerActions.navigate({ url: baseUrl.concat(id) }));
            });

    }

    abstract storeSubscription();
}
