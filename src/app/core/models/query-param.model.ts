import { SortDirection } from "./sort-state.model";




export interface QueryParamsModel {
    filter: string;
    sortOrder: SortDirection; // asc || desc
    sortField: string;
    pageNumber: number;
    pageSize: number;
    entityFilters: any;
}

export function defaultQuery(): QueryParamsModel {
    return {
        filter: "",
        sortOrder: "desc", // asc || desc
        sortField: null,
        pageNumber: 1,
        pageSize: 10,
        entityFilters: {},
    }
}
