import { createAction, props } from "@ngrx/store";
import { QueryParamsModel } from "core/models";
import { IngrxActions } from "utils/models/ngrx";

export function ngrxActionName(moduleName: string, componentName: string) {
    return `[${moduleName}/${componentName}]`;
}

export function createActions<T>(moduleName: string, componentName: string): IngrxActions<T> {

    let sharedName = ngrxActionName(moduleName, componentName);

    let actionTypes = {
        //Load if not loaded before
        initialLoad: `${sharedName} initial Load Data Request`,


        load: `${sharedName} Load Data Request`,
        loadComplete: `${sharedName} Load Data Complete`,
        loadFail: `${sharedName} Load Data Failed`,
        loadCancel: `${sharedName} Load Data Cancel`,

        initialFind: `${sharedName} Initial find By Id`,
        find: `${sharedName} find By Id Request`,
        findComplete: `${sharedName} find By Id Compelte`,
        findFail: `${sharedName} find By Id Failed`,

        addNew: `${sharedName} add New Request`,
        addNewComplete: `${sharedName} add New Compelte`,
        addNewFail: `${sharedName} add New Failed`,

        updateRequest: `${sharedName} Update Request`,
        update: `${sharedName} Update Request (Depricated Action)`,
        updateComplete: `${sharedName} Update Complete`,
        updateFail: `${sharedName} Update Failed`,

        delete: `${sharedName} Delete Request`,
        deleteComplete: `${sharedName} Delete Complete`,
        deleteFail: `${sharedName} Delete Failed`,

        clearList: `${sharedName} clearList`,
        toggleLoading: `${sharedName} ToggleLoading`,

        getAllRequest: `${sharedName} Get All Request`,
        getAllComplete: `${sharedName} Get All Complete`,
        getAllFail: `${sharedName} Get All Failed`,

        setQueryParam: `${sharedName} Set Query Param`,

    }

    return {

        initialLoad: createAction(actionTypes.initialLoad),

        load: createAction(actionTypes.load, props<{ page: QueryParamsModel }>()),
        loadComplete: createAction(actionTypes.loadComplete, props<{ data: T[], totalCount: number, page: QueryParamsModel }>()),
        loadFail: createAction(actionTypes.loadFail, props<{ error: any }>()),
        loadCancel: createAction(actionTypes.loadCancel),

        addNew: createAction(actionTypes.addNew, props<{ payload: T }>()),
        addNewComplete: createAction(actionTypes.addNewComplete, props<{ payload: T }>()),
        addNewFail: createAction(actionTypes.addNewFail, props<{ error: any }>()),

        initialFind: createAction(actionTypes.find, props<{ id }>()),
        find: createAction(actionTypes.find, props<{ id: string | number }>()),
        findComplete: createAction(actionTypes.findComplete, props<{ payload: T }>()),
        findFail: createAction(actionTypes.findFail, props<{ error: any }>()),

        updateRequest: createAction(actionTypes.updateRequest, props<{ id: string | number, data: T }>()),
        update: createAction(actionTypes.update, props<{ changes: Partial<T>, id: T }>()),
        updateComplete: createAction(actionTypes.updateComplete, props<{ data: T }>()),
        updateFail: createAction(actionTypes.updateFail, props<{ error: any, id: number | string }>()),

        deleteEntity: createAction(actionTypes.delete, props<{ id: string | number }>()),
        deleteComplete: createAction(actionTypes.deleteComplete, props<{ payload: string | number }>()),
        deleteFail: createAction(actionTypes.deleteFail, props<{ error: any, id: number | string }>()),

        clearList: createAction(actionTypes.clearList),
        toggleLoading: createAction(actionTypes.toggleLoading),

        getAllRequest: createAction(actionTypes.getAllRequest),
        getAllComplete: createAction(actionTypes.getAllComplete, props<{ data: T[] }>()),
        getAllFail: createAction(actionTypes.getAllFail, props<{ error: any }>()),

        setQueryParam: createAction(actionTypes.setQueryParam, props<{ query: QueryParamsModel }>()),


    }

}