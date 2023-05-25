import { Freelancer } from "pages/freelancer/models/freelancer";
import { TeamType } from "./team-type";

export interface Team {
    id: string | number;
    name: string;
    teamType: TeamType;
    members: Freelancer[];
    teamLeader: Freelancer;
}