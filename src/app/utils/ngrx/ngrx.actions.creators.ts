import { createAction, props } from "@ngrx/store";
import { QueryParams } from "core/models";
import { stringify } from "querystring";
import { IngrxActions } from "utils/models/ngrx";

export function ngrxActionName(moduleName: string, componentName: string) {
    return `[${moduleName}/${componentName}]`;
}

export function createActions<T>(moduleName: string, componentName: string): IngrxActions<T> {

    let actionName = ngrxActionName(moduleName, componentName);

    let actionTypes = {
        //Load if not loaded before
        initialLoad: `${actionName} initial Load Data Request`,


        load: `${actionName} Load Data Request`,
        loadComplete: `${actionName} Load Data Complete`,
        loadFail: `${actionName} Load Data Failed`,
        loadCanceled: `${actionName} Load List Canceled`,

        find: `${actionName} find By Id Request`,
        findSucceeded: `${actionName} find By Id Succeeceded`,
        findFailed: `${actionName} find By Id Failed`,

        createEntity: `${actionName} add New Request`,
        createEntitySucceeded: `${actionName} Created New Entity Successfully`,
        createEntityFailed: `${actionName} Entiy Creation Failed`,

        updateEntity: `${actionName} Update Request`,
        updateEntitySucceeded: `${actionName} Updated Entity Successfully`,
        updateEntityFailed: `${actionName} Update Entity Failed`,

        deleteEntity: `${actionName} Delete Entity Request`,
        deleteEntitySucceeded: `${actionName} Delete Complete`,
        deleteEntityFailed: `${actionName} Delete Failed`,

        toggleLoading: `${actionName} ToggleLoading`,

        getAllRequest: `${actionName} Get All Request`,
        getAllComplete: `${actionName} Get All Complete`,
        getAllFail: `${actionName} Get All Failed`,
        showSuccessToast: `${actionName} Show Success Toast`,
        showErrorToast: `${actionName} Show Error Toast`,
        showInfoToast: `${actionName} Show Info Toast`,
        showWarningToast: `${actionName} Show Warning Toast`,

        setQueryParam: `${actionName} Set Query Param`,

    }

    return {

        initialLoad: createAction(actionTypes.initialLoad),

        load: createAction(actionTypes.load, props<{ page: QueryParams }>()),
        loadComplete: createAction(actionTypes.loadComplete, props<{ data: T[], totalCount: number, page: QueryParams }>()),
        loadFail: createAction(actionTypes.loadFail, props<{ error: any }>()),
        loadCanceled: createAction(actionTypes.loadCanceled),

        createEntity: createAction(actionTypes.createEntity, props<{ payload: T }>()),
        createEntitySucceeded: createAction(actionTypes.createEntitySucceeded, props<{ payload: T }>()),
        createEntityFailed: createAction(actionTypes.createEntityFailed, props<{ error: any }>()),

        initialFind: createAction(actionTypes.find, props<{ id }>()),
        find: createAction(actionTypes.find, props<{ id: string | number }>()),
        findSucceeded: createAction(actionTypes.findSucceeded, props<{ payload: T }>()),
        findFail: createAction(actionTypes.findFailed, props<{ error: any }>()),

        updateEntity: createAction(actionTypes.updateEntity, props<{ id: string | number, data: T }>()),
        updateEntitySucceeded: createAction(actionTypes.updateEntitySucceeded, props<{ data: T }>()),
        updateEntityFailed: createAction(actionTypes.updateEntityFailed, props<{ error: any, id: number | string }>()),

        deleteEntity: createAction(actionTypes.deleteEntity, props<{ id: string | number }>()),
        deleteEntitySucceeded: createAction(actionTypes.deleteEntitySucceeded, props<{ payload: string | number }>()),
        deleteEntityFailed: createAction(actionTypes.deleteEntityFailed, props<{ error: any, id: number | string }>()),

        toggleLoading: createAction(actionTypes.toggleLoading),

        getAllRequest: createAction(actionTypes.getAllRequest),
        getAllComplete: createAction(actionTypes.getAllComplete, props<{ data: T[] }>()),
        getAllFail: createAction(actionTypes.getAllFail, props<{ error: any }>()),
        showSuccessToast: createAction(actionTypes.showSuccessToast, props<{ title: string, message?: string }>()),
        showErrorToast: createAction(actionTypes.showSuccessToast, props<{ title: string, message?: string }>()),
        showInfoToast: createAction(actionTypes.showSuccessToast, props<{ title: string, message?: string }>()),
        showWarningToast: createAction(actionTypes.showSuccessToast, props<{ title: string, message?: string }>()),

        setQueryParam: createAction(actionTypes.setQueryParam, props<{ query: QueryParams }>()),


    }

}