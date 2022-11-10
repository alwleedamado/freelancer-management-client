import { AuditEntity } from "./audit-entity";
import { PhoneType } from "./phone-type";

export interface Telephone extends AuditEntity {
    telephoneNumber: string;
    personId: number;
    phoneType: PhoneType;
}