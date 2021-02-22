import { Role } from "./Role";
import { Team } from "./Team";

export class User {
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
  //roleID: number;
  roleName: string;
  
  team: Team;
  role: Role;
  unconfirmed: boolean;
}
