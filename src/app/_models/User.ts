import { Role } from "./Role";
import { Team } from "./Team";

export interface User {
  //userID: string;
  id: number;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  eVisible: boolean;
  password: string;
  pVisible: boolean;
  teamID: number;
  roleID: number;
  team: Team;
  role: Role;
}
