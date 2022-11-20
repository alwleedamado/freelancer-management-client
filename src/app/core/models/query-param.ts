export interface QueryParams {
    sortOrder: 'asc' | 'desc';
    sortField: string;
    pageNumber: number;
    pageSize: number;
    filters: any;
    entityFilters: any
}

export function defaultQuery(): QueryParams {
    return {
        sortOrder: "desc",
        sortField: 'id',
        pageNumber: 1,
        pageSize: 10,
        filters: {},
        entityFilters: {}
    }
}
