import { SortDirection } from "./sort-state.model";




export interface QueryParamsModel {
    sortOrder: SortDirection; // asc || desc
    sortField: string;
    pageNumber: number;
    pageSize: number;
    entityFilters: any;
}

export function defaultQuery(): QueryParamsModel {
    return {
        sortOrder: "desc", // asc || desc
        sortField: 'id',
        pageNumber: 1,
        pageSize: 10,
        entityFilters: {},
    }
}
