import { Role } from "./Role";
import { Team } from "./Team";

export interface User {
  id: number;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  teamID: number;
  roleName: string;
  
  // team: Team;
  // role: Role;
}
