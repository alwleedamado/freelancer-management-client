import { AuditEntity } from "./audit-entity";
import { Gender } from "shared/models/gender";
import { Telephone } from "./telephone";
import { SpecialityType } from "./speciality-type";
import { Speciality } from "./speciality";

export interface Freelancer extends AuditEntity {
    name: string;
    email: string;
    gender: Gender;
    telephones: Telephone[];
    specialities: Speciality[];
}