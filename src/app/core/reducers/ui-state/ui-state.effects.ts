import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { AppState } from "..";
import uiActions from "./ui-state.actions";

@Injectable()
export class UiEffects {

    constructor(
        private actions$: Actions,
        private layoutUtils: LayoutUtilsService,
        private store: Store<AppState>
    ) { }

    showSuccessToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showSuccessToastr),
        tap(action => this.layoutUtils.showSuccess(action.title, action.message))
    ), { dispatch: false })

    showInfoToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showInfoToastr),
        tap(action => this.layoutUtils.showInfo(action.title, action.message))
    ), { dispatch: false })

    showWarningToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showWarningToastr),
        tap(action => this.layoutUtils.showWarning(action.title, action.message))
    ), { dispatch: false })


    showErrorToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showErrorToastr),
        tap(action => this.layoutUtils.showError(action.title, action.message))
    ), { dispatch: false })


    showApiErrorToast$ = createEffect(() => this.actions$.pipe(
        ofType(uiActions.showApiErrorToastr),
        tap(action => this.layoutUtils.showApiError(action.error))
    ), { dispatch: false })
}
