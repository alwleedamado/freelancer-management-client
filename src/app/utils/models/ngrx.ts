import { Dictionary, EntityState } from "@ngrx/entity";
import { ActionCreator, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { PageState, SortState, QueryParams } from "core/models";
import { communicationResult } from "utils/models/communicationResult";
import { CustomError } from "../../core/models/custom-error";

export interface IngrxActions<T> {
    initialLoad: ActionCreator<string, () => TypedAction<string>>,

    load: ActionCreator<string, (props: { page: QueryParams; }) => { page: QueryParams; } & TypedAction<string>>,
    loadComplete: ActionCreator<string, (props: { data: T[]; totalCount: number; page: QueryParams; }) => { data: T[]; totalCount: number; page: QueryParams; } & TypedAction<string>>,
    loadFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,
    loadCanceled: ActionCreator<string, () => TypedAction<string>>,

    createEntity: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    createEntitySucceeded: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    createEntityFailed: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,

    initialFind: ActionCreator<string, ({ id }) => { id } & TypedAction<string>>,
    find: ActionCreator<string, (props: { id: string | number; }) => { id: string | number; } & TypedAction<string>>,
    findSucceeded: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    findFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,

    updateEntity: ActionCreator<string, (props: { id: string | number; data: T; }) => { id: string | number; data: T; } & TypedAction<string>>,
    updateEntitySucceeded: ActionCreator<string, (props: { data: T; }) => { data: T; } & TypedAction<string>>,
    updateEntityFailed: ActionCreator<string, (props: { error: any; id: number | string }) => { error: any; id: number | string } & TypedAction<string>>,

    deleteEntity: ActionCreator<string, (props: { id: string | number; }) => { id: string | number; } & TypedAction<string>>,
    deleteEntitySucceeded: ActionCreator<string, (props: { payload: string | number; }) => { payload: string | number; } & TypedAction<string>>,
    deleteEntityFailed: ActionCreator<string, (props: { error: any; id: number | string }) => { error: any; id: number | string } & TypedAction<string>>,

    toggleLoading: ActionCreator<string, () => TypedAction<string>>,

    getAllRequest: ActionCreator<string, () => TypedAction<string>>,
    getAllComplete: ActionCreator<string, (props: { data: T[] }) => { data: T[] } & TypedAction<string>>,
    getAllFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,
    showSuccessToast: ActionCreator<string, (props: { title: string, message?: string }) => { title: string, message?: string } & TypedAction<string>>,
    showErrorToast: ActionCreator<string, (props: { title: string, message?: string }) => { title: string, message?: string } & TypedAction<string>>,
    showWarningToast: ActionCreator<string, (props: { title: string, message?: string }) => { title: string, message?: string } & TypedAction<string>>,
    showInfoToast: ActionCreator<string, (props: { title: string, message?: string }) => { title: string, message?: string } & TypedAction<string>>,

    setQueryParam: ActionCreator<string, (props: { query: QueryParams; }) => { query: QueryParams; } & TypedAction<string>>,

}


export interface IngrxSelectors<T> {
    selectDataIds: MemoizedSelector<object, string[] | number[], DefaultProjectorFn<string[] | number[]>>,
    selectDataEntities: MemoizedSelector<object, Dictionary<T>, DefaultProjectorFn<Dictionary<T>>>,
    selectDataEntityById: (id: string | number) => MemoizedSelector<object, T, DefaultProjectorFn<T>>,
    selectData: MemoizedSelector<object, T[], DefaultProjectorFn<T[]>>,
    selectDataCount: MemoizedSelector<object, number, DefaultProjectorFn<number>>,
    selectDataIsLoading: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectShowInitWaitingMessage: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectPageLoading: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectActionsLoading: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectExtraActionsLoading: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectLastCreatedId: MemoizedSelector<object, string | number, DefaultProjectorFn<string | number>>,
    selectLastCreatedEntity: MemoizedSelector<object, T, DefaultProjectorFn<T>>,
    selectTotalCount: MemoizedSelector<object, number, DefaultProjectorFn<number>>,
    selectLastQuery: MemoizedSelector<object, QueryParams, DefaultProjectorFn<QueryParams>>,
    selectEntityFilter: MemoizedSelector<object, any, DefaultProjectorFn<any>>,
    selectAddResult: MemoizedSelector<object, communicationResult, DefaultProjectorFn<communicationResult>>,
    selectUpdateResult: MemoizedSelector<object, communicationResult, DefaultProjectorFn<communicationResult>>,
    selectDeleteResult: MemoizedSelector<object, communicationResult, DefaultProjectorFn<communicationResult>>,
    selectDataAllLoaded: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,
    selectDataInitialized: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,

    selectLastLoadedId: MemoizedSelector<object, string | number, DefaultProjectorFn<string | number>>,
    selectFindResult: MemoizedSelector<object, communicationResult, DefaultProjectorFn<communicationResult>>,
    selectFindIsLoading: MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>,

    selectDataFiltered: MemoizedSelector<object, T[], DefaultProjectorFn<T[]>>,
    selectDataPaginated: MemoizedSelector<object, T[], DefaultProjectorFn<T[]>>,
    selecDataFilteredCount: MemoizedSelector<object, number, DefaultProjectorFn<number>>,

    selectPageState: MemoizedSelector<object, PageState, DefaultProjectorFn<PageState>>,
    selectSortState: MemoizedSelector<object, SortState, DefaultProjectorFn<SortState>>,
    selectError: MemoizedSelector<object, CustomError, DefaultProjectorFn<CustomError>>,
}

export interface IngrxState<T> extends EntityState<T> {
    isAllLoaded: boolean;
    queryRowsCount: number;
    lastCreatedId: number | string;
    listLoading: boolean;
    extraActionsLoading: boolean;
    actionsloading: boolean;
    lastQuery: QueryParams;
    showInitWaitingMessage: boolean;
    error: any,

    lastLoadedId: number | string;

    findResult: communicationResult;
    addResult: communicationResult;
    updateResult: communicationResult;
    deleteResult: communicationResult;
    ddloading: boolean; // dropdown loading
}
