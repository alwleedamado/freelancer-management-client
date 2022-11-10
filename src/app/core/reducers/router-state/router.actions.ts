import { NavigationExtras } from "@angular/router";
import { createAction, props } from "@ngrx/store";

const navigate = createAction('[Router/Navigate]', props<{ url: any, extras?: NavigationExtras }>());
const navigateToSingleView = createAction('[Router/Navigate To Single View]', props<{ moduleName: string, featureName: string, id: string, extras?: NavigationExtras }>());

const routerActions  = {
    navigate,
    navigateToSingleView
};


export default routerActions
