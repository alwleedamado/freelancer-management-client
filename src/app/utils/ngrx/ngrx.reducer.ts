import { EntityAdapter, Update } from '@ngrx/entity';
import { on } from '@ngrx/store';
import { defaultQuery } from 'core/models';
import { communicationResult } from 'utils/models/communicationResult';
import { IngrxActions, IngrxState } from 'utils/models/ngrx';


export function ngrxInitialState<T>(adapter: EntityAdapter<T>, args: any = {}): IngrxState<T> {
    return adapter.getInitialState({
        isAllLoaded: false,
        queryRowsCount: 0,
        lastCreatedId: undefined,
        listLoading: false,
        extraActionsLoading: false,
        actionsloading: false,
        lastQuery: defaultQuery(),
        showInitWaitingMessage: true,
        error: null,

        lastLoadedId: null,

        findResult: communicationResult.idle,

        addResult: communicationResult.idle,
        updateResult: communicationResult.idle,
        deleteResult: communicationResult.idle,

        ...args
    });

}

export function getDefaultOns<T>(adapter: EntityAdapter<T>, actions: IngrxActions<T>, idSelector?: (o: T) => number | string) {

    return [
        on(actions.load, (state: IngrxState<T>) => {
            return { ...state, listLoading: true, showInitWaitingMessage: true, isAllLoaded: false }
        }),
        on(actions.loadComplete, (state: IngrxState<T>, payload) => {
            return adapter.setAll(payload.data,
                {
                    ...state,
                    listLoading: false,
                    queryRowsCount: payload.totalCount,
                    lastQuery: payload.page,
                    showInitWaitingMessage: false,
                    isAllLoaded: true
                })
        }),
        on(actions.loadFail, (state: IngrxState<T>, payload) => {
            return { ...state, listLoading: false, showInitWaitingMessage: false, error: payload, isAllLoaded: false }
        }),

        on(actions.find, (state: IngrxState<T>) => {
            return { ...state, findResult: communicationResult.request }
        }),
        on(actions.findSucceeded, (state: IngrxState<T>, { payload }) => {
            return adapter.upsertOne(payload, { ...state, findResult: communicationResult.success, lastLoadedId: adapter.selectId(payload), currentEntity: payload })
        }),
        on(actions.findFail, (state: IngrxState<T>, payload) => {
            return { ...state, findResult: communicationResult.fail, error: payload }
        }),

        on(actions.createEntity, (state: IngrxState<T>) => {
            return { ...state, actionsloading: true, lastCreatedId: undefined, addResult: communicationResult.request }
        }),
        on(actions.createEntitySucceeded, (state: IngrxState<T>, { payload }) => {
            let { selectAll } = adapter.getSelectors();
            var queryRowsCount = state.queryRowsCount + 1;
            var newEntitites = [payload, ...selectAll(state)].slice(0, state.lastQuery.pageSize);

            return adapter.setAll(
                newEntitites,
                {
                    ...state,
                    actionsloading: false,
                    lastCreatedId: adapter.selectId(payload),
                    addResult: communicationResult.success,
                    queryRowsCount
                })
        }),
        on(actions.createEntityFailed, (state: IngrxState<T>, payload) => {
            return { ...state, actionsloading: false, error: payload, addResult: communicationResult.fail }
        }),

        on(actions.updateEntity, (state: IngrxState<T>) => {
            return { ...state, actionsloading: true, updateResult: communicationResult.request }
        }),
        on(actions.createEntitySucceeded, (state: IngrxState<T>, { payload }) => {
            return adapter.upsertOne(payload, { ...state, actionsloading: false, updateResult: communicationResult.success })
        }),
        on(actions.updateEntityFailed, (state: IngrxState<T>, payload) => {
            return { ...state, actionsloading: false, error: payload, updateResult: communicationResult.fail }
        }),

        on(actions.deleteEntity, (state: IngrxState<T>) => {
            return { ...state, actionsloading: true, deleteResult: communicationResult.request }
        }),
        on(actions.deleteEntitySucceeded, (state: IngrxState<T>, { payload }) => {
            var queryRowsCount = state.queryRowsCount - 1;
            return adapter.removeOne(<string>payload, {
                ...state,
                actionsloading: false,
                deleteResult: communicationResult.success,
                queryRowsCount
            })
        }),
        on(actions.deleteEntityFailed, (state: IngrxState<T>, payload) => {
            return { ...state, actionsloading: false, error: payload, deleteResult: communicationResult.fail }
        }),

        on(actions.toggleLoading, (state: IngrxState<T>) => {
            return { ...state, listLoading: !state.listLoading }
        }),

        on(actions.getAllRequest, (state: IngrxState<T>) => {
            return { ...state, listLoading: true, showInitWaitingMessage: true, isAllLoaded: false }
        }),
        on(actions.getAllComplete, (state: IngrxState<T>, { data }) => {
            return adapter.setAll(data,
                {
                    ...state,
                    listLoading: false,
                    queryRowsCount: data.length,
                    showInitWaitingMessage: false,
                    isAllLoaded: true
                })
        }),
        on(actions.getAllFail, (state: IngrxState<T>, payload) => {
            return { ...state, listLoading: false, showInitWaitingMessage: false, error: payload, isAllLoaded: false }
        }),

        on(actions.setQueryParam, (state: IngrxState<T>, { query }) => {
            return { ...state, lastQuery: query }
        }),
    ]
}