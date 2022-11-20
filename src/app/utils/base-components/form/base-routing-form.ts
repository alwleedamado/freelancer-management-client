import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import routerActions from "core/reducers/router-state/router.actions";
import { routerSelectors } from "core/reducers/router-state/router.selectors";
import produce from "immer";
import { combineLatest } from 'rxjs';
import { filter, skip, takeWhile } from 'rxjs/operators';
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { communicationResult } from "utils/models/communicationResult";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { BaseForm } from "./base-form";

@Injectable()
export abstract class BaseRoutingForm<T> extends BaseForm<T> {

    abstract returnUrl: string[];
    abstract editUrl: string[];

    constructor(
        store: Store<AppState>,
        layout: LayoutUtilsService,
        actions: IngrxActions<T>,
        selectors: IngrxSelectors<T>,
    ) {
        super(store, layout, actions, selectors)
    }

    ngOnInit() {

        this.store
            .pipe(
                takeWhile(() => this.componentActive),
                select(routerSelectors.params))
            .subscribe(params => this.routeChange(params));

        this.store
            .pipe(
                select(routerSelectors.id),
                takeWhile(() => this.componentActive))
            .subscribe(id => {
                this.id = id;
                if (this.id) {
                    this.triggerEdit(false);

                    this.form.get('id')?.setValue(this.id);

                    this.store.dispatch(this.actions.find({ id: this.id }))

                    this.store.pipe(
                        takeWhile(() => this.componentActive),
                        select(this.selectors.selectDataEntityById(this.id)))
                        .subscribe(res => {
                            this.entity = res;
                            if (res) {
                                //User Immer to take deep copy of the object and use it to avoid change store with the form object
                                this.initForm(produce(res, newRes => { }))
                            }
                        });
                }
                else this.initForm();
            });

        this.storeSubscriptions();
    }

    closeForm() {
        this.store.dispatch(routerActions.navigate({ url: this.returnUrl }));
    }

    abstract routeChange(param: Params);


}