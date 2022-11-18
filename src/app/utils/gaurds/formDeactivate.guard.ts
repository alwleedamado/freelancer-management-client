import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { IGuardableForm } from "utils/models/IGuardableForm";
import { Prompt } from "core/models/prompt";

@Injectable({ providedIn: 'root' })
export class FormDeactivateGuardService implements CanDeactivate<IGuardableForm>{

    constructor(public layoutUtilsService: LayoutUtilsService) { }

    canDeactivate(component: IGuardableForm): Observable<boolean> {

        if (component.isDirty && component.isDirty()) {
            let prompt: Prompt = {
                title: "PROMPTS.LOSING_DATA",
                message: "PROMPTS.DISCARD_CHANGE",
                cancelButtonLabel: "PROMPTS.CONTINUE_EDIT",
                okButtonLabel: "BUTTONS.DISCARD",
            }

            return this.layoutUtilsService.prompt(prompt);
        }
        else
            return of(true)
    }
}
