export type SortDirection = 'asc' | 'desc' | ''


export interface ISortState {
    sortOrder: SortDirection; // asc || desc
    sortField: string;
}