export interface QueryResultsModel {
    // fields
    items: any[];
    totalCount: number;
    errorMessage?: string;
    isContainsErrors?: boolean;
    errors?: ResponseError[];

}

export interface ResponseError {
    id?: number;
    message: string;
}

export interface ConcreteQueryResultsModel<T> {
    // fields
    items: T[];
    totalCount: number;
    errorMessage?: string;
    isContainsErrors?: boolean;
    errors?: ResponseError[];
}
