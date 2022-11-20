import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import { Observable } from 'rxjs';
import { take } from "rxjs/operators";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { setFormFromObject } from "utils/helpers/setFormFromObject";
import { IGuardableForm } from "utils/models/IGuardableForm";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { IBaseForm } from "./i-base-form";

@Injectable()
export abstract class BaseForm<T> implements IBaseForm, IGuardableForm {
    loading$: Observable<boolean>;
    extraActionsLoading$: Observable<boolean>;

    abstract title: string;

    abstract closeForm(): void;
    abstract ngOnInit();

    entity: T;

    isFormEnabled = true;

    closeAfterAction = true;

    componentActive = true;
    id: string | number;
    form: FormGroup;

    formBase: any;


    constructor(
        protected store: Store<AppState>,
        protected layout: LayoutUtilsService,
        protected actions: IngrxActions<T>,
        protected selectors: IngrxSelectors<T>,
    ) {
        this.createForm();
        if (this.form)
            this.formBase = this.form.value;
        else
            this.formBase = {};

        this.loading$ = this.store.select(this.selectors.selectActionsLoading);
        this.extraActionsLoading$ = this.store.select(this.selectors.selectExtraActionsLoading);

    }

    ngOnDestroy() {
        this.componentActive = false;
    }

    reset() {
        this.initForm();
        if (this.id)
            this.triggerEdit(false);
        this.cleanForm()
    }

    save(closeAfter: boolean = true) {
        if (this.form.valid) {
            this.closeAfterAction = closeAfter;
            if (this.id)
                this.store.dispatch(this.actions.updateEntity({ id: this.id, data: this.formValue() }));
            else
                this.store.dispatch(this.actions.createEntity({ payload: this.formValue() }));
        }
    }

    triggerEdit(enable: boolean) {
        this.isFormEnabled = enable;
        if (this.isFormEnabled)
            this.form.enable();
        else
            this.form.disable();
    }

    initForm(entity?: Partial<T>) {
        if (entity) {
            setFormFromObject(this.form, entity);
            this.formBase = this.form.value;
        }
        else {
            this.form.patchValue(this.formBase)
        }

        this.afterFormInit(entity);
    }

    cleanForm() {
        this.form.markAsUntouched();
        this.form.markAsPristine();
    }


    delete() {
        this.layout.openDeletePrompt()
            .pipe(take(1))
            .subscribe(r => {
                if (r)
                    this.store.dispatch(this.actions.deleteEntity({ id: this.id }))
            });
    }

    isDirty() {
        return this.form.dirty && this.form.touched
    }

    afterFormInit(entity?: Partial<T>) { }

    abstract formValue(): T;
    abstract createForm(): void;
    abstract storeSubscriptions(): void;
}