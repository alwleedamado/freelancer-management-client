import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { tap } from "rxjs/operators";
import { AppState } from "..";
import uiActions from "./ui-state.actions";

@Injectable()
export class UiEffects {

    constructor(
        private actions$: Actions,
        private layoutUtils: LayoutUtilsService,
        private store: Store<AppState>
    ) { }

    


    // toast effects
    showSuccessToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showSuccessToastr),
        tap(action => this.layoutUtils.showSuccess(action.title, action.message))
    ), { dispatch: false })

    showErrorToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showErrorToastr),
        tap(action => this.layoutUtils.showError({ title: action.title, message: action.message }))
    ), { dispatch: false })

}
