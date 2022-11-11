import { AuditEntity } from "./audit-entity";
import { Gender } from "shared/models/gender";
import { Telephone } from "./telephone";

export interface Freelancer extends AuditEntity{
    name: string;
    email: string;
    gender: Gender;
    telephones: Telephone[];
}