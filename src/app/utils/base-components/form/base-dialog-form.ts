import { Injectable, Input } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { routerSelectors } from "core/reducers/router-state/router.selectors";
import produce from "immer";
import { MessageService } from "primeng/api";
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";
import { combineLatest, Observable } from 'rxjs';
import { filter, map, skip, take, takeWhile } from 'rxjs/operators';
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { communicationResult } from "utils/models/communicationResult";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { BaseForm } from "./base-form";

@Injectable()
export abstract class BaseDialogForm<T> extends BaseForm<T> {

    @Input() override id;
    @Input() params: any;

    entity$: Observable<T>;

    constructor(
        store: Store<AppState>,
        layout: LayoutUtilsService,
        protected ref: DynamicDialogRef,
        config: DynamicDialogConfig,
        msgService: MessageService,
        actions: IngrxActions<T>,
        selectors: IngrxSelectors<T>,
    ) {
        super(store, layout, actions, selectors)
    }


    ngOnInit() {
        if (this.form) {
            this.form.get('id')?.setValue(this.id);
        }

        if (this.isEdit) {

            this.store.dispatch(this.findEntityInStore ? this.actions.initialFind({ id: this.id }) : this.actions.find({ id: this.id }))

            this.entity$ = this.store.pipe(
                takeWhile(() => this.componentActive),
                select(this.selectors.selectDataEntityById(this.id)))


            this.entity$.subscribe(res => {
                this.entity = res;
                if (res) {
                    //Use Immer to take deep copy of the object and use it to avoid change store with the form object
                    this.initForm(produce(res, newRes => { }))
                }
            });
        }
        else {
            this.params = this.params ?? {};

            this.store.pipe(
                select(routerSelectors.queryParams),
                map(params => ({ ...params, ...this.params })),
                take(1)
            ).subscribe(params => {
                this.form.patchValue(params);
            })

            this.initForm();
        }



        combineLatest([
            this.store.select(this.selectors.selectLastCreatedId),
            this.store.select(this.selectors.selectAddResult)])
            .pipe(
                takeWhile(() => this.componentActive && this.defaultCreateCompleteSubscription),
                skip(1),
                filter(([id, result]) => result == communicationResult.success)
            )
            .subscribe(([id, result]) => {
                if (result == communicationResult.success) {
                    this.layout.showSuccess("TOASTS.CREATED");
                    this.closeForm({ ...this.formValue(), id }); // always pass the Id property as ID;
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
                this.closeForm({ ...this.formValue(), id: this.id }); // always pass the Id property as ID;
            });

        this.storeSubscriptions();

    }


    closeForm(dialogResult?) {
        this.ref.close(dialogResult)
    }

    formValue() {
        return this.form.value;
    }

    get isAdding() {
        return !this.isEdit
    }

    get isEdit() {
        return !!this.id
    }
}