import { Type } from "@angular/core";
import { Routes } from "@angular/router";
import { BaseRoutingForm } from "utils/base-components/form/base-routing-form";
import { IBaseList } from "utils/base-components/list/i-base-list";
import { IBaseLookupList } from "utils/base-components/list/i-base-lookup-list";
import { BaseSingleDetail } from "utils/base-components/view/base-single-detail-view";
import { BaseView } from "utils/base-components/view/base-view";
import { FormDeactivateGuardService } from "utils/gaurds/formDeactivate.guard";
import { RouteData } from "utils/models/route-data";

export function getRoutesComponents(path: string, list: Type<IBaseList | IBaseLookupList<any>>, viewComponent?: Type<BaseView<any> | BaseSingleDetail<any>>, routeData?: RouteData): Routes {

    var guards = [];
    if (routeData && !routeData.disableGuard) {
    }

    if (viewComponent)
        return [
            {
                path: path,
                component: list,
                data: routeData,
                canActivate: guards,
            },
            {
                path: `${path}/view/:id`,
                component: viewComponent,
                data: { access: 'view', ...routeData },
                canActivate: guards,
            }
        ];

    return [{
        path: path,
        component: list,
        data: routeData,
        canActivate: guards,
    }]
}

export function getFormRoutesComponents(path: string, form: Type<BaseRoutingForm<any>>, routeData?: RouteData): Routes {
    return [
        {
            path: `${path}/add`,
            component: form,
            canDeactivate: [FormDeactivateGuardService],
            data: routeData
        },
        {
            path: `${path}/edit/:id`,
            component: form,
            canDeactivate: [FormDeactivateGuardService],
            data: routeData
        },
    ];
}


export function getViewRoute(module: string, featureName: string, id: string, isAbsloute = false) {
    let route = [module, featureName]
    if (isAbsloute) route[0] = '/' + route[0]
    return route.concat('view', id)
}

export function getListRoute(module: string, featureName: string) {
    return [module, featureName];
}