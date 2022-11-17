export interface QueryParamsModel {
    sortOrder: 'asc' | 'desc';
    sortField: string;
    pageNumber: number;
    pageSize: number;
    entityFilters: any;
}

export function defaultQuery(): QueryParamsModel {
    return {
        sortOrder: "desc",
        sortField: 'id',
        pageNumber: 1,
        pageSize: 10,
        entityFilters: {},
    }
}
