import { Team } from "pages/freelancer/models/team";
import { AuditEntity } from "./audit-entity";

export interface Project extends AuditEntity{
    projectName: string;
    description: string;
    teams: Team[];
    dueDate: string;
    price: number;
}