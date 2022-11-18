import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PromptComponent } from "core/components/prompt/prompt.component";
import { Prompt } from "core/models";
import { CustomError } from "core/models/custom-error";
import { ToastService } from "core/services/toast.service";
import { DialogService, DynamicDialogConfig } from "primeng/dynamicdialog";
import { Observable } from "rxjs";
import { DialogConfig } from "utils/models/dialog-config.model";

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

    prompt(prompt: Prompt): Observable<boolean> {
        let promptConfig = { ...this.modalOptions }
        promptConfig.data = prompt
        let ref = this.dialog.open(PromptComponent, promptConfig);
        return ref.onClose
    }

    open(componentRef: any, config?: DialogConfig): Observable<any> {
        let ref = this.dialog.open(componentRef, { ...this.modalOptions, ...config?.options, data: config?.data });
        return ref.onClose;
    }

    showSuccess(title: any, message?: any) {
        return this.toastService.showSuccess(title, message)
    }

    showInfo(title: any, message?: any) {
        return this.toastService.showInfo(title, message)
    }

    showWarning(title: any, message?: any) {
        return this.toastService.showWarn(title, message)
    }


    showApiError(error: CustomError) {
        return this.toastService.showError(error.title, error.message)
    }

    showError(title: string, message?: string) {
        return this.toastService.showError(title, message)
    }
    openDeletePrompt(prompt?: Prompt): Observable<boolean> {
        let p: Prompt = {
            title: prompt?.title ?? "Delete Confirmation",
            message: prompt?.message ?? "Are you sure to delete this entity",
            okButtonLabel: prompt?.okButtonLabel ?? "Delete",
            okButtonClass: prompt?.okButtonClass ?? "p-button p-button-outline p-button-danger",
            cancelButtonLabel: prompt?.cancelButtonLabel ?? "Cancel",
            cancelButtonClass: prompt?.cancelButtonClass ?? "p-button p-button-light",
        }
        return this.prompt(p);
    }
}