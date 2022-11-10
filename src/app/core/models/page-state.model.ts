export interface IPageState {
    pageNumber: number;
    pageSize: number;
    total: number;
}

export const PageSizes = [1,5, 10, 25, 50, 100]

export const defaultPageSize = 10;
