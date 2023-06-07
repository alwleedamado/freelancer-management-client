import { AuditEntity } from "shared/models/audit-entity";

export interface TeamMember extends AuditEntity {
    teamId: string;
    name: string;
    freelancerId: string;
    specialityTypeId: string;
    specialityType: string;
    salary: number;

}export interface AddMemberToTeamCommand {
    freelancerId: string;
    specialityTypeId: string;
    salary: number;
}