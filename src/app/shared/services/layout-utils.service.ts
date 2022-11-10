import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PromptComponent } from "core/components/prompt/prompt.component";
import { ToastService } from "core/services/toast.service";
import { environment } from "environments/environment";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { from, Observable, of, Subscription } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { CustomError } from "utils/models/custom-error";
import { DialogConfig } from "utils/models/dialog-config.model";
import { PromptParts } from "utils/models/prompt";

@Injectable({ providedIn: "root", })

export class LayoutUtilsService {
    modalOptions: DynamicDialogConfig = {
        width: '75%'
    }

    constructor(
        private dialog: DialogService,
        private toastService: ToastService,
        private store: Store<any>) {
    }

    prompt(prompt: PromptParts): Observable<boolean> {
        let promptConfig = { ...this.modalOptions }
        promptConfig.data = prompt
        let ref = this.dialog.open(PromptComponent, promptConfig);
        return ref.onClose
    }

    open(componentRef: any, config?: DialogConfig): Observable<any> {
        let ref = this.dialog.open(componentRef, { ...this.modalOptions, ...config?.options, data: config?.data });
        return from(ref.onClose)
            .pipe(
                take(1),
                catchError(err => {
                    console.error(err)
                    return of(null);
                }))

    }

    showSuccess(_message: any, _title?: any) {
        return this.toastService.showSuccess(_title, _message)
    }

    showInfo(_message: any, _title?: any) {
        return this.toastService.showInfo(_title, _message)
    }


    showError(error: CustomError) {
        if (!environment.production && error.details)
            console.log("ERROR: ", error);
        let msg = error.message;

        if (error.formErrors && error.formErrors.trim) // formerror is string
            msg = error.formErrors;

        return this.toastService.showError(error.title, error.message)

    }

    deletePrompt(prompt?: PromptParts): Observable<boolean> {
        let p: PromptParts = {
            title: prompt?.title ?? "Delete Confirmation",
            message: prompt?.message ?? "Are you sure to delete this entity",
            yesLabel: prompt?.yesLabel ?? "Delete",
            noLabel: prompt?.noLabel ?? "Cancel",

            yesCssClass: prompt?.yesCssClass ?? "btn btn-outline-danger",
            noCssClass: prompt?.noCssClass ?? "btn btn-light",
        }
        return this.prompt(p);
    }
}