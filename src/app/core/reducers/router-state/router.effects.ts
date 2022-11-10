import { Injectable } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { getViewRoute } from "utils/helpers/routes.helper";
import routerActions from "./router.actions";

@Injectable()
export class RouterEffect {

    constructor(
        protected actions$: Actions,
        protected router: Router,
    ) { }

    navigate$ = createEffect(() => this.actions$.pipe(
        ofType(routerActions.navigate),
        tap(action => {
            this.navigateToUrl(action.url, action.extras)
        })
    ), { dispatch: false });

    navigateToSingleView$ = createEffect(() => this.actions$.pipe(
        ofType(routerActions.navigateToSingleView),
        tap(action => {
            this.navigateToUrl(getViewRoute(action.moduleName, action.featureName, action.id));
        })
    ), { dispatch: false });


    private navigateToUrl(url, extras: NavigationExtras = {}) {
        let t = url;
        if (typeof (url) === "string")
            this.router.navigate(t, extras);
        else {
            var route = [];
            url.forEach(part => {
                route.push(...part.split('/'));
            });
            this.router.navigate(route, extras);
        }
    }
}