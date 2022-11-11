import { EntityAdapter } from "@ngrx/entity";
import { createSelector, DefaultProjectorFn, MemoizedSelector } from "@ngrx/store";
import { IPageState, ISortState } from "core/models";
import { communicationResult } from "utils/models/communicationResult";
import { IngrxSelectors, IngrxState } from "utils/models/ngrx";

export function createSelectors<T>(adapter: EntityAdapter<T>, stateSelector: MemoizedSelector<object, IngrxState<T>, DefaultProjectorFn<IngrxState<T>>>)
    : IngrxSelectors<T> {

    const {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
    } = adapter.getSelectors();

    let selectDataIds = createSelector(
        stateSelector,
        selectIds);

    let selectDataEntities = createSelector(
        stateSelector,
        selectEntities);

    let selectDataEntityById = (id: string | number) => createSelector(
        selectDataEntities,
        data => data[id]
    );

    // select the array of data
    let selectData = createSelector(
        stateSelector,
        selectAll
    );
    // select the array of data
    let selectDataIsLoading = createSelector(
        stateSelector,
        (state) => state.listLoading
    );

    let selectDataCount = createSelector(
        stateSelector,
        selectTotal);

    let selectShowInitWaitingMessage = createSelector(
        stateSelector,
        (state) => state.showInitWaitingMessage
    );

    let selectPageLoading = createSelector(
        stateSelector,
        (state) => state.listLoading
    );

    let selectActionsLoading = createSelector(
        stateSelector,
        (state) => state.actionsloading
    );
    let selectExtraActionsLoading = createSelector(
        stateSelector,
        (state) => state.extraActionsLoading
    );

    let selectLastCreatedId = createSelector(
        stateSelector,
        (state) => state.lastCreatedId
    );

    let selectLastCreatedEntity = createSelector(
        selectDataEntities,
        selectLastCreatedId,
        (entities, id) => entities[id]
    )

    let selectLastLoadedId = createSelector(
        stateSelector,
        (state) => state.lastLoadedId
    );

    let selectTotalCount = createSelector(
        stateSelector,
        (state) => state.queryRowsCount
    );

    let selectLastQuery = createSelector(
        stateSelector,
        (state) => state.lastQuery
    );

    let selectEntityFilter = createSelector(
        selectLastQuery,
        (query) => query ? query.entityFilters : {}
    );

    let selectAddResult = createSelector(
        stateSelector,
        (state) => state.addResult
    );

    let selectUpdateResult = createSelector(
        stateSelector,
        (state) => state.updateResult
    );

    let selectDeleteResult = createSelector(
        stateSelector,
        (state) => state.deleteResult
    );
    let selectFindResult = createSelector(
        stateSelector,
        (state) => state.findResult
    );
    let selectFindIsLoading = createSelector(
        stateSelector,
        (state) => state.findResult == communicationResult.request
    );


    let selectDataAllLoaded = createSelector(
        stateSelector,
        (state) => state.isAllLoaded
    )

    let selectDataInitialized = createSelector(
        stateSelector,
        state => state.queryRowsCount > 0
    )

    let selectDataFiltered = createSelector(
        selectData,
        selectLastQuery,
        (data, query) => {
            let filter =  '';
            return data
                .filter(x => x["name"] === undefined || (x["name"] as string).toLowerCase().indexOf(filter) != -1)
                .sort((a, b) => {
                    let aVal, bVal;
                    if (!query.sortField) {
                        if (a["createdOn"]) {
                            aVal = a["createdOn"];
                            bVal = b["createdOn"];
                        }
                        else if (a["name"]) {
                            aVal = a["name"];
                            bVal = b["name"];
                        }
                        else return 0;
                    }
                    let sortReturn = query.sortOrder == "asc" ? -1 : 1
                    if (aVal < bVal) return sortReturn;
                    if (aVal > bVal) return sortReturn * (-1);
                    return 0;
                });
        }
    )

    let selectDataPaginated = createSelector(
        selectDataFiltered,
        selectLastQuery,
        (data, query) => {
            return data
                // .slice(query.pageNumber * query.pageSize, (query.pageNumber + 1) * query.pageSize)

        }
    )

    let selecDataFilteredCount = createSelector(
        selectDataFiltered,
        data => data.length
    )


    let selectPageState = createSelector(
        selectTotalCount,
        selectLastQuery,
        (total, query): IPageState => ({ pageNumber: query.pageNumber, pageSize: query.pageSize, total })
    );
    let selectSortState = createSelector(
        selectLastQuery,
        (state): ISortState => ({ sortField: state.sortField, sortOrder: state.sortOrder })
    );
    let selectError = createSelector(
        stateSelector,
        state => state.error
    );

    return {
        selectDataIds,
        selectDataEntities,
        selectDataEntityById,
        selectData,
        selectDataCount,
        selectDataIsLoading,
        selectShowInitWaitingMessage,
        selectPageLoading,
        selectActionsLoading,
        selectExtraActionsLoading,
        selectLastCreatedId,
        selectLastCreatedEntity,
        selectTotalCount,
        selectLastQuery,
        selectEntityFilter,
        selectAddResult,
        selectUpdateResult,
        selectDeleteResult,
        selectDataAllLoaded,
        selectDataInitialized,

        selectDataFiltered,
        selectDataPaginated,
        selecDataFilteredCount,
        selectLastLoadedId,
        selectFindResult,
        selectFindIsLoading,


        selectPageState,
        selectSortState,
        selectError,
    }
}