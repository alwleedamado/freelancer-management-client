import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PromptComponent } from "core/components/prompt/prompt.component";
import { ToastService } from "core/services/toast.service";
import { environment } from "environments/environment";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { from, Observable, of, Subscription } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { CustomError } from "core/models/custom-error";
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
        return ref.onClose;
    }

    showSuccess(message: any, title?: any) {
        return this.toastService.showSuccess(title, message)
    }

    showInfo(message: any, title?: any) {
        return this.toastService.showInfo(title, message)
    }


    showError(error: CustomError) {
        return this.toastService.showError(error.title, error.message)
    }

    deletePrompt(prompt?: PromptParts): Observable<boolean> {
        let p: PromptParts = {
            title: prompt?.title ?? "Delete Confirmation",
            message: prompt?.message ?? "Are you sure to delete this entity",
            yesLabel: prompt?.yesLabel ?? "Delete",
            noLabel: prompt?.noLabel ?? "Cancel",
            yesCssClass: prompt?.yesCssClass ?? "p-button p-button-outline p-button-danger",
            noCssClass: prompt?.noCssClass ?? "p-button p-button-light",
        }
        return this.prompt(p);
    }
}