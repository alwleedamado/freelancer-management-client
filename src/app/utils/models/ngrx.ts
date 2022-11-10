import { Dictionary, EntityState } from "@ngrx/entity";
import { ActionCreator, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";
import { IPageState, ISortState, QueryParamsModel } from "core/models";
import { communicationResult } from "utils/models/communicationResult";
import { CustomError } from "./custom-error";

export interface IngrxActions<T> {
    initialLoad: ActionCreator<string, () => TypedAction<string>>,

    load: ActionCreator<string, (props: { page: QueryParamsModel; }) => { page: QueryParamsModel; } & TypedAction<string>>,
    loadComplete: ActionCreator<string, (props: { data: T[]; totalCount: number; page: QueryParamsModel; }) => { data: T[]; totalCount: number; page: QueryParamsModel; } & TypedAction<string>>,
    loadFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,
    loadCancel: ActionCreator<string, () => TypedAction<string>>,

    addNew: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    addNewComplete: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    addNewFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,

    initialFind: ActionCreator<string, ({ id }) => { id } & TypedAction<string>>,
    find: ActionCreator<string, (props: { id: string | number; }) => { id: string | number; } & TypedAction<string>>,
    findComplete: ActionCreator<string, (props: { payload: T; }) => { payload: T; } & TypedAction<string>>,
    findFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,


    //Used for updating store entity from object directly
    update: ActionCreator<string, (props: { changes: Partial<T>; id: any; }) => { changes: Partial<T>; id: any; } & TypedAction<string>>,

    updateRequest: ActionCreator<string, (props: { id: string | number; data: T; }) => { id: string | number; data: T; } & TypedAction<string>>,
    updateComplete: ActionCreator<string, (props: { data: T; }) => { data: T; } & TypedAction<string>>,
    updateFail: ActionCreator<string, (props: { error: any; id: number | string }) => { error: any; id: number | string } & TypedAction<string>>,

    deleteEntity: ActionCreator<string, (props: { id: string | number; }) => { id: string | number; } & TypedAction<string>>,
    deleteComplete: ActionCreator<string, (props: { payload: string | number; }) => { payload: string | number; } & TypedAction<string>>,
    deleteFail: ActionCreator<string, (props: { error: any; id: number | string }) => { error: any; id: number | string } & TypedAction<string>>,

    clearList: ActionCreator<string, () => TypedAction<string>>,
    toggleLoading: ActionCreator<string, () => TypedAction<string>>,

    getAllRequest: ActionCreator<string, () => TypedAction<string>>,
    getAllComplete: ActionCreator<string, (props: { data: T[] }) => { data: T[] } & TypedAction<string>>,
    getAllFail: ActionCreator<string, (props: { error: any; }) => { error: any; } & TypedAction<string>>,

    setQueryParam: ActionCreator<string, (props: { query: QueryParamsModel; }) => { query: QueryParamsModel; } & TypedAction<string>>,

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
    selectLastCreatedEntity:  MemoizedSelector<object, T, DefaultProjectorFn<T>>,
    selectTotalCount: MemoizedSelector<object, number, DefaultProjectorFn<number>>,
    selectLastQuery: MemoizedSelector<object, QueryParamsModel, DefaultProjectorFn<QueryParamsModel>>,
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

    selectPageState: MemoizedSelector<object, IPageState, DefaultProjectorFn<IPageState>>,
    selectSortState: MemoizedSelector<object, ISortState, DefaultProjectorFn<ISortState>>,
    selectError: MemoizedSelector<object, CustomError, DefaultProjectorFn<CustomError>>,
}

export interface IngrxState<T> extends EntityState<T> {
    isAllLoaded: boolean;
    queryRowsCount: number;
    lastCreatedId: number | string;
    listLoading: boolean;
    extraActionsLoading: boolean;
    actionsloading: boolean;
    lastQuery: QueryParamsModel;
    showInitWaitingMessage: boolean;
    error: any,

    lastLoadedId: number | string;

    findResult: communicationResult;
    addResult: communicationResult;
    updateResult: communicationResult;
    deleteResult: communicationResult;
    ddloading: boolean; // dropdown loading
}
