import { Role } from "./Role";
import { Team } from "./Team";

export class User {
  id: string;
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  teamID: string;
  roleName: string;
  team: Team;
  password: string;
  unconfirmed: boolean;

  token: string;
}
