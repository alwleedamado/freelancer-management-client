import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable, of } from "rxjs";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { IGuardableForm } from "utils/models/IGuardableForm";
import { PromptParts } from "utils/models/prompt";

@Injectable({ providedIn: 'root' })
export class FormDeactivateGuardService implements CanDeactivate<IGuardableForm>{

    constructor(public layoutUtilsService:LayoutUtilsService) { }

    canDeactivate(component: IGuardableForm): Observable<boolean> {

        if (component.isDirty && component.isDirty()) {
            let prompt: PromptParts = {
                title: "PROMPTS.LOSING_DATA",
                message: "PROMPTS.DISCARD_CHANGE",
                noLabel: "PROMPTS.CONTINUE_EDIT",
                yesLabel: "BUTTONS.DISCARD",
            }

            return this.layoutUtilsService.prompt(prompt);
        }
        else
            return of(true)
    }
}
