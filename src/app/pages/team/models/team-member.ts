import { AuditEntity } from "shared/models/audit-entity";

export interface TeamMember extends AuditEntity {
    teamId: string;

}