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
    [x: string]: any;

    @Input() override id;
    @Input() params: any;

    entity$: Observable<T>;

    constructor(
        store: Store<AppState>,
        layout: LayoutUtilsService,
        protected ref: DynamicDialogRef,
        private config: DynamicDialogConfig,
        msgService: MessageService,
        actions: IngrxActions<T>,
        selectors: IngrxSelectors<T>,
    ) {
        super(store, layout, actions, selectors)
    }


    ngOnInit() {
        // populate components fields
        // todo limit it to only accept @Input() props
        this.config?.data &&
            Object.keys(this.config?.data).forEach(key => this[key] = this.config.data[key])

        if (this.form) {
            this.form.get('id')?.setValue(this.id);
        }

        if (this.isEdit) {
            this.store.dispatch(this.actions.find({ id: this.id }))

            this.entity$ = this.store.pipe(
                takeWhile(() => this.componentActive),
                select(this.selectors.selectDataEntityById(this.id)))


            this.entity$.subscribe(res => {
                this.entity = res;
                if (res) {
                    this.initForm(produce(res, _ => { }))
                }
            });
        }
        else {
            this.initForm();
        }

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