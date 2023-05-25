import { Team } from "pages/team/models/team";
import { AuditEntity } from "shared/models/audit-entity";

export interface Project extends AuditEntity{
    projectName: string;
    description: string;
    teams: Team[];
    dueDate: string;
    price: number;
}