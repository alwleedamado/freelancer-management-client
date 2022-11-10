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

                    if (this.form.get('id'))
                        this.form.get('id').setValue(this.id);

                    this.store.dispatch(this.findEntityInStore ? this.actions.initialFind({ id: this.id }) : this.actions.find({ id: this.id }))

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


        combineLatest([
            this.store.select(this.selectors.selectLastCreatedId),
            this.store.select(this.selectors.selectAddResult)])
            .pipe(
                takeWhile(() => this.componentActive && this.defaultCreateCompleteSubscription),
                skip(1),
                filter(([id, result]) => result == communicationResult.success)
            )
            .subscribe(([id, result]) => {

                this.layout.showSuccess("TOASTS.CREATED");

                this.cleanForm();
                if (this.closeAfterAction)
                    this.closeForm();
                else {
                    //Navigate to Edit
                    this.id = id;
                    this.store.dispatch(routerActions.navigate({
                        url: [this.editUrl[0], this.id]
                    }));

                }
            });

        this.store
            .pipe(
                select(this.selectors.selectUpdateResult),
                takeWhile(() => this.componentActive && this.defaultUpdateCompleteSubscription),
                skip(1),
                filter(result => result == communicationResult.success))
            .subscribe(() => {
                this.layout.showSuccess("TOASTS.UPDATED");
                this.cleanForm();
                if (this.closeAfterAction)
                    this.closeForm();
                else {
                    this.initForm(this.form.value);
                    this.triggerEdit(false);
                }
            });

        this.store
            .pipe(
                select(this.selectors.selectDeleteResult),
                takeWhile(() => this.componentActive && this.defaultDeleteCompleteSubscription),
                skip(1),
                filter(result => result == communicationResult.success))
            .subscribe(() => {
                this.cleanForm();
                this.layout.showInfo("TOASTS.DELETED");
                this.closeForm();
            })

        this.storeSubscriptions();
    }

    closeForm() {
        this.store.dispatch(routerActions.navigate({ url: this.returnUrl }));
    }

    abstract routeChange(param: Params);


}