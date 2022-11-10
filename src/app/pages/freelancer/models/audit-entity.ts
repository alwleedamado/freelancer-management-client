export interface AuditEntity {
    id?: number;
    createdOn: string;
    updatedOn: string;
    createdBy: number;
    updatedBy: number;
    deletedOn: string;
    deletedBy: number;
}