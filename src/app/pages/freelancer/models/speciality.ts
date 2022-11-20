import { SpecialityType } from "./speciality-type";

export interface Speciality {
    specialityType: SpecialityType;
    personId: number;
    specialityTypeId: number;
}