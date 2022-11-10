export interface CustomError {
    title?: string;
    message?: string;
    
    statusCode?: number;
    statusString?: string;
    
    
    formErrors?: any;
    details?: any;
}